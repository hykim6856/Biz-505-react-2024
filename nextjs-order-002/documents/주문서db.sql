-- 주문서 데이터 정규화
CREATE DATABASE orderDB;
USE orderDB;

drop table tbl_custom;

CREATE TABLE tbl_tmp_order(
o_num	VARCHAR(6)		PRIMARY KEY	,
o_date	VARCHAR(10)			,
o_ccode	VARCHAR(5)			,
o_name	VARCHAR(5)	NOT NULL		,
o_tel	VARCHAR(13)			,
o_pcode1	VARCHAR(6)			,
o_pcode2	VARCHAR(6)			,
o_pcode3	VARCHAR(6)			
);

select count(*) from tbl_tmp_order;
-- 주문-고객 relation 생성
select o_num, o_ccode from tbl_tmp_order;

select * from tbl_order_product;
-- 주문-상품 relation 생성
select * from
(
select o_num, o_pcode1 AS 상품코드 from tbl_tmp_order
union
select o_num, o_pcode2 AS 상품코드 from tbl_tmp_order
union
select o_num, o_pcode3 AS 상품코드 from tbl_tmp_order
)as m where m.상품코드 <> '' order by m.o_num;

-- 생성한 relation 데이터를 저장할 relation table생성하기

create table tbl_order_customer(
oc_onum	VARCHAR(6)	not null,
oc_ccode	VARCHAR(5)	not null,
	PRIMARY KEY (oc_onum, oc_ccode)	
);

drop table tbl_order_product;
create table tbl_order_product(
op_onum	VARCHAR(6)	not null,
op_pcode	VARCHAR(6)	not null,
	PRIMARY KEY (op_onum, op_pcode)	
);

CREATE TABLE tbl_orders (
    o_num VARCHAR(6) PRIMARY KEY,
    o_date VARCHAR(10) NOT NULL
);

truncate table tbl_order_customer;

-- 주문원장, 주문- 고객, 주문- 상품 의 참조관계설정하기
/*
주문원장 ㅣ 주문 -0 고객 테이블의 관계는 1Kn의 관계이다
주문원장을 master table 이며, 주문0 고객은 RElatrion table 이가
주문 원장에 있는 코드는 주문- 고객 에 있을 수도 있다. : 0..n
만약 주문-고객에 코드가 있는데 주문원장에 없다 : 잇을수 없다.
주문- 고객을 기준으로 주문번호가 주문원장에 있는지 확인하기
*/

select * 
 from tbl_order_customer C
 left JOIN tbl_orders O
 ON C.oc_onum = O.o_num
 where O.o_num Is null;
 
 select * 
 from tbl_order_product P
 left JOIN tbl_orders O
 ON P.op_onum = O.o_num
 where O.o_num Is null;
 
 -- 3개의 table 간의 참조무결성을 확인했으므로, fk 설정이 가능
 
 -- 주문원장, 주문-고객 간의 fk 설정
 alter table tbl_order_customer
 add constraint fk_oc  foreign key (oc_onum)
 REFERENCES tbl_orders(o_num);
 
  alter table tbl_order_product
 add constraint fk_op  foreign key (op_onum)
 REFERENCES tbl_orders(o_num);
 
--  alter table tbl_order_customer
--  drop constraint (fk명);

-- 고객정보, 상품정보 테이블 생성, 데이터 import
CREATE TABLE tbl_customer (
c_code	VARCHAR(5)		PRIMARY KEY	,
c_name	VARCHAR(25)	NOT NULL		,
c_tel	VARCHAR(15)	NOT NULL		

);

drop table tbl_product;
CREATE TABLE tbl_product (
p_code	VARCHAR(6)		PRIMARY KEY	,
p_name	VARCHAR(25)	NOT NULL		,
p_item	VARCHAR(25)	NOT NULL		,
p_price	int	NOT NULL		
);

/*
테이블 관계설정
	상품정보, 주문-상품
    고객정보, 주문-고객
    
*/
-- 각 테이블간에 무결성 검증

 select * 
 from tbl_order_customer OC
 left JOIN tbl_customer C
 ON OC.oc_ccode = C.c_code
 where C.c_code Is null;
 
select * 
 from tbl_order_product OP
 left JOIN tbl_product P
 ON OP.op_pcode = P.p_code
 where P.p_code Is null;
 
 -- 테이블간에 FK 설정하기
 -- 주문-상품과 상품정보
 -- 주문-고객과 고객정보

 
   alter table tbl_order_customer
 add constraint fk_oc_code  foreign key (oc_ccode)
 REFERENCES tbl_customer(c_code);
 
    alter table tbl_order_product
 add constraint fk_op_code  foreign key (op_pcode)
 REFERENCES tbl_product(p_code);
 
 /*
 주문원장, 주문- 상품, 주문-고객, 상품정보, 고객정보의 형식으로 
 각 테이블을 분리하고 relation 을 설정했다. 
 여기까지 제3정규화 또는 BCNF(보이스코드 정규화) 까지 완성되었다.
 하지만 실제 사용하려고 하면 다중의 Table 이 서로 join 되어야하는 불편함이 발생하였다.
 
 이런 상황이 되면, 과연 테이블을 다수로 쪼개는 것이 꼭 좋은 상황인지 살펴보고, 
 table 간에 통합을 하여 table의 개수를 줄이는 것을 고민해야한다.
 이처럼 분리된 테이블을 다시 통합하는 것을 제 4 정규화, 제 5정규화 과정이라고 한다.
 
 tbl_order_product, tbl_order_customer Relation 을 제거하고 
 주문 원장과 고객정보, 주문원장과 상품정보를 연결할 수 있는 방법을 모색한다.
 
 1. 한개의 주문에는 반드시 고객은 한명 뿐이다.
 2. 한개의 주문에는 여러개의 상품이 포함될 수 있다.
 단, 한개의 주문에 같은 상품이 중복될 수 없다.
 */
 -- 기존의 Relation(fk)를 제거
 Alter table tbl_order_customer
 drop constraint fk_oc;
 Alter table tbl_order_customer
 drop constraint fk_oc_code;
 Alter table tbl_order_product
 drop constraint fk_op;
 Alter table tbl_order_product
 drop constraint fk_p;
 
 -- 주문 원장에 다시 고객코드와 상품코드를 추가하기
 /*
 주문원장에 고객코드와 상품코드를 추가하는 통합을 하려고 했더니
 고객은 한 주문에 한명의 고객만 초함되는 원칙이 있어
 문제가 없으나
 상품은 한 주문에 다수의 상품이 포함되는 원칙이 있다.
 이럴 때  어떻게 주문원장을 처리할 것인가?
 이러한 상황이 되면 tbl_order_product Relation table 은 그대로 유지하는것이 유리하겠다.
 
 */
 
 alter table tbl_order_product
 add constraint fk_op  foreign key (op_onum)
 REFERENCES tbl_orders(o_num);
 
    alter table tbl_order_product
 add constraint fk_p  foreign key (op_pcode)
 REFERENCES tbl_product(p_code);
 
 -- 주문원장, 고객코드를 연결하기 위한 조치
 -- 주문원장에 고객 코드 칼럼이 없는 상태
 /*
 1. 주문원장에 고객코드 칼럼을 추가하고
 2. 주문 -고객 Relation table을 참조하여
 3. 주문번호에 맞는 고객 코드를 주문원장 table에 update
 */
-- 1. 주문원장에 고객코드 칼럼을 추가하기
-- 이미 주문원장과 주문-고객 테이블에 데이터가 많이 있는 상태
 ALTER TABLE tbl_orders
 ADD COLUMN o_ccode VARCHAR(5); 
 
 
 /*
 Sub Query 를 이용한 다른 table 에서 데이터를 조회하여 UPdate 를 실행하는 것
 1. UPDATE tbl_orders 명령이 SUb QUery 가 잇음을 알게되면
 2. SELECT * FROM tbl_orders 명령을 자체적으로 실행한다.
 3. 이 결과는 List type 의 데이터가 되고
 4. 자체적으로 forEach() 문이 실행된다.
 5. tbl_orderlist.forEach(item) 처럼 실행된다.
 6. item 값을 Sub Query (...) 로 내려 보낸다.
 7. SELECT * FROM tbl_order_customer
	WHERE item.o_num 와 같은 내부 Query 가 실행된다.
 8. 결과값으로 oc_code 값을 return 한다.
 9. SET o_ccode = return (값) 이 실행되며 o_ccode 칼럼값이 변경된다.
 */
-- mysql 은  update , delete 를 2개 이상 레코드에 대해아ㅕ 시행할 수없도록 초기 세팅이 되어있다.
-- 현재 tbl_others 테이블 전체 데이터에 update를 실행해야하므로 잠시 safe update 를 해야한다.
SET SQL_SAFE_UPDATES = 1;
UPDATE tbl_orders O
SET o_ccode =
(
	SELECT OC.oc_ccode
    FROM tbl_order_customer OC
    WHERE O.o_num = OC.oc_onum
);

-- 데이터 UPDate 확인
SELECT * FROM tbl_orders;
SELECT * FROM tbl_orders O JOIN tbl_customer C ON O.o_ccode = C.c_code;
SELECT * FROM tbl_orders O LEFT JOIN tbl_customer C ON O.o_ccode = C.c_code
	WHERE C.c_code IS NULL;
    
    
    
alter table tbl_orders
 add constraint fk_oc  foreign key (o_ccode)
 REFERENCES tbl_customer(c_code);