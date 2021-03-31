import "./App.css";
import ToDoListItem from "./ToDoListItem";
import ToDoListAddItem from "./ToDoListAddItem";
import { useState } from "react";
import { Card, Typography } from "@material-ui/core";

function App() {
  const [todoListItems, setToDoListItems] = useState([
    { item: "Learn React", isComplete: false },
    { item: "Learn Redux", isComplete: false },
    { item: "Get Vaccinated", isComplete: true },
  ]);

  const addItem = (item) => {
    const currentItems = [...todoListItems];
    currentItems.push({
      item: item,
      isComplete: false,
    });
    setToDoListItems(currentItems);
  };
  const toggleItemChecked = (index) => {
    const currentItems = [...todoListItems];
    currentItems[index].isComplete = !currentItems[index].isComplete;
    setToDoListItems(currentItems);
  };
  return (
    <Card className="App">
      <Typography variant="h4">My To-Dos!</Typography>
      {todoListItems.map((todoListItem, index) => (
        <ToDoListItem
          key={index}
          item={todoListItem}
          toggleItem={toggleItemChecked}
          index={index}
        />
      ))}
      <ToDoListAddItem addItem={addItem} />
    </Card>
  );
}

export default App;
