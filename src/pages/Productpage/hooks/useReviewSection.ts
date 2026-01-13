import { useCallback, useState } from 'react';
import { Review } from '../types';

export const useReviewSection = (reviews: Review[]) => {
  const [displayedReviews, setDisplayedReviews] = useState(6);
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [isWriteReviewModalOpen, setIsWriteReviewModalOpen] = useState(false);

  const handleLoadMore = useCallback(() => {
    setDisplayedReviews(reviews.length);
    setShowAllReviews(true);
  }, [reviews.length]);

  const handleOpenWriteReviewModal = useCallback(() => {
    setIsWriteReviewModalOpen(true);
  }, []);

  const handleCloseWriteReviewModal = useCallback(() => {
    setIsWriteReviewModalOpen(false);
  }, []);

  const reviewsToShow = showAllReviews ? reviews : reviews.slice(0, displayedReviews);

  return {
    displayedReviews,
    showAllReviews,
    isWriteReviewModalOpen,
    reviewsToShow,
    handleLoadMore,
    handleOpenWriteReviewModal,
    handleCloseWriteReviewModal,
  };
};
