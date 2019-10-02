import React, { Component } from 'react';
import { Button, Row, Col } from 'react-bootstrap'
import "./SearchedArticleCard.css";

class SearchedArticleCard extends Component {
    render() {
        return (
            <Row>
                <Col size="3">{this.props.date}</Col>

                <Col>
                    <header href={this.props.url}>{this.props.title}</header>
                    <p>{this.props.description}</p>
                    <p>{this.props.author}</p>
                </Col>

                <Col size="3">
                    <Button className="btn btn-success" onClick={this.props.save}>
                        Save Article
                    </Button>
                </Col>
            </Row>
        )
    }
}

export default SearchedArticleCard;