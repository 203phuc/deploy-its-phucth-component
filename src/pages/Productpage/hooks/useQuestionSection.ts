import { useCallback, useState } from 'react';
import { Question } from '../types';

export const useQuestionSection = (questions: Question[]) => {
  const [displayedQuestions, setDisplayedQuestions] = useState(2);
  const [showAllQuestions, setShowAllQuestions] = useState(false);
  const [isAskQuestionOpen, setIsAskQuestionOpen] = useState(false);

  const handleLoadMoreQuestions = useCallback(() => {
    setDisplayedQuestions(questions.length);
    setShowAllQuestions(true);
  }, [questions.length]);

  const handleOpenAskQuestionModal = useCallback(() => {
    setIsAskQuestionOpen(true);
  }, []);

  const handleCloseAskQuestionModal = useCallback(() => {
    setIsAskQuestionOpen(false);
  }, []);

  const questionsToShow = showAllQuestions ? questions : questions.slice(0, displayedQuestions);

  return {
    displayedQuestions,
    showAllQuestions,
    isAskQuestionOpen,
    questionsToShow,
    handleLoadMoreQuestions,
    handleOpenAskQuestionModal,
    handleCloseAskQuestionModal,
  };
};
