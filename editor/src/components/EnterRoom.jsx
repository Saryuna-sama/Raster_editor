import { useNavigate } from 'react-router-dom';

const EnterRoom = () => {
    const navigate = useNavigate()

    function back() {
        navigate('/')
    }
    return (
        <div className="box enter-box"> 
            <input type="text" placeholder="Имя пользователя" />
            <input type="text" placeholder="Код комнаты" />
            
            <div className="buttons">
                <button className="btn btn-enter-room btn-enter-room-enter">Войти </button>
                <button className="btn btn-enter-room" onClick={back}>Назад </button>
            </div>
            
        </div>
    )
}

export default EnterRoom;