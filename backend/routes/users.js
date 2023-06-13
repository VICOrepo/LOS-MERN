const router = require("express").Router();
let User = require("../models/user.model");

router.route("/").get((req, res) => {
  User.find()
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error:" + err));
});
router.route("/add").post((req, res) => {
  let {
    LoanAmount,
    FirstName,
    MiddleName,
    LastName,
    LoanPurpose,
    City,
    ZIP,
    State,
    Email,
    HPhone,
    MPhone,
    SSN,
    Address1,
    Address2,
    Rtype,
    Emptype,
    Empname,
    EmpPhone,
    DOB,
    RDate,
    status,
  } = req.body;
  console.log(req.body);
  const newuser = new User({
    LoanAmount,
    FirstName,
    MiddleName,
    LastName,
    LoanPurpose,
    City,
    ZIP,
    DOB,
    RDate,
    State,
    Email,
    HPhone,
    MPhone,
    SSN,
    Address1,
    Address2,
    Rtype,
    Emptype,
    Empname,
    EmpPhone,
    // DOB,
    // RDate,
    status,
  });
  newuser
    .save()
    .then(() => res.json(newuser))
    .catch((err) => {
      res.status(400).json(err.message);
    });
});

//GET API
router.route("/:id").get((req, res) => {
    User.findById(req.params.id)
      .then((user) => res.json(user))
      .catch((err) => res.status(400).json("Error: " + err));
  });
  
  //FOR DELETE
  router.route("/:id").delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
      .then(() => {
        res.json("User details deleted.");
      })
      .catch((err) => res.status(400).json("Error: " + err));
  });
// FOR UPDATE
router.route("/update/:id").post((req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      user.status = req.body.status;
      user
        .save()
        .then(() => {
          res.json("User details updated!");
          console.log(req.body);
        })
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
