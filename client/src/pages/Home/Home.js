import React, { Component } from 'react';
import API from "../../utils/API.js";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap'
import SearchedArticleCard from "../../components/SearchedArticleCard/SearchedArticleCard.js"
import './Home.css'
import search from '../../utils/images/search_icon.png'

class Home extends Component {
    state = {
        articles: [],
        startDate: "",
        endDate: "",
        topic: "",
        result: "",
        topic_error: "",
        date_error: ""
    };

    handleInputChange = event => {
        event.preventDefault();

        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        let topic = this.state.topic;
        let startDate = this.state.startDate;
        let endDate = this.state.endDate;

        if (topic === "") {
            this.setState({ topic_error: "Please specify a topic" });
            console.log(this.state)

        } else {
            this.setState({ topic_error: "" });
            var today = new Date();

            if (endDate === "") {
                endDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            };

            if (startDate === "") {
                startDate = today.getFullYear() + '-' + (today.getMonth()) + '-' + today.getDate();
            };

            if (this.state.startDate === "" && this.state.endDate === "") {
                this.setState({ date_error: "Dates not fully entered. Showing results from the past month." })
            } else {
                this.setState({ date_error: "" })
            }

            startDate = startDate.replace(/-/g, "");
            endDate = endDate.replace(/-/g, "");

            API.searchArticles(topic, startDate, endDate)
                .then(response => (this.setState({ articles: response.data, topic: "", startDate: "", endDate: "", result: "Articles" }),
                    console.log(response.data)))
                .catch(error => console.log(error));
        }
    }

    handleSave = article => {
        API.saveArticle(article)
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div className="main row">
                <div className="form-container mt-5 col-12 col-xl-4">
                    <form className="m-2 p-2 mx-auto">
                        <header className="text-center mb-3">
                            <img id="search_icon" src={search} alt="search" />
                        </header>
                        <div className="form-group">
                            <label>Topic</label>
                            <input name="topic" value={this.state.topic} className="form-control" onChange={event => this.handleInputChange(event)} type="text" placeholder="e.g. 2020" />
                            <div id="invalid-topic">
                                {this.state.topic_error}
                            </div>
                        </div>

                        <div className="form-group date-input mr-3">
                            <label>Start at:</label>
                            <input name="startDate" value={this.state.startDate} className="form-control" onChange={event => this.handleInputChange(event)} type="date" />
                        </div>

                        <div className="form-group date-input">
                            <label>End at:</label>
                            <input name="endDate" value={this.state.endDate} className="form-control" onChange={event => this.handleInputChange(event)} type="date" />
                        </div>

                        <div className="px-2" id="invalid-date">
                            {this.state.date_error}
                        </div>

                        <div className="btn-container text-center mt-2">
                            <Button className="btn mb-2" id="query-btn" onClick={event => this.handleSubmit(event)}>Query</Button>
                            <Link id="saved-link" to={"/saved"}><Button className="btn" id="saved-btn">>> To Saved Articles</Button></Link>
                        </div>
                    </form>
                </div>

                <div className="article-container mx-auto col-11 col-xl-8 mt-3">
                    <header className="result-title text-center my-3">{this.state.result}</header>

                    {this.state.articles.map((article, i) => (
                        <SearchedArticleCard
                            title={article.title}
                            url={article.url}
                            description={article.description}
                            author={article.author}
                            image={article.image}
                            save={() => this.handleSave(article)}
                            key={i} />
                    ))}
                </div>
            </div>
        );
    }
}

export default Home;