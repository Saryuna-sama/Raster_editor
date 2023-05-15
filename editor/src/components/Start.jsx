import { useNavigate } from 'react-router-dom';

const Start = () => {
    const navigate = useNavigate()

    function createRoom() {
        navigate('create')
    }

     function enterRoom() {
            navigate('enter')
        }   
    

    return (
        <div class="box start-box">
            <button className="btn btn-start" onClick={createRoom} >Создать комнату</button>
            <button className="btn btn-start"  onClick={enterRoom}>Войти в комнату</button>
        </div>
    )
}

export default Start;