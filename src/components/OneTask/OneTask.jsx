import React, { useState } from "react";
import { Button, Flex, Input, Text, useStatStyles } from "@chakra-ui/react";
import { MdDone, MdWarning } from "react-icons/md";

const OneTask = ({ item, setTodoList, time }) => {
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
  const [change, setChange] = useState(false);
  const [changeText, setChangeText] = useState(item.title);
  const saveChangeText = () => {
    setTodoList((prev) =>
      prev.map((el) => {
        if (el.id === item.id) {
          return { ...el, title: changeText };
        }
        return el;
      })
    );
    setChange(false);
  };
  return (
    <>
      {change ? (
        <Flex justifyContent={"center"} p={2}>
          <Button onClick={saveChangeText}>Save</Button>
          <Input
            onChange={(e) => setChangeText(e.target.value)}
            value={changeText}
            w={"500px"}
          />{" "}
          <Button
            onClick={() => {
              setChange(false);
              setChangeText(item.title);
            }}
          >
            Cancel
          </Button>
          <Flex justifyContent={"flex-end"} w={"900px"} flex={1}></Flex>
        </Flex>
      ) : (
        <Flex justifyContent={"center"} p={2}>
          <Text onClick={() => setChange(true)} p={2}>
            {item.title}
          </Text>
          <Flex justifyContent={"flex-end"} w={"900px"} flex={1}>
            {" "}
            {time ? (
              <Text p={2}>{item.time}</Text>
            ) : (
              <Flex justifyContent={"flex-end"} w={"900px"} flex={1}>
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
            )}
          </Flex>
        </Flex>
      )}
    </>
  );
};

export default OneTask;
