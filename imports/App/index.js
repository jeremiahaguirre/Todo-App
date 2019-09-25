import React, { Component } from "react";
import "./styles.css";
import ToDo from "../ui/components/ToDoItem";
import ToDoCount from "../ui/components/TodoCount";
import ClearButton from "../ui/components/ClearButton";
import Form from "../ui/components/ToDoInput";
import { withTracker } from "meteor/react-meteor-data";
import { ToDos } from "../api/todo";
import AccountsUIWrapper from "../ui/components/AccountsWrapper";
import { Meteor } from "meteor/meteor";

class App extends Component {
  render() {
    return console.log("hello world");
  }
}

export default App;
