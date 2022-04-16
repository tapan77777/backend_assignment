const url ="https://timesofindia.indiatimes.com/life-style/health-fitness/health-a-z/acne/params/diseasearticle/cat-treatment/msid-53597751";

const request = require("request");
const cheerio = require("cheerio");

function processTreat(){
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
    let vacin = $("#treatmentdata > div > div > p:nth-child(4)");
    console.log("vacin-",vacin.text());
}
module.exports={
    ps:processTreat
}