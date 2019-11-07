var express = require('express');
var router = express.Router();
const data = require('../data');
const articleLis = data.articleData.map(article => [{name: article.name, resource: article.resource, date: article.date}]);
const articleURLs = data.articleData.map(article => article.url);
const savedArticles = data.articleData.filter(article => article.saved);
const videoLis = data.videoData.map(video =>[{name: video.name, resource: video.resource, date: video.date}]);
const videoURLs = data.videoData.map(video => video.url);
const savedVideos = data.videoData.filter(video => video.saved);
const imageLis = data.imageData.map(image => [{name: image.name, resource: image.resource, date: image.date}]);
const imageURLs = data.imageData.map(image => image.url);
const savedImages = data.imageData.filter(image => image.saved);

const testLis = [{name: 'test', resource: 'test', date: 'test'}];
const testURLs = 'none';
const savedTests = '';

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(articleLis);
  res.render('index', { 
    testLis: testLis,
    testURLs: testURLs,
    savedTests: savedTests,
    // videoLis: testLis,
    // videoURLs: testURLs,
    // savedVideos: savedTests,
    // imageLis: testLis,
    // imageURLs: testURLs,
    // savedImages: savedTests
  });
});

module.exports = router;
