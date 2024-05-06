import React from "react";
import './Home.css';
import { ChakraProvider } from "@chakra-ui/react";

const Home = () => {
  return (
    <ChakraProvider>
    <div>
        Home Page
    </div>
    </ChakraProvider>
  );
};

export default Home;