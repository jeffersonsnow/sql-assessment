{
    "carid": 1,
    "make": "Toyota",
    "model": "Camry",
    "year": 1991,
    "ownerid": 1
  },

  {
     "userid": 1,
     "firstname": "John",
     "lastname": "Smith",
     "email": "John@Smith.com"
   },

select users.firstname, users.lastname, count(vehicles.carid) from users
join vehicles on vehicles.ownerid = users.userid;
