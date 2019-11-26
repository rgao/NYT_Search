import React, { Component } from 'react';
import { Button, Row, Col } from 'react-bootstrap'
import "./SearchedArticleCard.css";

class SearchedArticleCard extends Component {
    state = {
        save_message: "Save Article",
        save_status: false
    };

    handleClick = event => {
        event.preventDefault();

        this.setState({
            save_message: "Saved",
            save_status: true
        });

        this.props.save();
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

                        <div className="text-center d-none d-md-block save-btn-container">
                            <Button className="btn btn-info save-btn-md" onClick={event => this.handleClick(event)} disabled={this.state.save_status}>
                                {this.state.save_message}
                            </Button>
                        </div>
                    </Col>

                    <Col className="text-center d-md-none">
                        <Button className="btn btn-info mb-1" onClick={event => this.handleClick(event)} disabled={this.state.save_status}>
                            {this.state.save_message}
                        </Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default SearchedArticleCard;