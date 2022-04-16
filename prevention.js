const url ="https://timesofindia.indiatimes.com/life-style/health-fitness/health-a-z/acne/params/diseasearticle/cat-preventions-myths/msid-53597751";

const request = require("request");
const cheerio = require("cheerio");
function processPrev(){
    request(url , cb);
}

function cb(err,response,html){
    if(err){
        console.log(err);
    }else{
        extractDetails(html);
    }
}
function extractDetails(html){
    $ = cheerio.load(html);
    let prevention = $("#preventions-mythsdata > div:nth-child(1) > div > p:nth-child(3)");
    console.log("prevention-",prevention.text());
}
module.exports={
    ps:processPrev
}