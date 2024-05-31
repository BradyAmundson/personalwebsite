import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import LanguageIcon from "@mui/icons-material/Language";

const Project = ({
  projectName,
  description,
  technologies,
  demoLink,
  codeLink,
}) => {
  return (
    <Card sx={styles.projectContainer}>
      <CardContent>
        <Typography variant="h6" component="div">
          <Box display="flex" alignItems="center">
            <CodeIcon sx={{ marginRight: 1 }} />
            {projectName}
          </Box>
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 2 }}>
          {description}
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ marginTop: 2 }}>
          <Box display="flex" alignItems="center">
            <LanguageIcon sx={{ marginRight: 1 }} />
            {technologies}
          </Box>
        </Typography>
        {demoLink ? (
          <Typography variant="body2" sx={{ marginTop: 2 }}>
            Demo:{" "}
            <a href={demoLink} target="_blank" rel="noopener noreferrer">
              {demoLink}
            </a>
          </Typography>
        ) : null}
        {codeLink ? (
          <Typography variant="body2" sx={{ marginTop: 2 }}>
            Code:{" "}
            <a href={codeLink} target="_blank" rel="noopener noreferrer">
              {codeLink}
            </a>
          </Typography>
        ) : null}
      </CardContent>
    </Card>
  );
};

const styles = {
  projectContainer: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    minWidth: 275,
    marginBottom: "20px",
  },
};

export default Project;
