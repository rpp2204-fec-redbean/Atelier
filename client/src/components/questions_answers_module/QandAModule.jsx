import React, { useState, useEffect } from 'react';
import SearchQ from './SearchQ.jsx';
import QuestionList from './QuestionList.jsx';
import getQuestions from './helper_functions/getQuestions.js';

function QandAModule({ product_id, product_name }) {
  // set props at {product_id, product_name}
  const [questionList, setQuestionList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getQuestions(product_id, page, setQuestionList);
  }, []);

  return (
    <div>
      <h1>Questions & Answers</h1>
      <SearchQ />
      <QuestionList
        questionList={questionList}
        productName={product_name}
        productId={product_id}
      />
    </div>
  );
}

export default QandAModule;