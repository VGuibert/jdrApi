const AppError = require("../utils/appError");
const conn = require("../services/db");


exports.getAllPerso = (req, res, next) => {
    conn.query("SELECT * FROM perso", function (err, data, fields) {
      if(err) return next(new AppError(err))
      res.status(200).json({
        status: "success",
        length: data?.length,
        data: data,
      });
    });
   };


exports.getUniquePerso = (req, res, next) => {
  if (!req.query.Name) {
    console.log(req)
    return next(new AppError("No todo id found", 404));
  }
  conn.query("SELECT * FROM perso WHERE Name=?", [req.query.Name] ,function (err, data, fields) {
    if(err) return next(new AppError(err))
    res.status(200).json({
      status: "success",
      length: data?.length,
      data: data,
    });
  });
};



exports.createPerso = (req, res, next) => {
    if (!req.body) return next(new AppError("No form data found", 404));
    const values = [req.body.nameCara, req.body.classe, req.body.race, req.body.levelCara, req.body.lore];
    console.log(values);
    conn.query(
      "INSERT INTO perso (Name, Classe, Race, Level, Lore) VALUES(?)",
      [values],
      function (err, data, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(201).json({
          status: "success",
          message: "Perso created!", 
      });
      console.log("Perso Created");
    }
  );
};


exports.deletePerso = (req, res, next) => {
    if (!req.query.Name) {
      return next(new AppError("No todo id found", 404));
    }
    conn.query(
      "DELETE FROM perso WHERE Name=?",
      [req.query.Name],
      function (err, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(201).json({
          status: "success",
          message: "perso deleted!",
        });
        console.log("Perso Delete");
      }
    );
   }