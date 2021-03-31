import "./ToDoListItem.css";
import { Checkbox, FormControlLabel } from "@material-ui/core";

const ToDoListItem = ({ item, toggleItem, index }) => {
  const handleToggleItem = () => {
    toggleItem(index);
  };
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox checked={item.isComplete} onChange={handleToggleItem} />
        }
        label={item.item}
      />
    </div>
  );
};

export default ToDoListItem;
