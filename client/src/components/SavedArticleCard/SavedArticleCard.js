import React, { Component } from 'react';
import { Button, Row, Col } from 'react-bootstrap'
import "./SavedArticleCard.css";

class SavedArticleCard extends Component {
    render() {
        return (
            <Row>
                <Col size="3"><img src={this.props.image} /></Col>

                <Col>
                    <header href={this.props.url}>{this.props.title}</header>
                    <p>{this.props.description}</p>
                    <p>{this.props.author}</p>
                </Col>

                <Col size="3">
                    <Button className="btn btn-danger" onClick={this.props.delete}>
                        Remove Article
                    </Button>
                </Col>
            </Row>
        )
    }
}

export default SavedArticleCard;
