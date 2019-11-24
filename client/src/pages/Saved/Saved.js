import React, { Component } from 'react';
import API from "../../utils/API.js";
import { Row, Col } from 'react-bootstrap'
import SavedArticleCard from "../../components/SavedArticleCard/SavedArticleCard.js"

class Saved extends Component {
    state = {
        savedArticles: [],
        message: ""
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
            this.setState({message: "There are no saved articles."});
        } else {
            this.setState({message: ""});
        }
    };

    render() {
        return (
            <div>
                <div>
                    <Row>
                        <Col size="8">{this.state.message}
                        </Col>
                    </Row>
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