-- Création base de donnée
DROP DATABASE IF EXISTS groupomania;

CREATE DATABASE groupomania CHARACTER SET 'utf8mb4';

USE groupomania;

-- Table Role
DROP TABLE IF EXISTS Role ;

CREATE TABLE IF NOT EXISTS Role (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL DEFAULT 'participant',
    PRIMARY KEY (id)
)
ENGINE = InnoDB;

-- Table User
DROP TABLE IF EXISTS User;

CREATE TABLE IF NOT EXISTS User (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    username VARCHAR(45) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    id_role INT UNSIGNED NOT NULL,
    PRIMARY KEY (id),
    UNIQUE (email),
    CONSTRAINT fk_user_role,
        FOREIGN KEY (id_role)
        REFERENCES Role (id)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION
)
ENGINE = InnoDB;

-- Table Post
DROP TABLE IF EXISTS Post;

CREATE TABLE IF NOT EXISTS Post (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    content LONGTEXT NOT NULL,
    id_user INT UNSIGNED NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT fk_user_post,
        FOREIGN KEY (id_user)
        REFERENCES User (id)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION
)
ENGINE = InnoDB;

-- Table Comment
DROP TABLE IF EXISTS Comment;

CREATE TABLE IF NOT EXISTS Comment (
    user_id INT UNSIGNED NOT NULL,
    post_id INT UNSIGNED NOT NULL,
    content VARCHAR(255) NOT NULL,
    PRIMARY KEY (user_id, post_id),
    CONSTRAINT fk_comment_user
        FOREIGN KEY (user_id)
        REFERENCES User (id)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    CONSTRAINT fk_comment_post
        FOREIGN KEY (post_id)
        REFERENCES Post (id)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION
)
ENGINE = InnoDB;