import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuizSelect from './components/QuizSelect';
import QuizQuestions from './components/QuizQuestions';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= { <QuizSelect /> } />
        <Route path='/q/:topic' element = {  <QuizQuestions /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
