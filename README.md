# About

This project is a MERN (Mongo-Express-React-Node) app that scrapes articles from New York Times. It is [deployed to Heroku here](https://nytscraperreact.herokuapp.com/).

## Features

* Scrapes up to 10 articles at once.
* Information includes title, description, author, image when applicable, and link to the source.
* Form input for topic and dates. If no custom date selection, scrapes articles from the past month.
* Saving feature for articles; saved articles are accessible until deleted.
* Visitors can comment (and delete their comments) on each saved article.

This project serves as a gateway application for enterprise-level products such as Reddit and Twitter. It does not include user authentication and thus no user data storage, but provides an example of how technologies such as React and MongoDB can be used to create full-stack applications.

### Front-end Technologies

* HTML/CSS
* ReactJS, react-bootstrap
* create-react-app

### Back-end and API Technologies

* Express for websocket
* Node.js
* MongoDB/mongoose for json data storage
* axios for API interfacing
* cheerio for data scraping

## Preview

![Preview](client/src/utils/images/nyt_preview.png)
