import React, { useState } from 'react';
import {Button, Flex, Input} from "@chakra-ui/react";
import { v4 as uuidv4 } from 'uuid';
const HeaderToDo = ({setTodoList}) => {
    const [task,setTask]=useState(' ')
    const addTask = () => {
        if (task.length >= 3) {
          setTodoList((prev) => [
            ...prev,
            {
              id: uuidv4(),  
              title: task,
              isDone: false,
              isImportant: false,
            },
          ]);
          setTask('');
        } else {
          alert('Task is too short!');
        }}
    return (
        <Flex   width={"100%"} justify={'center'} alingitems={'center'}>
            <Flex  flexDirection={'column'} justifyContent={'center'}  >
                <Input placeholder='Basic usage' value={task} onChange={(e)=>setTask(e.target.value)} w={'300px'}/>
                <Button onClick={addTask} w={'300px'}>Add</Button>
            </Flex>
 
            
        </Flex>
    );
};

export default HeaderToDo;