const axios = require("axios");
const cheerio = require("cheerio");

module.exports = {
    scrape: (request, response) => {
        console.log(request.body);
        console.log(request.query);

        const { topic, startDate, endDate } = request.body;

        const queryURL = "https://www.nytimes.com/search?endDate=" + endDate + "&query=" + topic + "&sort=newest&startDate=" + startDate;
        
        axios.get(queryURL).then(res => {
            var $ = cheerio.load(res.data);
            var articleArray = [];
            
            $(".css-138we14").each((i, element) => {
                console.log(i);
                var article = {};

                article.title = $(element).children("a").children("h4").text();
                console.log(article.title)
                article.date = $(element).children("time").text();
                article.url = "https://www.nytimes.com" + $(element).children("a").attr("href");
                article.description = $(element).find(".css-1dwgixl").text();
                article.writer = $(element).find(".css-15w69y9").text();

                if (articleArray.length < 5) {
                    articleArray.push(article);
                }
            });

            response.json(articleArray);

        }).catch(error => console.log(error));
    }
}