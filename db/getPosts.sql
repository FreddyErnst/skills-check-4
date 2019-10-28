SELECT * FROM posts p
INNER JOIN users u 
ON u.user_id = p.user_id;