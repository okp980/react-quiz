import Header from "./framework/Header";
import Footer from "./framework/Footer";
import ConnectApi from "../api/ConnectApi";

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from "@mui/material/CardHeader";
import GlobalStyles from "@mui/material/GlobalStyles";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Box } from "@mui/system";


export const QuizSelect = () => {
    const API_URL = "http://127.0.0.1:8000/api/";
    const [dataState] = ConnectApi(API_URL);
    console.log(dataState)
    return(
        <>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
            <Header />
                <Container maxWidth="sm" component='main'>
                    <Typography
                        component='h1'
                        variant='h2'
                        align="center"
                        color='textPrimary'
                        gutterBottom
                    >Quizzes</Typography>
                    <Typography
                        component='h5'
                        align="center"
                        color='textSecondary'
                        gutterBottom
                    >Choose the quiz you want to take!</Typography>
                </Container>
                <Container maxWidth='md' component='main'>               
                    <Grid container spacing={5} alignItems="flex-end">
                        {dataState.data.map((q) => (
                            <Grid item key={q.title} xs={12} md={4}>
                                <Card>
                                    <CardHeader
                                    title={q.title}
                                    titleTypographyProps={{ align: "center" }}
                                    subheaderTypographyProps={{ align: "center"}}
                                    sx = {{
                                        backgroundColor: (theme) =>
                                            theme.palette.mode === 'light'
                                            ? theme.palette.grey[200]
                                            : theme.palette.grey[700],
                                    }}
                                    />
                                    <CardContent>
                                        <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'baseline',
                                            mb: 2,
                                        }}
                                        >
                                        <Typography component='h2' variant='h6' color='textPrimary'>
                                            Random Quiz
                                            </Typography> 
                                        </Box>
                                        <ul>
                                            <Typography
                                            component="li"
                                            variant="subtitle1"
                                            align="center"
                                            
                                            >{q.number_of_ques} Questions</Typography>
                                        </ul>
                                    </CardContent>
                                    <CardActions>
                                        <Button
                                        fullWidth
                                        variant="outline"
                                        color="primary"
                                        >
                                            Start Quiz
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>

            <Footer />
        </>
    )
}

export default QuizSelect;