const AppError = require("../utils/appError");
const conn = require("../services/db");

exports.getAllSpell = (req, res, next) => {
    conn.query("SELECT * FROM Spell", function (err, data, fields) {
      if(err) return next(new AppError(err))
      res.status(200).json({
        status: "success",
        length: data?.length,
        data: data,
      });
    });
   };


exports.createSpell = (req, res, next) => {
    if (!req.body) return next(new AppError("No form data found", 404));
    const values = [req.body.name, req.body.desc];
    console.log(values);
    conn.query(
      "INSERT INTO Spell (Spell_Name, Description) VALUES(?)",
      [values],
      function (err, data, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(201).json({
          status: "success",
          message: "Spell created!",
      });
    }
  );
};