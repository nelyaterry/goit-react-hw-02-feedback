import {StatistcsList, StatistItem} from './Feedback.styled'

const Statistcs = ({ good, neutral, bad, total, positiveFeedback }) => {
    return (
    
    <StatistcsList>
        <StatistItem>Good: {good}</StatistItem>
        <StatistItem>Neutral: {neutral}</StatistItem>
        <StatistItem>Bad: {bad}</StatistItem>
        <StatistItem>Total: {total}</StatistItem>
        <StatistItem>Positive feedback: {positiveFeedback}%</StatistItem>
    </StatistcsList>
       
    )

}

export default Statistcs;