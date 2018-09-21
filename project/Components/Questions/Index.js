import React from 'react';

export default function Questions({ questions, answers }) {
  const listItems = questions.allIds.map(questionId => {
    const question = questions.byId[questionId];
    return (
      <div className="Question-List-Item" key={questionId}>
        <p className="Title">{question.title}</p>
        <p className="Answer">
          <span className="Label mr-1">Answer:</span>
          {answers.byId[question.answers[0]].title}
        </p>
      </div>
    );
  });
  return (
    <div className="Questions text-left mt-3">
      {listItems}
      <a href="#" className="Ask-question">
        Ask question
      </a>
    </div>
  );
}
