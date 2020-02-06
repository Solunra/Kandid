CREATE TABLE users (
    UserID int PRIMARY KEY,
    Username varchar(255),
    Password varchar(255)
);

CREATE TABLE posts (
    PostID int PRIMARY KEY,
    UserId int REFERENCES users(UserID),
    ImageLink varchar,
    Caption character(2200),
    Likes int
);

CREATE TABLE likeSources (
    UserID int[]
);

CREATE TABLE comments (
    PostID int REFERENCES posts(PostID),
    UserID int REFERENCES users(UserID),
    Comments character(2200) 
);

CREATE TABLE followers (
    UserID int REFERENCES  users(UserID),
    FollowerID int REFERENCES users(UserID)
)
