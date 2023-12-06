import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Button, Tabs, Menu } from "@chakra-ui/react";
import App from "./App";
import "./index.css";

// Import the base Chakra UI theme
import * as chakraTheme from "@chakra-ui/theme";

// Extend the base theme with your custom components
const theme = extendTheme({
    components: {
        Button,
        Tabs,
        Menu,
    },
});

const root = ReactDOM.createRoot(document.getElementById("root"));

// Use ChakraProvider instead of ChakraBaseProvider
root.render(
    <ChakraProvider theme={theme}>
        <App />
    </ChakraProvider>
);