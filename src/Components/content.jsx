import React, { Component } from "react";
import moment from "moment/moment";

class Content extends Component {
  render() {
    const { onDelete, contents } = this.props;
    return (
      <div className="card mb-1">
        <div className="card-body d-flex justify-content-between">
          <p className="card-text lead">
            {contents.value}
            <p className="fs-6 mt-2 mb-0">
              {moment(contents.date).format("DD-MMM-yyyy HH:MM")}
            </p>
          </p>
          <i
            className="fa-solid fa-circle-xmark"
            style={{ cursor: "pointer" }}
            onClick={() => onDelete(contents.id)}
          ></i>
        </div>
      </div>
    );
  }
}

export default Content;
