var express = require('express');
var router = express.Router();
// 사이트의 첫 화면 구성하는 index.js
/* 지역검색 */
router.get('/', function(req, res, next) {
  // 서버가 오픈하는 경로가 /일때 index.ejs를 불러들여 렌더링 한다.
  res.render('index', { title: '지역검색', pageName:'locals/search.ejs'});
});

module.exports = router;
