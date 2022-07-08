import React, { useState } from "react";
import { Box, Container, Input, Button, Heading } from "@chakra-ui/react";

export const Form = () => {
  const [data, setData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
    setData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div>
      <Box border="2px" textAlign="center" borderRadius={5} m={8} p={8}>
        <Container>
          <form>
            <Heading textColor="blue">Contact Form</Heading>
            <Input
              mt={5}
              name="name"
              value={data.name}
              onChange={changeHandler}
              placeholder="Name"
            ></Input>
            <Input
              mt={5}
              name="email"
              value={data.email}
              onChange={changeHandler}
              placeholder="Email"
            ></Input>
            <Input
              mt={5}
              name="message"
              value={data.message}
              onChange={changeHandler}
              placeholder="Message"
            ></Input>
            <Button mt={5} onClick={submitHandler}>
              Submit
            </Button>
          </form>
        </Container>
      </Box>
    </div>
  );
};
