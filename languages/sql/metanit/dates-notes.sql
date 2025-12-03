/* Dates practice */

REATE TABLE users
(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    date_of_birth TEXT
);

/* Dates as TEXT */

INSERT INTO users (name, date_of_birth) VALUES
('Tom', ('1986-02-12')),
('Bob', DATE('now', '-41 years'));
