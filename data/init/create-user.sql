USE mysql;
CREATE USER 'carrot'@'%' IDENTIFIED BY 'market';
GRANT ALL PRIVILEGES ON *.* TO 'carrot-market'@'%';
FLUSH PRIVILEGES;