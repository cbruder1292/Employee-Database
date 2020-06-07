DROP DATABASE IF EXISTS employees_Db;

CREATE DATABASE employees_Db;

USE employees_Db;

CREATE TABLE department (
        id INT(10) NOT NULL AUTO_INCREMENT,
        Department VARCHAR (30) NOT NULL,
        PRIMARY KEY (id)
);

CREATE TABLE roles (
        id INT(10) NOT NULL AUTO_INCREMENT,
        Title VARCHAR (30) NOT NULL,
        Salary DECIMAL NOT NULL,
        department_id INT (10) NOT NULL,
        PRIMARY KEY (id)
);

CREATE TABLE employee (
        id INT(10) NOT NULL AUTO_INCREMENT,
        FirstName VARCHAR (30) NOT NULL,
        LastName VARCHAR (30) NOT NULL,
        roles_id INT (10) NOT NULL,
        manager_id INT (10) NULL,
        PRIMARY KEY (id)
);