DROP DATABASE IF EXISTS node;
CREATE DATABASE node;
use node;
create table usuario(
  id int unsigned primary key auto_increment ,
  nombre varchar(50) not null,
  clave varchar(50) not null
)engine=innoDB;s