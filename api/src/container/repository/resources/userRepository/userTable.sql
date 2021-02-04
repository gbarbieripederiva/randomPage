CREATE TABLE IF NOT EXISTS users(
    id integer primary key autoincrement, 
    username text unique,
    password text,
    firstname text,
    surname text
);