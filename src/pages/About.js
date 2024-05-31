import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <Container>
        <Box sx={{ my: 2 }}>
          {[...new Array(22)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join("\n")}
        </Box>
      </Container>
    </div>
  );
};

export default About;
