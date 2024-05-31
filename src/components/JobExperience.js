import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DateRangeIcon from "@mui/icons-material/DateRange";

const JobExperience = ({
  jobTitle,
  company,
  location,
  startDate,
  endDate,
  description,
}) => {
  return (
    <Card sx={styles.jobContainer}>
      <CardContent>
        <Typography variant="h6" component="div">
          <Box display="flex" alignItems="center">
            <WorkIcon sx={{ marginRight: 1 }} />
            {jobTitle}
          </Box>
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          <Box display="flex" alignItems="center">
            <LocationOnIcon sx={{ marginRight: 1 }} />
            {company} | {location}
          </Box>
        </Typography>
        <Typography variant="body2" color="textSecondary">
          <Box display="flex" alignItems="center">
            <DateRangeIcon sx={{ marginRight: 1 }} />
            {startDate} - {endDate}
          </Box>
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 2 }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

const styles = {
  jobContainer: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "60vh",
    margin: "50px",
  },
};

export default JobExperience;
