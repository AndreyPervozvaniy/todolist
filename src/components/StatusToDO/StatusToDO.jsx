import React from 'react';
import {Button, Flex} from "@chakra-ui/react";

const StatusToDo = () => {
    return (
        <Flex>
            <Button>Done</Button>
            <Button>Important</Button>
            <Button>InProgress</Button>
            <Button>All</Button>
        </Flex>
    );
};

export default StatusToDo;