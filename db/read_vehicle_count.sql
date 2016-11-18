select count(vehicleid) from users
join vehicles on vehicles.ownerid = users.userid
where users.userid = $1;
