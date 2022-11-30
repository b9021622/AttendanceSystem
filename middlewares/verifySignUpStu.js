const db = require("../models");
const Student = db.students;

checkDuplicateUsername = (req, res, next) => {
  // Username
  Student.findOne({
    StudentID: req.body.username
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (user) {
      res.status(400).send({ message: "Failed! Username is already in use!" });
      return;
    }

    next();

  });
};

const verifySignUpStu = {
  
  checkDuplicateUsername
};

module.exports = verifySignUpStu;