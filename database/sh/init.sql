-- ***Postgresql*** --
-- CREATE USER traveler_user WITH PASSWORD 'test1234';
-- ALTER ROLE traveler_user
-- SET
--   client_encoding TO 'utf-8';
-- ALTER ROLE traveler_user
-- SET
--   default_transaction_isolation TO 'read committed';
-- ALTER ROLE traveler_user WITH SUPERUSER;
-- CREATE DATABASE test_db;
-- GRANT ALL PRIVILEGES ON DATABASE test_db TO traveler_user;
-- ***Mysql*** --
-- Create User
CREATE USER dev identified by '{kimyongkukdevsqlpw}';
-- DB 생성
CREATE DATABASE symphonia_test;
-- DB =>utf-8
ALTER DATABASE symphonia_test CHARACTER SET utf8 COLLATE utf8_general_ci;
-- transactionLevel read committed
SET
  GLOBAL TRANSACTION ISOLATION LEVEL READ COMMITTED;
-- 모든 symphonia_test 모든 테이블 접근권한 with SuperUser
  GRANT ALL PRIVILEGES ON symphonia_test.* TO dev WITH GRANT OPTION;
-- 적용
  flush privileges;