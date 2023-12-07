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
const HeaderToDo = ({ setTodoList }) => {
  const [task, setTask] = useState(" ");
  const addTask = () => {
    if (task.length >= 3) {
      setTodoList((prev) => [
        ...prev,
        {
          id: uuidv4(),
          title: task,
          isDone: false,
          isImportant: false,
        },
      ]);
      setTask("");
    } else {
      alert("Task is too short!");
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
