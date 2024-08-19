CREATE TABLE posts (
id INT,
user_id INT,
title VARCHAR (45),
post_text VARCHAR (255),
created_at TIMESTAMP)

CREATE TABLE likes (
id INT,
post_id INT,
user_id INT)