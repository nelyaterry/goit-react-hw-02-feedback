import { Title } from './Feedback.styled'

const Section = ({title, children}) => {
    return (
    <>
        { title && <Title>{title}</Title> }
        {children}
    </>        
    )
}

export default Section;