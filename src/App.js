import React, { Component } from "react";
import faker from "Faker";
import "./App.css";

//Components
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const obj = {
  img: faker.Image.avatar(),
  author: faker.Name.lastName(),
  date: faker.Date.recent()
};

class App extends Component {
  render() {
    return (
      <div className="ui container comments">
        <ApprovalCard>
          <div>
            <h4>Warning!</h4>
            Are you sure?
          </div>
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail author={obj.author} avatar={obj.img} date={obj.date} />
        </ApprovalCard>
      </div>
    );
  }
}

export default App;
