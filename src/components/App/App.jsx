import React, { useState } from 'react';
import { Section } from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statisticks';
import Notification from 'components/Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = Object.keys({ good, neutral, bad });

  const handlerButtonFeedback = evt => {
    const stateKey = evt.currentTarget.textContent;
    if (stateKey === 'good') {
      setGood(prevGood => prevGood + 1);
    } else if (stateKey === 'neutral') {
      setNeutral(prevNeutral => prevNeutral + 1);
    } else if (stateKey === 'bad') {
      setBad(prevBad => prevBad + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / countTotalFeedback());
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handlerButtonFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
}
