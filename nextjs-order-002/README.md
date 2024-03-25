# 주문서 관리 프로젝트

## Prisma 설정

- `npx prisma init`
- `prisma/schema.prisma` 파일과 `.env` 파일 확인
- `.env` 파일에 DB 연결 정보 설정

```.env
DATABASE_URL="mysql://root:!Biz8080@localhost:3365/orderDB"
```

- `prisma/schema.prisma` 파일에서 다음 항목 확인. provider `mysql` 로 변경

```schema.prisma

    datasource db {
    provider = "mysql"
    url      = env("DATABASE_URL")
    }

```

- 이미 적용된 DB schema import : `npx prisma db pull`
- prisma 설정 적용 : `npx prisma generate` 실행
- `schema.prisma` 파일과 `package.json` 파일 확인

## prisma 에서 where 절의 like 연산 표현하기

- prisma 를 통하여 like 연산을 수행할때는 일번적인`where like` 연산과는 다소 다른 방식으로 진행된다
- 프리즈마의 라이크 연산은 `full text search` 라는 방식을 사용한다.
- mysql 에서는 table 에 `full text search`
- `schema.prisma` 파일에 `previewFeatures` 항목을 추가하기

```schema.prisma
    generator client {
    provider = "prisma-client-js"
    previewFeatures = ["fullTextSearch", "fullTextIndex"]
    }
```

- prisma model 에 fullText 선언하기
- c_name 칼럼과 c_tel 칼럼에 fulltext 검색을 할 수 있도록 선언

```schema.prisma

model tbl_customer {
  c_code String @id @db.VarChar(5)
  c_name String @db.VarChar(25)
  c_tel  String @db.VarChar(15)
  @@fulltext([c_name,tel])
}
```

- Prisma 개발환경 재 설정하기

```bash
npx prisma generate
```

## API 에서 fullTEXT 검색 실행하기

- where 절

```js
const result = await CUSTOMER.findMany({
  where: {
    c_name: {
      search: key,
    },
  },
});

// c_name 칼럼에 "이몽룡 이가" 문자열이 포함된 경우
// c_name 칼럼의 문자열이 "이몽룡 이가" 인 경우
  where: {
    c_name: {
      search: '이몽룡 이가',
    },
  }

// c_name = '이몽룡' OR c_name <> '성춘향'
where :{
    c_name : {
        contians:"이몽"
    },
 c_tel:{
    contains:"9019"
 },
}

```
