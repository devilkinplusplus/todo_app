import React, { Component } from "react";
import Content from "./content";

class Container extends Component {
  state = {
    contents: [
      { id: 1, value: "Work with React", date: Date.now() },
      { id: 2, value: "Deep into React", date: Date.now() },
      {
        id: 3,
        value: "More about .Net Core",
        date: Date.now(),
      },
    ],
    inputValue: "",
  };
  render() {
    const { inputValue } = this.state;
    return (
      <div className="container fluid">
        <div className="row mt-5">
          <div className="col-lg-8 offset-md-2 mb-2">
            <div className="alert alert-primary" role="alert">
              <h2 className="lead fs-2 text-center text-primary fw-bold">
                Todo App
              </h2>
            </div>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => this.setState({ inputValue: e.target.value })}
              className="form-control"
              placeholder="Enter a work todo"
              onKeyDown={this.onEnterPressed}
            />
          </div>

          <div className="col-lg-8 offset-md-2">
            {this.state.contents.length === 0 && this.noItemFormat()}
            {this.state.contents.map((item) => {
              return (
                <Content
                  key={item.id}
                  onDelete={this.handleDelete}
                  contents={item}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  handleDelete = (contentId) => {
    const contents = this.state.contents.filter((x) => x.id !== contentId);
    this.setState({ contents: contents });
  };
  noItemFormat = () => {
    return (
      <div className="text-center mt-4 alert alert-success" role="alert">
        <h2 className="lead fs-2">All Done!</h2>
      </div>
    );
  };

  onEnterPressed = (e) => {
    //when enter pressed go if statement
    if (e.keyCode === 13) {
      const newEntry = {
        id: Math.random(),
        value: this.state.inputValue,
      };
      this.setState({
        contents: [...this.state.contents, newEntry],
        inputValue: "",
      });
    }
  };
}

export default Container;
