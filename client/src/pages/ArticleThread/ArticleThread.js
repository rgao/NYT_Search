import React, { Component } from 'react';
import { Button, Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom";
import API from "../../utils/API.js";
import "./ArticleThread.css"

class ArticleThread extends Component {
    state = {
        article: {}
    }

    componentDidMount() {
        const { articleId } = this.props.match.params

        this.getArticle(articleId);
    }

    getArticle(id) {
        API.getArticle(id)
            .then(response => this.setState({ article: response.data }))
            .catch(error => console.log(error));

        console.log(this.state.article);
    }

    render() {
        return (
            <div className="container thread-container mt-5 px-0">
                <Row className="ml-0 mr-0">
                    <Col size="12" md="6" lg="5" xl="4" className="mr-auto p-0 img-col">
                        <a href={this.state.article.url}>
                            <img className="article-img" src={this.state.article.image} alt="" />
                        </a>
                    </Col>

                    <Col size="12" md="6" lg="7" xl="8" className="content-col">
                        <header className="my-1" id="article-title">{this.state.article.title}</header>
                        <p className="mb-1" id="article-desc">{this.state.article.description}</p>
                        <p id="article-author">{this.props.author}</p>
                        <Link to="/saved">Back to Saved Articles</Link>
                        <Button className="btn btn-warning" onclick={console.log(this.state)}>
                            test
                        </Button>
                    </Col>
                </Row>
                <Row className="comment-section mb-3 ml-0 mr-0">
                    <p>{this.state.article.commentary}</p>
                </Row>
            </div>
        );
    };
};

export default ArticleThread;