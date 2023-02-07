import { ReviewBtnContainer, ReviewBtn } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';
import React from 'react';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ReviewBtnContainer>
      {options.map(option => (
        <ReviewBtn
          key={option}
          onClick={() => onLeaveFeedback({ type: option, payload: 1 })}
        >
          {option}
        </ReviewBtn>
      ))}
    </ReviewBtnContainer>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
