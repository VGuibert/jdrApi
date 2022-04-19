const AppError = require("../utils/appError");
const conn = require("../services/db");

exports.getAllUser = (req, res, next) => {
    conn.query("SELECT * FROM user", function (err, data, fields) {
      if(err) return next(new AppError(err))
      res.status(200).json({
        status: "success",
        length: data?.length,
        data: data,
      });
    });
   };


exports.createUser = (req, res, next) => {
    if (!req.body) return next(new AppError("No form data found", 404));
    const values = [req.body.UserName, req.body.Password, req.body.pseudo, req.body.grade, req.body.token];
    console.log(values);
    conn.query(
      "INSERT INTO user (UserName, PassWord, Pseudo, Grade, Token) VALUES(?)",
      [values],
      function (err, data, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(201).json({
          status: "success",
          message: "User created!", 
      });
      console.log("User Created");
    }
  );
};


exports.deleteUser = (req, res, next) => {
    if (!req.params.id) {
      return next(new AppError("No todo id found", 404));
    }
    conn.query(
      "DELETE FROM user WHERE id=?",
      [req.params.id],
      function (err, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(201).json({
          status: "success",
          message: "user deleted!",
        });
        console.log("user Delete");
      }
    );
   }