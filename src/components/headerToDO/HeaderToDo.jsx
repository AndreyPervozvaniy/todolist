import React, { useState } from "react";
import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { GoPlus } from "react-icons/go";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
const HeaderToDo = ({ setTodoList, todoList }) => {
  const [task, setTask] = useState("");
  const addTask = () => {
    if (task.length < 3) {
      alert("Task is to short");
    } else if (
      todoList.some(
        (item) => item.title.trim().toLowerCase() === task.trim().toLowerCase()
      )
    ) {
      alert("Task with this name is alredy exist");
    } else {
      setTodoList((prev) => [
        {
          id: uuidv4(),
          title: task,
          isDone: false,
          isImportant: false,
          time: moment().format("MMMM Do YYYY, h:mm:ss a"),
        },
        ...prev,
      ]);
      setTask("");
    }
  };
  return (
    <Flex width={"100%"} justify={"center"}>
      <Flex flexDirection={"column"} justifyContent={"center"}>
        <InputGroup my={2}>
          <Input
            rounded={"md"}
            w={"300px"}
            spacing={4}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTask();
              }
            }}
            type="text"
            placeholder="Add task..."
            border={"2px solid black"}
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <InputRightElement p={1}>
            <IconButton
              aria-label="Search"
              icon={<GoPlus />}
              onClick={addTask}
              size={"sm"}
              backgroundColor={"#feca39"}
            />
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Flex>
  );
};

export default HeaderToDo;
