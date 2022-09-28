const AppError = require("../utils/appError");
const conn = require("../services/db");


exports.getAllItems = (req, res, next) => {
    conn.query("SELECT * FROM items", function (err, data, fields) {
      if(err) return next(new AppError(err))
      res.status(200).json({
        status: "success",
        length: data?.length,
        data: data,
      });
    });
   };


exports.createItems = (req, res, next) => {
    if (!req.body) return next(new AppError("No form data found", 404));
    const values = [req.body.nameItem, req.body.Description];
    console.log(values);
    conn.query(
      "INSERT INTO items (Name, Description) VALUES(?)",
      [values],
      function (err, data, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(201).json({
          status: "success",
          message: "Items created!", 
      });
      console.log("Items Created");
    }
  );
};


exports.deleteItems = (req, res, next) => {
    if (!req.params.id) {
      return next(new AppError("No todo id found", 404));
    }
    conn.query(
      "DELETE FROM items WHERE id=?",
      [req.params.id],
      function (err, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(201).json({
          status: "success",
          message: "Items deleted!",
        });
        console.log("Items Delete");
      }
    );
   }