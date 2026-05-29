import React from 'react';
import { Typography, Card, CardContent, Box } from '@mui/material';
import './Education.css';

const Education: React.FC = () => {
  return (
    <Box id="education" component="section" className="education-section">
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
        Education & Credentials
      </Typography>

      <Box className="edu-container">
        <Box className="edu-card-wrapper">
          <Card className="edu-card-box">
            <CardContent>
              <Typography variant="body2" color="text.secondary">Master of Science — 2016</Typography>
              <Typography variant="h6">Computer & Information Systems</Typography>
              <Typography color="primary">Kent State University</Typography>
            </CardContent>
          </Card>
        </Box>

        <Box className="edu-card-wrapper">
          <Card className="edu-card-box">
            <CardContent>
              <Typography variant="body2" color="text.secondary">Microsoft Certifications</Typography>
              <Typography variant="h6">Microsoft Certified Professional (MCP)</Typography>
              <Typography color="primary">Specialist: HTML5 with JavaScript & CSS3</Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default Education;