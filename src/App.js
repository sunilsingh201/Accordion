import React,{useState} from 'react'
import './App.css';
import data from "./data";
import Singleacc from './Singleacc';
import questions from './data';

function App() {
  const [questions,setQuestions] = useState(data)
  return (
    <main>
      <div className='container'>
        <h3>Questions and answers about login</h3>
        <section className='info'>
          {questions.map((question)=>{
            return <Singleacc key={question.id} {...question}/>
          })
          }
        </section>
      </div>
    </main>
    
   
  );
}

export default App;
