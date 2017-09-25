var ocrYoutu = require('./index').youtu;

var sfz1 = '';
var params = {
  // image: sfz1,
  url: 'http://reso3.yiihuu.com/img_858875.jpg',
  card_type: 0 // 身份证图片类型，0-正面，1-反面
};

var sfz2 = '';
var params2 = {
  // image: sfz2,
  url: 'http://reso3.yiihuu.com/img_858886.jpg',
  card_type: 1 // 身份证图片类型，0-正面，1-反面
};

var youtuTest = function () {
  //头像面
  ocrYoutu.idCardOCR(params, function (err, result) {
    console.log('youtu(头像面):');
    console.log(result)
  });

  //国徽面
  ocrYoutu.idCardOCR(params2, function (err, result) {
    console.log('youtu(国徽面):');
    console.log(result)
  });
};

youtuTest();