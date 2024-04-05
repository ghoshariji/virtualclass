import React, { useState } from 'react';
import Afterloginusernav from '../navbar/Afterloginusernav';

const Dynamicexamwrite = () => {
    const queParams = new URLSearchParams(document.location.search);
    const quesList = JSON.parse(queParams.get("ques"));

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [score, setScore] = useState(0);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const handleNextQuestion = () => {
        if (selectedOption === quesList[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption('');
    };

    const handlePreviousQuestion = () => {
        setCurrentQuestion(currentQuestion - 1);
        setSelectedOption('');
    };

    const handleFinishExam = () => {
        // Check the answer of the last question
        if (selectedOption === quesList[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }
        // Calculate and display the result
        const totalQuestions = quesList.length;
        const percentageScore = (score / totalQuestions) * 100;
        alert(`Your score: ${score}/${totalQuestions} (${percentageScore}%)`);
    };

    return (
        <div>
            <Afterloginusernav />
            <h1>Welcome to the exam</h1>
            {quesList.map((question, index) => (
                index === currentQuestion && (
                    <div key={index}>
                        <p>{question.question}</p>
                        <ul>
                            <li>
                                <input
                                    type="radio"
                                    id={`optionA_${index}`}
                                    name={`option_${index}`}
                                    value={question.optionA}
                                    checked={selectedOption === question.optionA}
                                    onChange={() => handleOptionSelect(question.optionA)}
                                />
                                <label htmlFor={`optionA_${index}`}>{question.optionA}</label>
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    id={`optionB_${index}`}
                                    name={`option_${index}`}
                                    value={question.optionB}
                                    checked={selectedOption === question.optionB}
                                    onChange={() => handleOptionSelect(question.optionB)}
                                />
                                <label htmlFor={`optionB_${index}`}>{question.optionB}</label>
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    id={`optionC_${index}`}
                                    name={`option_${index}`}
                                    value={question.optionC}
                                    checked={selectedOption === question.optionC}
                                    onChange={() => handleOptionSelect(question.optionC)}
                                />
                                <label htmlFor={`optionC_${index}`}>{question.optionC}</label>
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    id={`optionD_${index}`}
                                    name={`option_${index}`}
                                    value={question.optionD}
                                    checked={selectedOption === question.optionD}
                                    onChange={() => handleOptionSelect(question.optionD)}
                                />
                                <label htmlFor={`optionD_${index}`}>{question.optionD}</label>
                            </li>
                        </ul>
                    </div>
                )
            ))}
            <div>
                {currentQuestion > 0 && (
                    <button onClick={handlePreviousQuestion}>Previous</button>
                )}
                {currentQuestion < quesList.length - 1 ? (
                    <button onClick={handleNextQuestion}>Next</button>
                ) : (
                    <button onClick={handleFinishExam}>Finish</button>
                )}
            </div>
        </div>
    );
};

export default Dynamicexamwrite;
