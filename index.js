// import express from 'express';
// import mysql from 'mysql';
// import dbconfig from './config/database.js';
// import check_word from './check.js';

const express     = require('express');
const mysql       = require('mysql');
const dbconfig    = require('./config/database.js');
const connection  = mysql.createConnection(dbconfig);
const check       = require('./js/check.js');
const path        = require('path');

const app = express();

// configuration =========================
app.set('port', process.env.PORT || 3000); // site is open the n port

app.use(express.json()); // for use POST
app.use(express.urlencoded({extended: true})); // POST data process

app.use(express.static(path.join(__dirname, 'html'))); //using the folder
app.use('/register', express.static(path.join(__dirname, 'register')));
app.use('/login', express.static(path.join(__dirname, 'login')));
app.use(express.static(path.join(__dirname, 'pict')));
app.use('/js', express.static(path.join(__dirname, 'js')));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/html/index.html");
});

app.get('/register', (req, res) => {
  res.sendFile(__dirname + "/register/index.html");
});

app.post('/register_chk', (req, res) => {
  if(!check.check_id(res.body.id)) {
    make_alert("ID 입력형식이 잘못되었습니다.");
  }
  else if(check.pw != check.pw_chk) {
    make_alert('비밀번호가 다릅니다.');
  }
  else if(check.check_word(res.body.pw)) {
    make_alert('PW 입력형식이 잘못되었습니다.');
  }
  else if(check.check_special(res.body.pw)) {
    make_alert('공백, -;"'+"'\/\\:+=은 사용할 수 없습니다.");
  }
  else if(res.body.phone_front == "010" && check.check_phone_010(res.body.phone_last) && res.body.phone_front != "010" && check.check_phone(res.body.phone_last)) {
    make_alert('전화번호 양식이 맞지 않습니다.');
  }
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + "/login/index.html");
});

app.post('/login_chk', (req, res) => {

  connection.query('SELECT * from login_info', (error, rows) => {
    if (error) throw error;
    // console.log('User info is: ', rows);
    res.send(rows);
  });
});

app.listen(app.get('port'), () => {
  console.log('Express server listening on port ' + app.get('port'));
  console.log(__dirname + " is dirname");
});


function go_back(res) {
  res.send('<script>history.back()</script>');
}

function make_alert(res, str) {
  res.send("<script>alert("+ str + ")</script>");
  go_back(res);
}