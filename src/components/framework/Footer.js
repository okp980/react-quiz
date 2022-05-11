import React from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

function Copyright() {
    return (
        <Typography variant="body2" color='textSecondary' align='center'>
            {"Copyright © "}
            <Link color='inherit' href="#">
                Greenlife Pharmaceuticals Ltd
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const theme = createTheme();

export default function Footer() {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ bgcolor: 'background.paper', p: 6}} component="footer">
              <Typography variant="h6" align="center" gutterBottom>
                Greenlife Pharmaceuticals Limited
              </Typography>
              <Typography
                variant="subtitle1"
                align="center"
                color="text.secondary"
                component="p"
                >
                Trainings and Tests!
              </Typography>
              <Copyright />
            </Box>
        </ThemeProvider>
    )
}