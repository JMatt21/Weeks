DROP DATABASE IF EXISTS songlist_db;
CREATE DATABASE songlist_db;

USE songlist_db;

CREATE TABLE top5000(
	id int(4) NOT NULL AUTO_INCREMENT,
    artist VARCHAR(45) NOT NULL,
    name varchar(100) NOT NULL,
    year int(4),
    sales_global double(10,4),
    sales_us double(10,4),
    sales_uk double(10,4),
    sales_eu double(10,4),
    sales_rest double(10,4),
    PRIMARY KEY (id)
);
CREATE TABLE topAlbums (
	id INT(10) NOT NULL AUTO_INCREMENT,
    band VARCHAR(100),
    name VARCHAR(100),
    year INT(4),
    sales_global double(10,4),
    sales_us double(10,4),
    sales_uk double(10,4),
    sales_eu double(10,4),
    sales_rest double(10,4),
    PRIMARY KEY (id)
    
);
SELECT band, top5000.name, top5000.year, topAlbums.name, topAlbums.year
FROM top5000
INNER JOIN topAlbums ON top5000.artist = topAlbums.band	AND top5000.year = topAlbums.year
WHERE topAlbums.band = 'The Beatles' AND top5000.artist = 'The Beatles';

