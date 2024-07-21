import { UserContainer } from "../user/container"

export const Review = ({userId, text}) => {
    return (
        <li key={userId}><UserContainer userId={userId}/>: {text}</li>
    )
}