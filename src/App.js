import React, { useEffect, useState } from "react";
import { Flex, Text } from "@chakra-ui/react";
import HeaderToDo from "./components/headerToDO/HeaderToDo";
import StatusToDO from "./components/StatusToDO/StatusToDO";
import OneTask from "./components/OneTask/OneTask";
import Pagination from "./components/Pagination/Pagination";
import moment from "moment";
import FooterTodo from "./components/FooterTodo/FooterToDo";
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
    setPage(1);
  }, [status]);
  const [page, setPage] = useState(1);
  const [time, setTime] = useState(false);
  const [sortTime, setSortTime] = useState(false);
  return (
    <Flex
      flexDirection={"column"}
      p={2}
      justifyContent={"center"}
      alignContent={"center"}
      h={"100vh"}
    >
      <HeaderToDo setTodoList={setTodoList} todoList={todoList} />
      <StatusToDO
        sortTime={sortTime}
        setSortTime={setSortTime}
        status={status}
        setStatus={setStatus}
        time={time}
        setTime={setTime}
      />
      {status === "done" && !todoList.some((item) => item.isDone) ? (
        <Text textAlign={"center"} fontWeight={"bold"}>
          Your didnt finish any task
        </Text>
      ) : status === "inProgress" && !todoList.some((item) => !item.isDone) ? (
        <Text textAlign={"center"} fontWeight={"bold"}>
          Your finished all task
        </Text>
      ) : status === "important" &&
        !todoList.some((item) => item.isImportant) ? (
        <Text textAlign={"center"} fontWeight={"bold"}>
          U didn't have important task
        </Text>
      ) : status === "all" && !todoList.length ? (
        <Text textAlign={"center"} fontWeight={"bold"}>
          Task isnt exist
        </Text>
      ) : (
        <>
          {" "}
          <Flex flexDirection={"column"} p={2} justifyContent={"center"}>
            {todoList
              .sort((a, b) => {
                if (sortTime && time) {
                  return (
                    moment(a.time, "MMMM Do YYYY, h:mm:ss a").valueOf() -
                    moment(b.time, "MMMM Do YYYY, h:mm:ss a").valueOf()
                  );
                } else if (!sortTime && time) {
                  return (
                    moment(b.time, "MMMM Do YYYY, h:mm:ss a").valueOf() -
                    moment(a.time, "MMMM Do YYYY, h:mm:ss a").valueOf()
                  );
                } else {
                  return 0;
                }
              })
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
              .filter((item, idx) => idx >= (page - 1) * 4 && idx < 4 * page)
              .map((item) => (
                <OneTask
                  time={time}
                  status={status}
                  setTodoList={setTodoList}
                  item={item}
                  key={item.id}
                />
              ))}{" "}
            <Pagination
              status={status}
              page={page}
              setPage={setPage}
              todoList={todoList}
            />
            <FooterTodo setTodoList={setTodoList} todoList={todoList} />
          </Flex>
        </>
      )}{" "}
    </Flex>
  );
}

export default App;
