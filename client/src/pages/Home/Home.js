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
        topic: ""
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

        if (startDate !== "" && endDate !== "") {
            startDate = startDate.replace(/-/g, "");
            endDate = endDate.replace(/-/g, "");

            API.searchArticles(topic, startDate, endDate)
                // eslint-disable-next-line
                .then(response => (this.setState({ articles: response.data, topic: "", startDate: "", endDate: "" }),
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
            <div className="main">
                <form className="m-4 p-2">
                    <header className="text-center mb-3">
                        <img id="search_icon" src={search} />
                    </header>
                    <div className="form-group">
                        <label>Topic</label>
                        <input name="topic" value={this.state.topic} className="form-control" onChange={event => this.handleInputChange(event)} type="text" />
                    </div>

                    <div className="form-group date-input mr-3">
                        <label>Start at:</label>
                        <input name="startDate" value={this.state.startDate} className="form-control" onChange={event => this.handleInputChange(event)} type="date" />
                    </div>

                    <div className="form-group date-input">
                        <label>End at:</label>
                        <input name="endDate" value={this.state.endDate} className="form-control" onChange={event => this.handleInputChange(event)} type="date" />
                    </div>

                    <div className="btn-container text-center mt-2">
                        <Button className="btn mb-2" id="query-btn" onClick={event => this.handleSubmit(event)}>Query</Button>
                        <Button className="btn" id="saved-btn"><Link id="saved-link" to={"/saved"}>>> To Saved Articles</Link></Button>
                    </div>
                </form>

                <div>
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