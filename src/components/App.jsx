import { useReducer } from 'react';
import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Notification } from './Notification';
import reducer from './reducer';

export const App = () => {
  const [feedback, dispatch] = useReducer(reducer, {
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const feedbackOp = Object.keys(feedback);
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedbackPer =
    totalFeedback === 0
      ? 0
      : Number(((feedback.good / totalFeedback) * 100).toFixed());

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={feedbackOp} onLeaveFeedback={dispatch} />
      </Section>
      <Section title="Statistics">
        {totalFeedback === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={totalFeedback}
            positivePercentage={positiveFeedbackPer}
          />
        )}
      </Section>
    </>
  );
};
