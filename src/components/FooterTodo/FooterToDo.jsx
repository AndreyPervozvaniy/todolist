import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
const FooterTodo = ({ todoList, setTodoList }) => {
  return (
    <Flex justify={"center"} m={2}>
      <Flex justify="space-between" w={"100%"} p={2}>
        <Text fontWeight={"bold"}>
          {" "}
          {todoList.filter((item) => item.isDone).length} of {todoList.length}{" "}
        </Text>
        <Button
          onClick={() =>
            setTodoList((prev) => prev.filter((item) => !item.isDone))
          }
        >
          Delete all doned task
        </Button>
      </Flex>
    </Flex>
  );
};
export default FooterTodo;
