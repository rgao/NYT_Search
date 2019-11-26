const axios = require("axios");
const cheerio = require("cheerio");

module.exports = (request, response) => {

        const query = request.query

        const queryURL = `https://www.nytimes.com/search?dropmab=false&endDate=`
            +`${query.endDate}&query=${query.topic}&sort=best&startDate=${query.startDate}`;
        
        axios.get(queryURL).then(res => {
            var $ = cheerio.load(res.data);
            var articleArray = [];
            
            $(".css-1l4w6pd").each((i, element) => {
                var article = {};

                article.title = $(element).find("a").children("h4").text();
                article.url = "https://www.nytimes.com" + $(element).find(".css-ellvw9").children("a").attr("href");
                article.time = $(element).children("time").text();
                article.image = $(element).find("img").attr("src");
                article.description = $(element).find(".css-16nhkrn").text();
                article.author = $(element).find(".css-15w69y9").text();

                if (articleArray.length < 10) {
                    articleArray.push(article);
                }
            });
            
            response.json(articleArray);

        }).catch(error => console.log(error));
    }
