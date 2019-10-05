import React, { Component } from 'react';
import API from "../utils/API.js";
import { Button, Row, Col } from 'react-bootstrap'
import SavedArticleCard from "../components/SavedArticleCard/SavedArticleCard.js"

class Saved extends Component {
    state = {
        savedArticles: []
    };

    componentDidMount() {
        this.getSavedArticles();
    }

    getSavedArticles = () => {
        API.getArticles()
            .then(response => this.setState({ savedArticles: response.data }))
            .catch(error => console.log(error));
    }

    handleDelete = (id) => {
        console.log(id)
        API.deleteArticle(id)
            .then(this.getSavedArticles())
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div>
                {this.state.savedArticles.map((article, i) => (
                    <SavedArticleCard
                    title={article.title}
                    url={article.url}
                    description={article.description}
                    author={article.author}
                    image={article.image}
                    delete={() => this.handleDelete(article._id)}
                    key={i} />
                ))}
            </div>
        );
    }
}

export default Saved;