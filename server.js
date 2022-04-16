const request = require("request");
const cheerio = require("cheerio");
const allDisease = require("./all");

const url = "https://timesofindia.indiatimes.com/life-style/health-fitness/health-a-z"

request(url , cb);
function cb(err , response , html){
    if(err){
        console.log(err);
    }else{
        extractLink(html);
    }
}
// extract disease name
function extractLink(html){
    let $ = cheerio.load(html);
   let anchorElm= $("#l3nav > div > ul > li:nth-child(9) > a");
   let link = anchorElm.attr("href");
   let diseaseName= $("#allcontent > ul > li a> span");
   for(i=0;i<diseaseName.length;i++){
       let data=$(diseaseName[i]).text().trim();
       console.log(data);
   }

   
//    console.log(link);
  allDisease.getAlldisease(link); 
}
