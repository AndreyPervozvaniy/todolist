import React from "react";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { MdDone, MdWarning } from "react-icons/md";

const OneTask = ({ item, setTodoList }) => {
  const doneTask = () => {
    setTodoList((prev) =>
      prev.map((el) => {
        if (el.id === item.id) {
          return { ...el, isDone: !el.isDone };
        }
        return el;
      })
    );
  };
  const importantTask = () => {
    setTodoList((prev) =>
      prev.map((el) => {
        if (el.id === item.id) {
          return { ...el, isImportant: !el.isImportant };
        }
        return el;
      })
    );
  };

  const deleteTask = () => {
    setTodoList((prev) => prev.filter((el) => el.id !== item.id));
  };
  return (
    <Flex justifyContent={"center"} p={2}>
      <Text p={2}>{item.title}</Text>
      <Flex justifyContent={"flex-end"} w={"900px"} flex={1}>
        {" "}
        {/* Use flex property instead of fixed width */}
        <Button
          style={{
            background: item.isDone ? "green" : "transparent",
            width: "80px",
          }}
          onClick={doneTask}
        >
          {item.isDone ? <MdDone /> : "Done"}
        </Button>
        <Button
          style={{
            background: item.isImportant ? "gold" : "transparent",
            width: "100px",
          }}
          onClick={importantTask}
        >
          {item.isImportant ? <MdWarning /> : "Important"}
        </Button>
        <Button onClick={deleteTask} backgroundColor={"transparent"}>
          Delete
        </Button>
      </Flex>
    </Flex>
  );
};

export default OneTask;
