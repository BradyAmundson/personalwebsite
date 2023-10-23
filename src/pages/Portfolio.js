import React from "react";

const Portfolio = () => {
  return (
    <div>
      <h1>Portfolio Page</h1>
      <p>
        {[...new Array(22)]
          .map(
            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
          )
          .join("\n")}
      </p>
    </div>
  );
};

export default Portfolio;
