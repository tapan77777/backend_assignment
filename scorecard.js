const request = require("request");
const cheerio = require("cheerio");

function processcard(url){
    request(url, cb);
}
const url = "https://timesofindia.indiatimes.com/life-style/health-fitness/health-a-z/acne/diseasearticle/53597751.cms";

function cb(err, response , html){
    if(err){
        console.log(err);
    }else{
        extractDetails(html); 
    }
}
// extract info of disease
function extractDetails(html){
    let $ =cheerio.load(html);
   let infoDisease= $("#alldata > div > ctext");
   let stringArr = infoDisease.text().split(".");
   let stringInfo =stringArr[0].trim();
   console.log("info-", stringInfo);

  

}
module.exports ={
    ps:processcard
}