import React, { Component } from 'react';
import API from "../utils/API.js";
import { Button, Row, Col } from 'react-bootstrap'
import SearchedArticleCard from "../components/SearchedArticleCard/SearchedArticleCard.js"

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
                .then(response => this.setState({ articles: response.data, topic: "", startDate: "", endDate: "" }), response => console.log(response.data))
                // .then(response => console.log(response.data))
                .catch(error => console.log(error));
        }
    }

    handleSave = i => {
        API.saveArticle(this.state.article[i])
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                <form>
                    <header>Search Articles</header>
                    <div className="form-group">
                        <label>Topic</label>
                        <input name="topic" value={this.state.topic} className="form-control" onChange={event => this.handleInputChange(event)} type="text" placeholder="Collusion" />
                    </div>

                    <div className="form-group">
                        <label>Start at:</label>
                        <input name="startDate" value={this.state.startDate} className="form-control" onChange={event => this.handleInputChange(event)} type="date" placeholder="11/04/2016" />
                    </div>

                    <div className="form-group">
                        <label>End at:</label>
                        <input name="endDate" value={this.state.endDate} className="form-control" onChange={event => this.handleInputChange(event)} type="date" placeholder="02/08/2019" />
                    </div>

                    <Button className="btn btn-info" onClick={event => this.handleSubmit(event)}>Search!</Button>
                </form>

                <div>
                    {this.state.articles.map((article, i) => (
                        <SearchedArticleCard
                            title={article.title}
                            url={article.url}
                            description={article.description}
                            author={article.writer}
                            date={article.date}
                            save={() => this.handleSave(i)}
                            key={i} />
                    ))}
                </div>
            </div>
        );
    }
}

export default Home;