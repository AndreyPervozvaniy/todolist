import { Button, Flex } from "@chakra-ui/react";
import React from "react";
const Pagination = ({ todoList, page, setPage, status }) => {
  const todoListLength =
    status === "done"
      ? todoList.filter((item) => item.isDone).length
      : status === "inProgress"
      ? todoList.filter((item) => !item.isDone).length
      : status === "important"
      ? todoList.filter((item) => item.isImportant).length
      : todoList.length;
  const paginationArr = new Array(Math.ceil(todoListLength / 4)).fill(null);
  return (
    <>
      <Flex justify={"center"} columnGap={"10px"}>
        {paginationArr.length > 1 &&
          paginationArr.map((item, idx) => (
            <Button
              style={{ color: page === idx + 1 ? "red" : "black" }}
              key={idx}
              onClick={() => setPage(idx + 1)}
            >
              {idx + 1}
            </Button>
          ))}
      </Flex>
    </>
  );
};
export default Pagination;
