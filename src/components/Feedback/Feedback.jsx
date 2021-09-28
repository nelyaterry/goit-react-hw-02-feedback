import { Component } from 'react';
import Section from './Section'
import Statistcs from './Statistics';
import FeedbackOptions from './FeedbackOptions'
import {Box} from './Feedback.styled'

class Feedback extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    onLeaveFeedback = (option) => {
        this.setState((prevState) => ({
           [option] : prevState[option] + 1,
        }))
    }

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state
        return good + neutral + bad;
    }

    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        return Math.round((good / this.countTotalFeedback()) * 100);
    }
    

    render() {
        const { good, neutral, bad } = this.state;
        return (
            <Box>
                <Section title='Please leave feedback'></Section>
                    <FeedbackOptions  options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback}/>
                <Section />
                {this.countTotalFeedback() > 0
                    ? (<Section title='Statistics'>
                        <Statistcs good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positiveFeedback={this.countPositiveFeedbackPercentage()} />
                    </Section>)
                    : <Section title='No feedback given' />}
            </Box>
        )
    }
};

export default Feedback;