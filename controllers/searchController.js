const axios = require("axios");
const cheerio = require("cheerio");

module.exports = (request, response) => {

        const { endDate, topic, startDate } = request.query;

        const queryURL = `https://www.nytimes.com/search?endDate="${endDate}&query=${topic}&sort=newest&startDate=${startDate}`;
        
        axios.get(queryURL).then(res => {
            var $ = cheerio.load(res.data);
            var articleArray = [];
            
            $(".css-138we14").each((i, element) => {
                var article = {};

                article.title = $(element).children("a").children("h4").text();
                article.url = "https://www.nytimes.com" + $(element).children("a").attr("href");
                article.image = $(element).find("img").attr("src");
                article.description = $(element).find(".css-1dwgixl").text();
                article.author = $(element).find(".css-15w69y9").text();

                if (articleArray.length < 5) {
                    articleArray.push(article);
                }
            });
            response.json(articleArray);

        }).catch(error => console.log(error));
    }
