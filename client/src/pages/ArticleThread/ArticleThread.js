import React, { Component } from 'react';
import { Button, Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom";
import API from "../../utils/API.js";
import "./ArticleThread.css"
import CommentCard from "../../components/CommentCard/CommentCard.js"

class ArticleThread extends Component {
    state = {
        article: {},
        comment: "",
        comment_disable: true,
        saved_comment_message: "Save Comment",
        comment_array: []
    }

    componentDidMount() {
        const { articleId } = this.props.match.params

        this.getArticle(articleId);
    }

    getArticle(id) {
        API.getArticle(id)
            .then(response => this.setState({
                article: response.data,
                comment_array: response.data.commentary
            })).catch(error => console.log(error));

        console.log(this.state.article);
    }

    handleInputChange = event => {
        event.preventDefault();

        var comment_string = event.target.value;
        if (comment_string == "") {
            var btn_status = true;
        } else {
            var btn_status = false;
        }

        this.setState({
            [event.target.name]: comment_string,
            comment_disable: btn_status
        });
    }

    handleSubmit(id, comment) {
        var comments = this.state.comment_array;
        comments.push(comment);

        this.setState({
            saved_comment_message: "Comment Saved",
            comment: "",
            comment_disable: true,
            comment_array: comments
        });

        this.handleUpdate(id, this.state.comment_array);
    }

    handleUpdate = (id, comments) => {
        console.log(comments)
        API.updateArticle(id, comments)
            .then(response => console.log(response.data))
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div className="container thread-container mt-5 px-0">
                <Row className="mb-4 ml-0 mr-0">
                    <Col size="12" md="5" lg="4" xl="3" className="mr-auto p-0 img-col">
                        <a href={this.state.article.url}>
                            <img className="article-img" src={this.state.article.image} alt="" />
                        </a>
                    </Col>

                    <Col size="12" md="7" lg="8" xl="9" className="content-col">
                        <header className="my-1" id="article-title">{this.state.article.title}</header>
                        <p className="mb-1" id="article-desc">{this.state.article.description}</p>
                        <p id="article-author">{this.state.article.author}</p>
                        <Button className="back-btn btn-primary">
                            <Link className="back-link" to="/saved">Back to Saved Articles</Link>
                        </Button>
                    </Col>
                </Row>

                <Row className="comment-box mb-4">
                    <Col />
                    <Col className="comment-col" xs="10">
                        <textarea className="form-control my-3" name="comment" rows="3" onChange={event => this.handleInputChange(event)} value={this.state.comment}></textarea>
                        <Button className="btn btn-warning mb-3" onClick={() => this.handleSubmit(this.state.article._id, this.state.comment)} disabled={this.state.comment_disable}>
                            {this.state.saved_comment_message}
                        </Button>
                    </Col>
                    <Col />
                </Row>

                {this.state.comment_array.map((comment, i) => (
                    <CommentCard
                        comment={comment}
                        key={i} />
                ))}
            </div>
        );
    };
};

export default ArticleThread;