const express = require("express");
const router = express.Router();
const sql = require("../js/sql_func.js");
const session_route = require('./session.js');

router.use('/session', session_route);

router.get('/', (req, res) => res.json({"ret":"ajax page"}));
router.post('/check_id', (req, res) => sql.check_id(req, res));
router.post('/check_nickname', (req, res) => sql.check_nickname(req, res));
router.post('/check_email', (req, res) => sql.check_email(req, res));
router.post('/chatroom', (req, res) => sql.get_room_id(req, res));
router.post('/makeroom', (req, res) => {
    req.session.chat = {room_id: req.body.chatroom, away_nickname: req.body.away_nickname};
    sql.update_room_id(req.session.chat.room_id);
    res.json({});
});
router.post('/chat', (req, res) => sql.make_room(req, res));

module.exports = router;