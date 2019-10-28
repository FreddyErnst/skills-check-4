SELECT * FROM posts p
INNER JOIN users u on p.user_id = u.user_id
WHERE u.username ILIKE $1;