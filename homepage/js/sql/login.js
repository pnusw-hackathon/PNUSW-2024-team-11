const mysql       = require('mysql');
const dbconfig    = require('../../config/database.js');
const connection  = mysql.createConnection(dbconfig);
const crypto = require("../crypto.js"); 

let login = async (req, res) => {
    let body = req.body;
    let id = await crypto.create_crypto(body.studentID);
    let pw = await crypto.create_crypto(body.password);
    connection.query(`SELECT PW, NICKNAME, CLASS, STU_NUM, iv FROM USER WHERE USER_ID = '${id}';`, async (error, row) => {
        if (error) {
            console.log(error);
            res.redirect("/error");
        }
        else if (row[0] === undefined || pw != row[0]["PW"]) {
            // console.log("login fail");
            req.session.login_status = false;
            res.redirect("back");
        }
        else {
            // console.log("login success");
            req.session.login_status = true;
            req.session.USER = [id, row[0]["NICKNAME"], row[0]['CLASS'], row[0]['STU_NUM']];
            req.session.iv = row[0]["iv"];
            res.redirect("/");
        }
    });
}

module.exports = {login};
