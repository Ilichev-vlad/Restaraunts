import { Button } from "../button/component"
import { useUser } from "../user-context/hooks"

export const UserSection = () => {
    const {userName, isAuthorized, login, logout} = useUser();

    return isAuthorized 
    ? <div>
        <span>{userName}</span>
        <Button text='Выйти' onClickHandler={logout}></Button>
    </div>
    : <Button text='Войти' onClickHandler={() => login('Владислав')}></Button>
}