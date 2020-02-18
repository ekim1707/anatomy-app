var express = require('express');
var router = express.Router();
const { 
  BASICS,
  MEDIA,
  STUDY_TOOLS,
  NOTETAKING_CENTER
} = require('../views/nav/content');
const {
  BASIC_REVIEW,
  TOPIC_LABELS
} = require('../views/basics/content');
const mediaContent = require('../views/media/content');
const articleLis = mediaContent.articleContent.map(article => [{name: article.name, resource: article.resource, date: article.date}]);
const articleURLs = mediaContent.articleContent.map(article => article.url);
const savedArticles = mediaContent.articleContent.filter(article => article.saved);
const videoLis = mediaContent.videoContent.map(video =>[{name: video.name, resource: video.resource, date: video.date}]);
const videoURLs = mediaContent.videoContent.map(video => video.url);
const savedVideos = mediaContent.videoContent.filter(video => video.saved);
const imageLis = mediaContent.imageContent.map(image => [{name: image.name, resource: image.resource, date: image.date}]);
const imageURLs = mediaContent.imageContent.map(image => image.url);
const savedImages = mediaContent.imageContent.filter(image => image.saved);

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { 
    BASICS: BASICS,
    MEDIA: MEDIA,
    STUDY_TOOLS: STUDY_TOOLS,
    NOTETAKING_CENTER: NOTETAKING_CENTER,
    BASIC_REVIEW: BASIC_REVIEW,
    TOPIC_LABELS: TOPIC_LABELS,
    articleLis: articleLis,
    articleURLs: articleURLs,
    savedArticles: savedArticles,
    videoLis: videoLis,
    videoURLs: videoURLs,
    savedVideos: savedVideos,
    imageLis: imageLis,
    imageURLs: imageURLs,
    savedImages: savedImages
  });
});

module.exports = router;
