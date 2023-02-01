import { ReviewBtnContainer, ReviewBtn } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ReviewBtnContainer>
      {options.map(option => (
        <ReviewBtn key={option} onClick={() => onLeaveFeedback(option)}>
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
