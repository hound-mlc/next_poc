import { Divider, List, Stack, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import React, { FC } from "react";
import TodoItem from "./TodoItem";

type TodoListProps = {
    todos: any[];
}

const TodoList: FC<TodoListProps> = ({todos}) => {

    const { t } = useTranslation("common");

    return (
        <Stack direction="column" spacing={2}>
            <Typography variant="h4">{t("todoListTitle")}</Typography>
        <List>
            {todos.map((todo: any, index: number) => {
                return <React.Fragment key={index}>
                    <TodoItem todo={todo} />
                    {(index !== (todos.length - 1)) && <Divider />}
                </React.Fragment>
            })}
        </List>
        </Stack>
    )
}

export default TodoList;