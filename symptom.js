const request = require("request");
const cheerio = require("cheerio");
function processSymp(){
    request(url, cb);
}
const url = "https://timesofindia.indiatimes.com/life-style/health-fitness/health-a-z/acne/params/diseasearticle/cat-cause-symptoms/msid-53597751";

function cb(err, response , html){
    if(err){
        console.log(err);
    }else{
        extractDetails(html); 
    }
}
function extractDetails(html){
   let $=cheerio.load(html);
   let cause = $("#cause-symptomsdata > div:nth-child(1) > div > p:nth-child(3)");
   let symptom= $("#cause-symptomsdata > div:nth-child(2) > div > p:nth-child(3)");
   console.log("Cause- ",cause.text().trim());
   console.log("Symptom",symptom.text().trim());
}
module.exports ={
    ps:processSymp
}