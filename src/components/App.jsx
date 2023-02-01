import { useState } from 'react';
import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Notification } from './Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(pS => pS + 1);
        break;

      case 'neutral':
        setNeutral(pS => pS + 1);
        break;

      case 'bad':
        setBad(pS => pS + 1);
        break;

      default:
        break;
    }
  };

  const feedbackOp = ['good', 'neutral', 'bad'];
  const totalFeedback = good + neutral + bad;
  const positiveFeedbackPer =
    totalFeedback === 0 ? 0 : Number(((good / totalFeedback) * 100).toFixed());

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={feedbackOp} onLeaveFeedback={leaveFeedback} />
      </Section>
      <Section title="Statistics">
        {totalFeedback === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedbackPer}
          />
        )}
      </Section>
    </>
  );
};
