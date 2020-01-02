import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap'
import "./CommentCard.css";

class CommentCard extends Component {
    render() {
        return (
            <div className="comment-card">
                <Row className="comment-row">
                    <Col />
                    <Col xs="10" className="comment-container">
                        <p>{this.props.comment}</p>
                    </Col>
                    <Col />
                </Row>
                <Row className="mb-4">
                    <Col />
                    <Col xs="10" className="delete-comment">
                        <p>Delete Comment</p>
                    </Col>
                    <Col />
                </Row>
            </div>
        )
    }
}

export default CommentCard;