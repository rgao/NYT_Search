import React, { Component } from "react";

class Form extends Component {
    render() {
        return (
            <div>
                <form>
                    <header>Search</header>
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

                    <button className="btn btn-info" onClick={(event) => this.handleSubmit(event)}>Search!</button>
                    {/* <input type="submit" value="Submit" /> */}
                </form>
            </div>
        );
    }
}

export default Form;