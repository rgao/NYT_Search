import React, { Component } from 'react';
import API from "../../utils/API.js";
// import { Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom";
import SavedArticleCard from "../../components/SavedArticleCard/SavedArticleCard.js"
import './Saved.css'

class Saved extends Component {
    state = {
        savedArticles: [],
        message: "",
        query_message: ""
    };

    componentDidMount() {
        this.getSavedArticles()
    };

    getSavedArticles = () => {
        API.getArticles()
            .then(response => this.setState({ savedArticles: response.data }, () => this.checkArticles()))
            .catch(error => console.log(error));
    };

    handleDelete = (id) => {
        console.log(id)
        API.deleteArticle(id)
            .then(() => this.getSavedArticles())
            .catch(error => console.log(error));
    };

    checkArticles() {
        console.log(this.state.savedArticles)

        if (this.state.savedArticles.length === 0) {
            this.setState({
                message: "There are no saved articles.",
                query_message: ">> Query for articles."
            });

        } else {
            this.setState({ message: "" });
        }
    };

    render() {
        return (
            <div className="container">
                <div className="text-center" id="no-message">
                    <p className="pt-3">{this.state.message}</p>
                    <Link to="/">{this.state.query_message}</Link>
                </div>

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
    };
};

export default Saved;