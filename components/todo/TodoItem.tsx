import { Divider, IconButton, ListItem, ListItemText } from "@mui/material";
import { FC } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import Link from "next/link";

type TodoItemProps = {
  todo: any;
};

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  return (
    <ListItem
      sx={{
          minWidth: 300
      }}
      secondaryAction={
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      }
    >
      <Link href={todo.name ? `/user/${todo?.id}` : ''}>
        <ListItemText
          primary={todo?.text || todo?.name}
        />
      </Link>
      
    </ListItem>
  );
};

export default TodoItem;
