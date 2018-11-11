var express = require('express');
var router = express.Router();
const cheerio = require('cheerio');
var request = require('request');
const Iconv = require('iconv').Iconv;
const iconv = new Iconv('utf-8', 'utf-8//translit//ignore');
var client = require('cheerio-httpcli');
var urlType = require('url');

router.get("/crawlingTest", function(req, res, next){
  //URL 지정
  let url = "https://www.dongduk.ac.kr/front/boardlist.do?bbsConfigFK=101&searchLowItem=ALL&searchField=ALL&searchValue=&currentPage=2";
  request({
    uri: url,
    method: 'GET',
    headers: {
         'Accept-Charset': 'utf-8'}
}, function(err, res, body){
    let htmlDoc = iconv.convert(body).toString();
    const $ = cheerio.load(htmlDoc)
    let fruits =[];

    $('.subject').each(function(i, elem) {
      fruits[i] = $(this).text().trim();
    });
    console.log(fruits);
     
});
})
module.exports = router;

// let url = "https://www.dongduk.ac.kr/front/boardlist.do?bbsConfigFK=101&searchLowItem=ALL&searchField=ALL&searchValue=&currentPage=1";
