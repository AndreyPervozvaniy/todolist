import React, { useState } from "react";
import { Button, Center, Flex, Text } from "@chakra-ui/react";
import HeaderToDo from "./components/headerToDO/HeaderToDo";
import StatusToDO from "./components/StatusToDO/StatusToDO";
import OneTask from "./components/OneTask/OneTask";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [status, setStatus] = useState("all");
  return (
    <Flex
      flexDirection={"column"}
      p={2}
      justifyContent={"center"}
      alignContent={"center"}
      h={"100vh"}
    >
      <HeaderToDo setTodoList={setTodoList} />
      <StatusToDO status={status} setStatus={setStatus} />
      <Flex flexDirection={"column"} p={2} justifyContent={"center"}>
        {todoList.map((item) => (
          <OneTask
            status={status}
            setTodoList={setTodoList}
            item={item}
            key={item.id}
          />
        ))}
      </Flex>
    </Flex>
  );
}

export default App;
