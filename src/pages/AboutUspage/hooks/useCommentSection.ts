import React from 'react';

export interface Comment {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
}

export interface CommentSectionProps {
  isMobile: boolean;
}

const comments: Comment[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    avatar: 'https://res.cloudinary.com/dnuicbze9/image/upload/v1766379463/hompage2_pfkexw.png',
    rating: 5,
    comment:
      '"Absolutely love the quality and attention to detail. Every product feels premium and worth every penny. The customer service is exceptional too!"',
  },
  {
    id: 2,
    name: 'Michael Chen',
    avatar: 'https://res.cloudinary.com/dnuicbze9/image/upload/v1766379463/hompage2_pfkexw.png',
    rating: 4,
    comment:
      '"Great selection of unique items that you cannot find elsewhere. Fast shipping and beautiful packaging. Will definitely order again."',
  },
];

export const useCommentSection = () => {
  const [currentCommentIndex, setCurrentCommentIndex] = React.useState(0);
  const currentComment = comments[currentCommentIndex];

  const handleNextComment = () => {
    setCurrentCommentIndex((prev) => (prev + 1) % comments.length);
  };

  const handlePrevComment = () => {
    setCurrentCommentIndex((prev) => (prev - 1 + comments.length) % comments.length);
  };

  return {
    comments,
    currentComment,
    currentCommentIndex,
    handleNextComment,
    handlePrevComment,
  };
};
