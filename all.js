const request = require("request");
const cheerio = require("cheerio");
const scoreObj = require("./scorecard")
const sympObj = require("./symptom");
const preveObj = require("./prevention");
const treatObj = require("./treatement");

function getallDisease(url) {
    request(url , function (err , response , html) {
        if(err){
            console.log(err);
        }else{
            extractAllLinks(html);
        }
    })
}
function extractAllLinks(html) {
    let $ = cheerio.load(html);
    let diseaseElms = $("#allcontent > ul > li >a");
    for( i=0; i<diseaseElms.length;i++){
       let link = $(diseaseElms[i]).attr("href");
       let fullLink = "https://timesofindia.indiatimes.com"+link ;
    //    console.log(fullLink);
    scoreObj.ps(fullLink);
    sympObj.ps(fullLink);
    preveObj.ps(fullLink);
    treatObj.ps(fullLink);
    }
}
module.exports ={
    getAlldisease: getallDisease
}