import React from 'react';
import {Button, Flex, Input,Text} from "@chakra-ui/react";

const OneTask = ({item,setTodoList}) => {
     const deleteTask =()=> {
        setTodoList((prev)=>prev.filter((el)=>el.id !=item.id))

     }
    return (
        <Flex><Text p={2}>{ item.title} <Button>Done</Button><Button>Important</Button><Button onClick={deleteTask}>Delete</Button></Text></Flex>
        
    );
};

export default OneTask;