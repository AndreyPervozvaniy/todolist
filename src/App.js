
import React, { useState }   from "react";
import {Button, Flex, Text} from "@chakra-ui/react";
import HeaderToDo from "./components/headerToDO/HeaderToDo";
import StatusToDO from "./components/StatusToDO/StatusToDO";
import OneTask from "./components/OneTask/OneTask";



function App() {

  const [todoList,setTodoList] =useState([
        {
        id:1,
        title:'Take 1',
        isDone:false,
        isImportant:false,
    },
        {
            id:2,
            title:'Take 2',
            isDone:false,
            isImportant:false,
        },
        {
            id:3,
            title:'Take 3',
            isDone:false,
            isImportant:false,
        },
        {
            id:4,
            title:'Take 4',
            isDone:false,
            isImportant:false,
        },
    ] )


     
  return (
       <Flex flexDirection={'column'} p={2}>
           <HeaderToDo setTodoList={setTodoList}/>
           <StatusToDO/>
           <Flex flexDirection={'column'} p={2}>
               {todoList.map((item)=>(
                  <OneTask setTodoList={setTodoList} item={item} key={item.id}/>
               ))}
           </Flex>
       </Flex>
  );
}

export default App;