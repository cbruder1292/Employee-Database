INSERT INTO department(Department)
VALUES ('Emergency');

INSERT INTO department(Department)
VALUES ('Oncology');

INSERT INTO department(Department)
VALUES ('Radiology');

INSERT INTO department(Department)
VALUES ('Neurology');

INSERT INTO department(Department)
VALUES ('Laboratory');

INSERT INTO roles(id, Title, Salary, department_id)
VALUES (1, 'Emergency Physician', 250000, 1);

INSERT INTO roles(id, Title, Salary, department_id)
VALUES (2, 'Oncologist', 350000, 2);

INSERT INTO roles(id, Title, Salary, department_id)
VALUES (3, 'Radiologist', 300000, 3);

INSERT INTO roles(id, Title, Salary, department_id)
VALUES (4, 'Neurologist', 280000, 4);

INSERT INTO roles (id, Title, Salary, department_id)
VALUES (5, 'Pathologist', 180000, 5);

INSERT INTO employee(id,FirstName,LastName,roles_id)
VALUES (1, "John", "Wick", 1);

INSERT INTO employee(id,FirstName,LastName,roles_id,manager_id)
VALUES (2, "Marcus", "Aurelius", 4, 3);

INSERT INTO employee(id,FirstName,LastName,roles_id,manager_id)
VALUES (3, "Wonder", "Woman", 3, 1);

INSERT INTO employee(id,FirstName,LastName,roles_id,manager_id)
VALUES (4, "Edward", "Elric", 2, 2);

INSERT INTO employee(id,FirstName,LastName,roles_id,manager_id)
VALUES (5, "Winry", "Lockbell", 5, 1);