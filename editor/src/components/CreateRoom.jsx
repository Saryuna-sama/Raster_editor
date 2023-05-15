import { useNavigate } from 'react-router-dom';

const CreateRoom = () => {
    const navigate = useNavigate()

    function back() {
        navigate('/')
    }
    return (
        <div class="box create-box">
            <input type="text" placeholder="Имя пользователя" />
            <select name="select" placeholder="Права доступа" >
                <option selected value="s1"> Редактор </option>
                <option selected value="s2"> Читатель </option>
            </select> 
            <div className="buttons">
                <button className="btn btn-create-room btn-create-room-create">Создать </button>
                <button className="btn btn-create-room" onClick={back}>Назад </button> 
            </div>
        </div>
    ) 
}

export default CreateRoom;