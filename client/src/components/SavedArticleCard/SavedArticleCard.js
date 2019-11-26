import React, { Component } from 'react';
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
                        <p id="article-author">{this.props.author}</p>

                        <div className="text-center d-none d-md-block save-btn-container">
                            <Button className="btn btn-danger" onClick={this.props.delete}>
                                Delete Article
                            </Button>
                        </div>
                    </Col>

                    <Col className="text-center d-md-none">
                        <Button className="btn danger" onClick={this.props.delete}>
                            Delete Article
                        </Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default SavedArticleCard;
