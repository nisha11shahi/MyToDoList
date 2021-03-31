import { TextField, Button } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { useState } from "react";

const ToDoListAddItem = ({ addItem }) => {
  const [newItem, setNewItem] = useState("");
  const handleClickAdd = (e) => {
    e.preventDefault();
    addItem(newItem);
    setNewItem("");
  };
  const handleChange = (e) => {
    setNewItem(e.target.value);
  };
  return (
    <div className="ToDoListAddItem">
      <form>
        <TextField
          variant="outlined"
          label="Add here.."
          value={newItem}
          onChange={handleChange}
          autoFocus
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleClickAdd}
          disabled={!newItem}
        >
          <Add />
        </Button>
      </form>
    </div>
  );
};

export default ToDoListAddItem;
