import { Button, } from './Feedback.styled'

const FeedbackOptions = ({options, onLeaveFeedback}) => {

    return (
        options.map(option => (
            <Button key={option} onClick={() => onLeaveFeedback(option)}>
            {option}
        </Button>
        ))
        
    )

}

export default FeedbackOptions;