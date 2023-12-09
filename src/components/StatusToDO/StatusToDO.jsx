import React, { useEffect } from "react";
import { Button, Flex, textDecoration } from "@chakra-ui/react";
const StatusToDo = ({
  status,
  setStatus,
  time,
  setTime,
  sortTime,
  setSortTime,
}) => {
  return (
    <Flex m={2} justify={"center"}>
      <Flex justifyContent={"space-between"} w={"400px"}>
        <Button
          left={"100px"}
          pos={"absolute"}
          variant={"outline"}
          _hover={{ textDecoration: "underline" }}
          border={"none"}
          onClick={() => setTime(!time)}
          style={{ background: time ? "red" : "transparent" }}
        >
          Time
        </Button>
        {time && (
          <Button
            onClick={() => setSortTime((prev) => !prev)}
            left={"190px"}
            pos={"absolute"}
            variant={"outline"}
            _hover={{ textDecoration: "underline" }}
            border={"none"}
          >
            {sortTime ? "Start new" : "Start old"}
          </Button>
        )}

        <Button
          variant={"outline"}
          _hover={{ textDecoration: "underline" }}
          border={"none"}
          onClick={() => setStatus("done")}
          style={{ textDecoration: status === "done" ? "underline" : "none" }}
        >
          Done
        </Button>
        <Button
          variant={"outline"}
          _hover={{ textDecoration: "underline" }}
          border={"none"}
          onClick={() => setStatus("important")}
          style={{
            textDecoration: status === "important" ? "underline" : "none",
          }}
        >
          Important
        </Button>
        <Button
          variant={"outline"}
          _hover={{ textDecoration: "underline" }}
          border={"none"}
          onClick={() => setStatus("inProgress")}
          style={{
            textDecoration: status === "inProgress" ? "underline" : "none",
          }}
        >
          InProgress
        </Button>
        <Button
          variant={"outline"}
          _hover={{ textDecoration: "underline" }}
          border={"none"}
          onClick={() => setStatus("all")}
          style={{ textDecoration: status === "all" ? "underline" : "none" }}
        >
          All
        </Button>
      </Flex>
    </Flex>
  );
};

export default StatusToDo;
