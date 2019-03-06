import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "../src/components/Button";
import "../src/App.scss";
import Task from "../src/components/Task";
import TaskList from "../src/components/TaskList";

storiesOf("Button", module)
  .add("with text", () => <Button>Hello Button</Button>)
  .add("with some emoji", () => (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf("Task", module)
  .add("Default", () => <Task checked={false}> Default task</Task>)
  .add("Checked", () => <Task checked>Checked Task</Task>)
  .add("Red", () => <Task color="red">Red Task</Task>);

storiesOf("Task List", module)
  .add("Default", () => <TaskList tasks={[{ text: "Task 1" }, { text: "Task 2" }]} />)
  .add("Coloured", () => <TaskList tasks={[{ text: "Task 1", color: "red" }, { text: "Task 2", color: "blue" }]} />);
