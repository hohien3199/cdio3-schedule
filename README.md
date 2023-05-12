# cdio3-schedule
## To run project, please follow the steps below:

# Step 1: Create the .env File
Create a .env file in the root directory of the project and add the following content:

```
DATABASE_HOST=localhost
DATABASE_USER=root
DATABASE_PASS=
DATABASE={database_name}
JWT_SECRET={random_key}
JWT_EXPIRES=90d
COOKIE_EXPIRES=90
COOKIE_NAME=userLogged
```

Replace {database_name} and {random_key} with your own values.

# Step 2: Create the Database

Create a new database in your preferred database management system and use the following schema:

```
CREATE TABLE users (
username VARCHAR(50) NOT NULL,
password TEXT NOT NULL,
fullname VARCHAR(100) NOT NULL,
PRIMARY KEY (username)
);
```

# Step 3: Install Dependencies

Install the necessary Node.js libraries by running the following command in your terminal:
****Make sure you have installed NodeJS before*

```
npm install
```

This will install all the dependencies listed in the package.json file.

# Step 4: Start Your Database Management Software

Start your database management software. For example, if you are using XAMPP, start the Apache and MySQL modules.

# Step 5: Run the Project

Run the following command in your terminal to start the project:

```
npm start
```

# Step 6: Access the Project

After starting the project, access it by visiting `http://localhost:3000` in your web browser.
