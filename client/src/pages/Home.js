import React from 'react';
import API from "../../utils/API.js";
import { Button, Row, Col } from 'react-bootstrap'

class Home extends Component {
    state = {
        articles: [],
        startDate: "",
        endDate: "",
        topic: ""
    };

    handleSubmit = event => {
        event.preventDefault();

        if (this.state.topic !== "" && this.state.startDate !== "" && this.state.endDate !== "") {
            const topic = this.state.topic;
            const startDate = this.state.startDate;
            const endDate = this.state.endDate;

            const query = { topic: topic, startDate: startDate, endDate: endDate }

            API.searchArticles(query)
                .then(response => this.setState({ articles: response.data, topic: "", startDate: "", endDate: "" }))
                .catch(error => console.log(error));
        }
    }

    render() {
        return (
            <div>
                <form>
                    <header>Search Articles</header>
                    <div className="form-group">
                        <label>Topic</label>
                        <input name="topic" value={this.state.topic} className="form-control" onChange={this.handleInputChange} type="text" placeholder="Collusion" />
                    </div>

                    <div className="form-group">
                        <label>Start at:</label>
                        <input name="startDate" value={this.state.startDate} className="form-control" onChange={this.handleInputChange} type="date" placeholder="11/04/2016" />
                    </div>

                    <div className="form-group">
                        <label>End at:</label>
                        <input name="endDate" value={this.state.endDate} className="form-control" onChange={this.handleInputChange} type="date" placeholder="02/08/2019" />
                    </div>

                    <Button className="btn btn-info" onClick={event => this.handleSubmit(event)}>Search!</Button>
                    <input type="submit" value="Submit" />
                </form>

                <div>
                    {this.state.articles.map(article => (
                        <Row>
                            <Col size="3">{article.date}</Col>

                            <Col href={article.url}>
                                <header>{article.title}</header>
                            </Col>

                            <Col size="3">
                                <button className="btn btn-primary" onClick={this.handleSave(article._id)} />
                            </Col>
                        </Row>
                    ))}
                </div>
            </div>
        );
    }
}

export default Home;