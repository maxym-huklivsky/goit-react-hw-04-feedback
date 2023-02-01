import { Reviews } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <Reviews>Good: {good}</Reviews>
      <Reviews>Neutral: {neutral}</Reviews>
      <Reviews>Bad: {bad}</Reviews>
      <Reviews>Total: {total}</Reviews>
      <Reviews>Positive feedback: {positivePercentage}%</Reviews>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
