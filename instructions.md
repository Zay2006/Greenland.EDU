```markdown
# Setting up a Node.js, Express, MySQL, and Sequelize Application

This guide outlines the steps to set up a Node.js application using Express as the web framework, MySQL as the database, and Sequelize as the ORM.

## Prerequisites

-   Node.js and npm installed on your machine.
-   MySQL server installed and running.

## Steps

1.  **Install Express, Sequelize, and MySQL2:**

    ```bash
    npm install express sequelize mysql2
    ```


    -   Install Sequelize CLI:

        ```bash
        npm install --save-dev sequelize-cli
        ```

    -   Initialize Sequelize:

        ```bash
        npx sequelize init
        ```

5.  **Define your models:**

    -   Create models using Sequelize CLI:

        ```bash
        npx sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string
        ```

6.  **Run migrations:**

    -   Create the database:

        ```mysql
        CREATE DATABASE your_database;
        ```

    -   Run the migrations:

        ```bash
        npx sequelize db:migrate
        ```

7.  **Use Sequelize in your application:**

    ```javascript
    // index.js
    const express = require('express');
    const { Sequelize, DataTypes } = require('sequelize');

    const app = express();
    const port = 3000;

    // Option 3: Passing parameters separately (other dialects)
    const sequelize = new Sequelize('your_database', 'your_username', 'your_password', {
      host: 'localhost',
      dialect: 'mysql'
    });

    // Define a model
    const User = sequelize.define('User', {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      }
    }, {
      // Other model options go here
    });

    // Sync the model with the database
    (async () => {
      await sequelize.sync();
      // Code here
    })();

    ```

## Configuration

-   Modify the `config.json` file to match your MySQL server settings.
-   Update the model definitions in the `models` directory to match your data structure.

## Usage

1.  Start the application:

    ```bash
    node index.js
    ```

2.  Access the application in your browser at `http://localhost:3000`.

## Dependencies

-   express
-   sequelize
-   mysql2
-   sequelize-cli (for development)

## Notes

-   Remember to handle your database credentials securely.  Do not commit them to your repository.
-   This is a basic setup.  You'll likely need to add more features and error handling for a production application.
```


-- Create the greenfield_edu database
CREATE DATABASE IF NOT EXISTS greenfield_eduStudent;
USE greenfield_edu;

-- Create User Table
CREATE TABLE IF NOT EXISTS User (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create Student Table
CREATE TABLE IF NOT EXISTS Student (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fullName VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL DEFAULT 'student',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO Student (fullName, email, password, role) VALUES
('Alice Johnson', 'alice.johnson@example.com', 'hashed_password_1', 'student'),
('Bob Smith', 'bob.smith@example.com', 'hashed_password_2', 'student'),
('Charlie Brown', 'charlie.brown@example.com', 'hashed_password_3', 'student'),
('Diana Prince', 'diana.prince@example.com', 'hashed_password_4', 'student'),
('Ethan Hunt', 'ethan.hunt@example.com', 'hashed_password_5', 'student'),
('Fiona Adams', 'fiona.adams@example.com', 'hashed_password_6', 'admin'),
('George Miller', 'george.miller@example.com', 'hashed_password_7', 'student'),
('Hannah Lee', 'hannah.lee@example.com', 'hashed_password_8', 'student'),
('Isaac Newton', 'isaac.newton@example.com', 'hashed_password_9', 'student'),
('Jessica Parker', 'jessica.parker@example.com', 'hashed_password_10', 'teacher');


INSERT INTO User (username, email, password, role) VALUES
('john_doe', 'john.doe@example.com', 'hashed_password_1', 'student'),
('jane_smith', 'jane.smith@example.com', 'hashed_password_2', 'student'),
('mark_jones', 'mark.jones@example.com', 'hashed_password_3', 'teacher'),
('lisa_wong', 'lisa.wong@example.com', 'hashed_password_4', 'student'),
('admin_user', 'admin@example.com', 'hashed_password_5', 'admin'),
('mike_brown', 'mike.brown@example.com', 'hashed_password_6', 'student'),
('susan_clark', 'susan.clark@example.com', 'hashed_password_7', 'teacher'),
('emma_wilson', 'emma.wilson@example.com', 'hashed_password_8', 'student'),
('charles_evans', 'charles.evans@example.com', 'hashed_password_9', 'admin'),
('olivia_taylor', 'olivia.taylor@example.com', 'hashed_password_10', 'student');


-- Create Course Table
CREATE TABLE IF NOT EXISTS Course (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    code VARCHAR(50) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO Course (name, code) VALUES
('Introduction to Programming', 'CS101'),
('Data Structures and Algorithms', 'CS201'),
('Database Management Systems', 'DB101'),
('Web Development Fundamentals', 'WD101'),
('Machine Learning Basics', 'ML101'),
('Cybersecurity Principles', 'CYB101'),
('Software Engineering', 'SE301'),
('Cloud Computing', 'CC401'),
('Mobile App Development', 'MAD101'),
('Artificial Intelligence', 'AI201');


ALTER TABLE Student ADD CONSTRAINT fk_student_user FOREIGN KEY (id) REFERENCES User(id);

CREATE TABLE IF NOT EXISTS Student_Course (
    student_id INT,
    course_id INT,
    PRIMARY KEY (student_id, course_id),
    FOREIGN KEY (student_id) REFERENCES Student(id) ON DELETE CASCADE,
    FOREIGN KEY (course_id) REFERENCES Course(id) ON DELETE CASCADE
);

CREATE INDEX idx_user_email ON User(email);
CREATE INDEX idx_student_email ON Student(email);
CREATE INDEX idx_course_code ON Course(code);


CREATE TABLE IF NOT EXISTS Course (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    code VARCHAR(50) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
INSERT INTO Course (name, code) VALUES
('Introduction to Programming', 'CS101'),
('Data Structures and Algorithms', 'CS201'),
('Database Management Systems', 'DB101'),
('Web Development Fundamentals', 'WD101'),
('Machine Learning Basics', 'ML101'),
('Cybersecurity Principles', 'CYB101'),
('Software Engineering', 'SE301'),
('Cloud Computing', 'CC401'),
('Mobile App Development', 'MAD101'),
('Artificial Intelligence', 'AI201');
