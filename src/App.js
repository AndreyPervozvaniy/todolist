import React, { useEffect, useState } from "react";
import { Flex, Text } from "@chakra-ui/react";
import HeaderToDo from "./components/headerToDO/HeaderToDo";
import StatusToDO from "./components/StatusToDO/StatusToDO";
import OneTask from "./components/OneTask/OneTask";

function App() {
  const initialStatus = localStorage.getItem("status") || "all";
  const [todoList, setTodoList] = useState([]);
  const [status, setStatus] = useState(initialStatus);

  useEffect(() => {
    const storedTodoList = JSON.parse(localStorage.getItem("todoList"));
    if (storedTodoList) {
      setTodoList(storedTodoList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  useEffect(() => {
    localStorage.setItem("status", status);
  }, [status]);

  return (
    <Flex
      flexDirection={"column"}
      p={2}
      justifyContent={"center"}
      alignContent={"center"}
      h={"100vh"}
    >
      <HeaderToDo setTodoList={setTodoList} todoList={todoList} />
      <StatusToDO status={status} setStatus={setStatus} />
      {status === "done" && !todoList.some((item) => item.isDone) ? (
        <Text>Your didnt finish any task</Text>
      ) : status === "inProgress" && !todoList.some((item) => !item.isDone) ? (
        <Text>Your finished all task</Text>
      ) : status === "important" &&
        !todoList.some((item) => item.isImportant) ? (
        <Text>U didn't have important task</Text>
      ) : status === "all" && !todoList.length ? (
        <Text>Task isnt exist</Text>
      ) : (
        <Flex flexDirection={"column"} p={2} justifyContent={"center"}>
          {todoList
            .filter((item) => {
              if (status === "done") {
                return item.isDone;
              } else if (status === "inProgress") {
                return !item.isDone;
              } else if (status === "important") {
                return item.isImportant;
              } else {
                return true;
              }
            })
            .map((item) => (
              <OneTask
                status={status}
                setTodoList={setTodoList}
                item={item}
                key={item.id}
              />
            ))}
        </Flex>
      )}
    </Flex>
  );
}

export default App;
