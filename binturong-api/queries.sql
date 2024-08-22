INSERT INTO post (id,title,text,geo_tag,user_id)
VALUES(1,'Sewing Project',"Been working on a beanie",false,1);

INSERT INTO post (id,title,text,geo_tag,user_id)
VALUES(2,'Stained Wood oak Table',"Dining table oak wooden table solid wood tree edge tree table oiled table solid wood table Avalible on Etsy",false,2);

INSERT INTO post (id,title,text,geo_tag,user_id)
VALUES(3,'Gaming Rig',"Personalized Headphone Stand,Gamer Gift, 3D Night Light, Video Game Lover, Custom Gamertag Light Sign, Personalized Streamer Headset Holder",true,3);

INSERT INTO post (id,title,text,geo_tag,user_id)
VALUES(4,'Mushroom haul',"this is every mushroom foraging guide",true,4);

INSERT INTO post (id,title,text,geo_tag,user_id)
VALUES(5,'Test','Testing out this new post',false,5);

INSERT INTO post (id,title,text,geo_tag,user_id)
VALUES(6,'#OptimistFarmer','Do you consider Bee keeping and Honey production as a viable business? 𝔉𝔞𝔯𝔪 𝔴𝔦𝔱𝔥 #OptimistFarmer',true,5);

INSERT INTO post (id,title,text,geo_tag,user_id)
VALUES(7,'#SundayYellow ','#SundayYellow is a very very wet Mandevilla sunbeam💦 it’s not raining at the moment but that could change at any time. I am in desperate need of a dry out here. ☀️🌼

#Flowers #Gardening #Plants #FlowerReport #GardeningLife #TropicalFlowers #FlowerHunting',false,6);

INSERT INTO post (id,title,text,geo_tag,user_id)
VALUES(8,'DAHLIA «WINDMILL» in our August garden.😄','#Flowers #nature #NaturePhotography #gardening #gardens #Norway  #dahlia #GardeningX  #NaturePhoto',false,6);

INSERT INTO post (id,title,text,geo_tag,user_id)
VALUES(9,'Cattleya trianae var. pincelada','I’m reposting past orchid flowers while I wait for new orchid flowers. Honestly I don’t know if I haven’t killed this little beauty.',false,6);

INSERT INTO post (id,title,text,geo_tag,user_id)
VALUES(10,'A one of a kind wedding dress','500 yards of fabric, 2000 hand sewn glass beads, a removable skirt, and almost one year of designing/sewing. 
Handmade by me here in Texas.',true,7);

INSERT INTO user(id,email,pw_hash,username)
VALUES(1,'garrisjg@topigx.com','$2a$10$OgSZTkMmaEP4RBgFhfRGfuQu8zDto2j4OtFoqO3hpDNnqDOnnYS4'S,'');

INSERT INTO user(id,email,pw_hash,username)
VALUES(2,'royaki2009@formula1forbusiness.com','$2a$10$OgSZTkMmaEP4RBgFhfRGfuQu8zDto2j4OtFoqO3hpDNnqDOnnYS4S','royaki2009');

INSERT INTO user(id,email,pw_hash,username)
VALUES(3,'orennovosel@enloza.com','$2a$10$OgSZTkMmaEP4RBgFhfRGfuQu8zDto2j4OtFoqO3hpDNnqDOnnYS4S','orennovosel');

INSERT INTO user(id,email,pw_hash,username)**
VALUES(4,'theroman92@sonophon.ru','$2a$10$OgSZTkMmaEP4RBgFhfRGfuQu8zDto2j4OtFoqO3hpDNnqDOnnYS4S','theroman92@sonophon.ru');

INSERT INTO user(id,email,pw_hash,username)
VALUES(5,'hsm2000hsm@24hinbox.com','$2a$10$OgSZTkMmaEP4RBgFhfRGfuQu8zDto2j4OtFoqO3hpDNnqDOnnYS4S','hsm2000hsm@24hinbox.com');

INSERT INTO user(id,email,pw_hash,username)
VALUES(6,'princedazzlevip@niceminute.com','$2a$10$OgSZTkMmaEP4RBgFhfRGfuQu8zDto2j4OtFoqO3hpDNnqDOnnYS4S','princedazzlevip');

INSERT INTO user(id,email,pw_hash,username)
VALUES(7,'liaoning@onlen.in','$2a$10$OgSZTkMmaEP4RBgFhfRGfuQu8zDto2j4OtFoqO3hpDNnqDOnnYS4S','liaoning');

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
