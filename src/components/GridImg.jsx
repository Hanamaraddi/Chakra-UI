import React from "react";
import { Grid, Image } from "@chakra-ui/react";
import Images from "../jsonData.json";

export const GridImg = () => {
  return (
    <div>
      <Grid templateColumns="repeat(3, 1fr)" mb={4} gap={6}>
        {Images.map((imgObj) => (
          <Image
            src={imgObj.img}
            borderRadius="5px"
            height="300px"
            width="400px"
            key={imgObj.id}
            alt={imgObj.title}
          ></Image>
        ))}
      </Grid>
    </div>
  );
};
