create database todos;
\c todos
create table item(
    id serial primary key,
    description varchar(255)
);