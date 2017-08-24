USE burgers_db;

DELETE FROM burgers;
ALTER TABLE burgers AUTO_INCREMENT = 1;

insert into burgers (burger_name, devoured) values ('bacon burger', 0);
insert into burgers (burger_name, devoured) values ('double cheese', 0);
insert into burgers (burger_name, devoured) values ('jalapeno burger', 0);