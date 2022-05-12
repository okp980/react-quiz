import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CollectData from "../api/ConnectApi";
import Footer from "./framework/Footer";
import './main.css';
import Header from "./framework/Header";
//MaterialUI
import { Button,
    FormControlLabel, 
    Checkbox,
    Typography,
    Container,
    RadioGroup, 
    ButtonGroup} from "@mui/material";

export const QuizQuestions = () => {
    const {topic} = useParams();
    const API_URL = 'http://127.0.0.1:8000/api/q/' + topic;
    const [dataState, fetch] = CollectData(API_URL);
    console.log(dataState);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [question, setQuestion] = useState([]);
    //const [ans, setAns] = useState({})
    //const ans = dataState.data[currentQuestion].answer

    const handleSelections = (e) => {
       // setAns({ ...ans, [e.target.value]: e.target.checked});
        const qarr = question.map((q)=>{
           // returns an added property called selected that holds the value of the answer that was selected
			return { ...q, selected: e.target.value };
        })
        setQuestion(qarr)
        console.log(question) 
    }

    //console.log(ans)
    
    useEffect(()=> {
        setQuestion(dataState.data)
    }, [dataState])

    const handleNextQuestion = () => {
        const nextQuestion = currentQuestion + 1;
        if(nextQuestion < dataState.data.length){
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    }
    const handlePrevQuestion = () => {
        const prevQuestion = currentQuestion - 1;
        setCurrentQuestion(prevQuestion); 
    }
    if (fetch.isFetching === true){
        return <p>Loading...</p>
    }
    return(
        <>
            <Header />
               <Container component="main" maxWidth="xs">
                    {showScore ? (
                        <div className="score-section">You scored {score} out of {dataState.data.length}</div>
                    ) : (
                        <>
                            <div className="question-section">
                                <div className="question-count">
                                    <span>Question {currentQuestion + 1}</span>/{dataState.data.length}
                                </div>
                                <Typography component="h1" variant="h5">
                                  {question[currentQuestion]?.title}
                                </Typography>
                            </div>
                            <div className="answer-section">
                                {question[currentQuestion]?.answer.map((option) => (
                                    <RadioGroup key={option.id}>
                                        <FormControlLabel
                                        control={
                                            <Checkbox
                                            value={option.id}
                                            color="primary"
                                            onChange={handleSelections}
                                            checked={!!option?.selected} // should return a checked checkbox if selected is true
                                            />
                                        }
                                        label={option.answer_text}
                                        />
                                  </RadioGroup>
                                  
                                ))}
                            </div>
                            <ButtonGroup size="large" aria-label="large button group" fullWidth
                                sx={{
                                    margin: (theme) =>
                                    theme.spacing(3, 0, 2),
                                }}
                            >
                                <Button onClick={handlePrevQuestion}>Previous</Button>
                                <Button onClick={handleNextQuestion}>Next</Button>
                            </ButtonGroup>
                        </>
                    )}
                
                </Container>
            <Footer />
        </>
    )
}

export default QuizQuestions;
