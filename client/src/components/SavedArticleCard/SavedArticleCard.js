import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button, Row, Col } from 'react-bootstrap'
import "./SavedArticleCard.css";

class SavedArticleCard extends Component {
    render() {
        return (
            <div className="container">
                <Row className="article mb-3 ml-0 mr-0">
                    <Col size="12" md="6" lg="5" xl="4" className="mr-auto p-0 img-col">
                        <a href={this.props.url}>
                            <img className="article-img" src={this.props.image} alt="" />
                        </a>
                    </Col>

                    <Col size="12" md="6" lg="7" xl="8" className="content-col">
                        <header className="my-1" id="article-title">{this.props.title}</header>
                        <p className="mb-1" id="article-desc">{this.props.description}</p>
                        <p className="article-author mb-5">{this.props.author}</p>

                        <div className="d-md-block text-center delete-btn-container">
                            <Button className="btn btn-danger" onClick={this.props.delete}>
                                Delete Article
                            </Button>
                        </div>
                        <div className="d-md-block text-center thread-btn-container">
                            <Link to={`/saved/${this.props.article_id}`} className="thread_link">
                                <Button className="btn btn-warning">
                                    Comment Thread
                                </Button>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default SavedArticleCard;
