import React from 'react';
import API from "../../utils/API.js";

class Saved extends Component {
    state = {
        savedArticles: []
    };

    componentDidMount() {
        this.getSavedArticles();
    }

    getSavedArticles = () => {
        API.getArticles()
            .then(response => this.setState({ savedArticles: response.data }))
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div>
                {this.state.savedArticles.map(article => (
                    <Row>
                        <Col size="3">{article.date}</Col>

                        <Col href={article.url}>
                            <header>{article.title}</header>
                        </Col>

                        <Col size="3">
                            <button className="btn btn-primary" onClick={this.handleDelete(article._id)} />
                        </Col>
                    </Row>
                ))}
            </div>
        );
    }
}

export default Saved;