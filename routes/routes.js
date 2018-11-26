"use strict";
const express = require("express");
const routes = express.Router();
const pool = require("../connection/connection.js");

routes.get("/phrases", (req, res) => {
 pool.query("select * from shoppingcart order by id").then((result) => {
   res.json(result.rows);
 });
});

routes.put("/phrases/:id", (req, res) => {
 pool.query("update shoppingcart set product=$2::text, price=$3::int, quanity=$4::int where id=$1::int", [req.params.id, req.body.product, req.body.price, req.body.quanity]).then(() => {
   pool.query("select * from shoppingcart order by id").then((result) => {
     res.json(result.rows);
   });
 });
});

routes.delete("/phrases/:id", (req, res) => {
 pool.query("delete from shoppingcart where id=$1::int", [req.params.id]).then(() => {
   pool.query("select * from shoppingcart order by id").then((result) => {
     res.json(result.rows);
   });
 });
});

routes.post("/phrases", (req, res) => {
 pool.query("insert into shoppingcart(product, price, quanity) values($1::text, $2::int, $3::int)", [req.body.product, req.body.price, req.body.quanity]).then(() => {
   pool.query("select * from shoppingcart order by id").then((result) => {
     res.json(result.rows);
   });
 });
});



module.exports = routes;