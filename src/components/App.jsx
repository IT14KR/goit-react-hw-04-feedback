import { useState } from 'react';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Container } from './App.styled';

export const App = () => {
  const [options, setPoints] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = option => {
    setPoints(prevState => ({ ...prevState, [option]: prevState[option] + 1 }));
  };

  const countTotalFeedback = () => {
    return Object.values(options).reduce((acc, value) => acc + value, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = options;
    const total = countTotalFeedback();
    return Math.round((good / total) * 100) || 0;
  };

  const { good, neutral, bad } = options;
  const totalFeedback = countTotalFeedback();
  const totalPercentage = countPositiveFeedbackPercentage();

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={onLeaveFeedback}
          options={Object.keys(options)}
        />
      </Section>
      <Section title="Statistics">
        {totalFeedback !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={totalPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
};
