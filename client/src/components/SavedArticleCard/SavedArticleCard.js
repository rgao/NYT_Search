import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button, Row, Col } from 'react-bootstrap'
import "./SavedArticleCard.css";

class SavedArticleCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment_array: this.props.comments,
            comment: "",
            commented: false,
            saved_comment_message: "Save Comment"
        }
    }

    componentDidMount() {
        this.setState({ comment: this.props.commentary })
    }

    handleInputChange = event => {
        event.preventDefault();

        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleCommentUpdate(id, comment) {
        var comments = this.state.comment_array;
        comments.push(comment);

        this.setState({
            saved_comment_message: "Comment Saved",
            comment: "",
            commented: true,
            comment_array: comments
        })

        this.props.update(id, this.state.comment_array)
    }   

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

                        <textarea className="form-control mb-3" name="comment" rows="3" onChange={event => this.handleInputChange(event)} id="commentary">{this.props.commentary}</textarea>
                        <Button className="btn btn-warning" onClick={()=>this.handleCommentUpdate(this.props.article_id, this.state.comment)} disabled={this.state.commented}>
                            {this.state.saved_comment_message}
                        </Button>

                        <div className="text-center d-md-block save-btn-container">
                            <Button className="btn btn-danger" onClick={this.props.delete}>
                                Delete Article
                            </Button>
                        </div>
                        <div>
                            <Link to={`/saved/${this.props.article_id}`} className="thread_link">
                                Comment Thread
                            </Link>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default SavedArticleCard;
