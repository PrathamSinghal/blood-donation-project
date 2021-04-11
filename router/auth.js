const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

// Models
const Register = require("../models/registers");
const Contact = require("../models/contactUs");
const Newsletter = require("../models/newsletter");

require("../db/conn");

router.get("/", (req, res) => {
  // const con = 'This is the best content on internet so far, so use it wisely';
  // const params = {'title':'PubG is the Best Game','content':con};
  res.status(200).render("home.pug");
  console.log(`from router`);
});

router.get("/home", async (req, res) => {
  const result = await Register.find({ chooseBloodGroup: `B+` }).select({
    firstname: 1,
    lastname: 1,
    chooseBloodGroup: 1,
  });
  res.status(200).render("home.pug", {
    nameofperson: result[5].firstname + " " + result[5].lastname,
    bloodgroupofperson: result[5].chooseBloodGroup,
  });

  // console.log(result);
  // console.log(result[0].firstname + " " + result[0].lastname);
  // nameofperson = result[0].firstname;
});

router.get("/donors", (req, res) => {
  res.status(200).render("donors.pug");
});

router.get("/blog", (req, res) => {
  res.status(200).render("blog.pug");
});

router.get("/contact", (req, res) => {
  res.status(200).render("contact.pug");
});

router.get("/about", (req, res) => {
  res.status(200).render("about.pug");
});

router.get("/login", (req, res) => {
  res.status(200).render("login.pug");
});

router.get("/register", (req, res) => {
  res.status(200).render("registration.pug");
});

router.get("/searchresult/AO%2B", async (req, res) => {
  // res.status(200).render("searchresult.pug");
  let bloodgroupsearchquery = req.query.bloodgroup;
  const result = await Register.find({ chooseBloodGroup: `A+` }).select({
    firstname: 1,
    lastname: 1,
    chooseBloodGroup: 1,
  });
  res.status(200).render("searchresult.pug", {
    nameofperson: result[0].firstname + " " + result[0].lastname,
    bloodgroupofperson: result[0].chooseBloodGroup,
  });
  // console.log(result);

  // console.log(req.query.bloodgroup);
});

router.get("/searchresult/A-", async (req, res) => {
  // res.status(200).render("searchresult.pug");
  let bloodgroupsearchquery = req.query.bloodgroup;
  const result = await Register.find({ chooseBloodGroup: `A-` }).select({
    firstname: 1,
    lastname: 1,
    chooseBloodGroup: 1,
  });
  res.status(200).render("searchresult.pug", {
    nameofperson: result[0].firstname + " " + result[0].lastname,
    bloodgroupofperson: result[0].chooseBloodGroup,
  });
  console.log(result);

  console.log(req.query.bloodgroup);
});
router.get("/searchresult/BO%2B", async (req, res) => {
  // res.status(200).render("searchresult.pug");
  let bloodgroupsearchquery = req.query.bloodgroup;
  const result = await Register.find({ chooseBloodGroup: `B+` }).select({
    firstname: 1,
    lastname: 1,
    chooseBloodGroup: 1,
  });
  res.status(200).render("searchresult.pug", {
    nameofperson: result[0].firstname + " " + result[0].lastname,
    bloodgroupofperson: result[0].chooseBloodGroup,
  });
  console.log(result);

  console.log(req.query.bloodgroup);
});
router.get("/searchresult/B-", async (req, res) => {
  // res.status(200).render("searchresult.pug");
  let bloodgroupsearchquery = req.query.bloodgroup;
  const result = await Register.find({ chooseBloodGroup: `B-` }).select({
    firstname: 1,
    lastname: 1,
    chooseBloodGroup: 1,
  });
  res.status(200).render("searchresult.pug", {
    nameofperson: result[0].firstname + " " + result[0].lastname,
    bloodgroupofperson: result[0].chooseBloodGroup,
  });
  console.log(result);

  console.log(req.query.bloodgroup);
});
router.get("/searchresult/ABO%2B", async (req, res) => {
  // res.status(200).render("searchresult.pug");
  let bloodgroupsearchquery = req.query.bloodgroup;
  const result = await Register.find({ chooseBloodGroup: `AB+` }).select({
    firstname: 1,
    lastname: 1,
    chooseBloodGroup: 1,
  });
  res.status(200).render("searchresult.pug", {
    nameofperson: result[0].firstname + " " + result[0].lastname,
    bloodgroupofperson: result[0].chooseBloodGroup,
  });
  console.log(result);

  console.log(req.query.bloodgroup);
});
router.get("/searchresult/AB-", async (req, res) => {
  // res.status(200).render("searchresult.pug");
  let bloodgroupsearchquery = req.query.bloodgroup;
  const result = await Register.find({ chooseBloodGroup: `AB-` }).select({
    firstname: 1,
    lastname: 1,
    chooseBloodGroup: 1,
  });
  res.status(200).render("searchresult.pug", {
    nameofperson: result[0].firstname + " " + result[0].lastname,
    bloodgroupofperson: result[0].chooseBloodGroup,
  });
  console.log(result);

  console.log(req.query.bloodgroup);
});
router.get("/searchresult/OO%2B", async (req, res) => {
  // res.status(200).render("searchresult.pug");
  let bloodgroupsearchquery = req.query.bloodgroup;
  const result = await Register.find({ chooseBloodGroup: `O+` }).select({
    firstname: 1,
    lastname: 1,
    chooseBloodGroup: 1,
  });
  res.status(200).render("searchresult.pug", {
    nameofperson: result[0].firstname + " " + result[0].lastname,
    bloodgroupofperson: result[0].chooseBloodGroup,
  });
  console.log(result);

  console.log(req.query.bloodgroup);
});
router.get("/searchresult/O-", async (req, res) => {
  // res.status(200).render("searchresult.pug");
  let bloodgroupsearchquery = req.query.bloodgroup;
  const result = await Register.find({ chooseBloodGroup: `O-` }).select({
    firstname: 1,
    lastname: 1,
    chooseBloodGroup: 1,
  });
  res.status(200).render("searchresult.pug", {
    nameofperson: result[0].firstname + " " + result[0].lastname,
    bloodgroupofperson: result[0].chooseBloodGroup,
  });
  // console.log(result);

  // console.log(req.query.bloodgroup);
});

// Post Requests

router.post("/register", (req, res) => {
  const {
    firstname,
    lastname,
    chooseBloodGroup,
    email,
    phone,
    address,
    country,
    state,
    city,
    zipcode,
    password,
    confirmpassword,
  } = req.body;

  if (
    (!firstname ||
      !lastname ||
      !chooseBloodGroup ||
      !email ||
      !phone ||
      !address ||
      !country ||
      !state,
    !city || !zipcode || !password || !confirmpassword)
  ) {
    return res.status(422).json({ error: "Please fill the fields properly" });
  }

  Register.findOne({ email: email })
    .then((userExist) => {
      if (userExist) {
        return res.status(422).json({ error: "email already exist" });
      } else {
        // const password = req.body.password;
        // const confirmpassword = req.body.confirmpassword;

        if (password === confirmpassword) {
          // now bcrypt the password here(hashing)
          // save method ko call karne se pehle ham ise call karenge.
          // for that we use pre and post method
          // uske andar hum type of event ko call karenge.
          // or callback functiion ke andar mai password ko hash karunga
          // lekin isko likhenge kidhar... uske liye registrationschema pee jaana padega.

          let myData = new Register({
            firstname: firstname,
            lastname: lastname,
            chooseBloodGroup: chooseBloodGroup,
            email: email,
            phone: phone,
            address,
            country,
            state,
            city,
            zipcode,
            password,
            confirmpassword,
          });

          myData
            .save()
            .then(() => {
              res.status(201).send("User Registered Successfully");
            })
            .catch((err) => {
              res.status(400).send("Item has not been saved to the database.");
            });
        } else {
          res.status(400).send("Password does not match.");
        }
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/login", (req, res) => {
  // console.log(req.body);
  // res.redirect('/login');
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ error: "Please fill the Data properly" });
  }
  
  const useLogin = Register.findOne({ email: email, password: password })
  .then((userExist) => {
    // const isMatch = bcrypt.compare(password, useLogin.password);
    // console.log(email);
    // console.log(password);
    // console.log(Register.findOne({email:email, password:password}));
    
    if (userExist) {
      return res.status(200).json({ success: "login successfully" });
    } else {
      // console.log('user not exist');
      return res.status(200).json({ error: "user not exist" });
    }
  })
  .catch((err) => {
    console.log(err);
    });
    // console.log(useLogin);

  // const isMatch = bcrypt.compare(password, password)
});

router.post("/searchresult", async (req, res) => {
  // const searchresult = req.body;
  // bloodgroup = searchresult.bloodgroup;
  // country = searchresult.country;
  // city = searchresult.city;
  
  const { country , city , bloodgroup } = req.body;
  console.log(req.body);
  
  if(!country || !city || !bloodgroup) {
    return res.status(422).json({ error: "Please fill the Data properly" });
  }
  
  
  // console.log(searchresult.length);
  // let count = -1;
  // for (var c in searchresult) {
  //   count = count + 1;
  // }
  // console.log(count);

  // if(count == 3) {
  //   console.log('Count is 3');
  // } else if (count == 2) {
  //   console.log('cpint is 2');
  // }
  // else{
  //   console.log('count is 1');
  // }

  // console.log(searchresult.city);
  // res.json({data:'Search successfully'});
  const result = await Register.find({
    $and: [
      { chooseBloodGroup: bloodgroup },
      { country: country },
      { city: city },
    ]
  }).select({
    firstname: 1,
    lastname: 1,
    chooseBloodGroup: 1,
    country: 1,
    city: 1,
  });
  if(result[0].chooseBloodGroup) {
    res.status(200).render("searchresult.pug", {
      nameofperson: result[0].firstname + " " + result[0].lastname,
      bloodgroupofperson: result[0].chooseBloodGroup,
    });
  } else{
    res.status(400).json({error: 'Blood Group not available.'})
  }
  // console.log(result);




});

router.post("/contact", (req, res) => {
  let myData = new Contact(req.body);
  myData
    .save()
    .then(() => {
      res.send("This item has been saved to the database.");
    })
    .catch(() => {
      res.status(400).send("Item has not been saved to the database.");
    });
});

router.post("/home", (req, res) => {
  let myData = new Newsletter(req.body);
  myData
    .save()
    .then(() => {
      res.send("This item has been saved to the database.");
    })
    .catch(() => {
      res.status(400).send("Item has not been saved to the database.");
    });
});

module.exports = router;
