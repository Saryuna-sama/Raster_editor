import './App.css';

import { Routes, Route } from 'react-router-dom';

import Start from './components/Start'
import CreateRoom from './components/CreateRoom'
import Editor from './components/editor/Editor'
import EnterRoom from './components/EnterRoom'


function App() {
  return (
      <div className='App'>
        <Routes>
          <Route path="/" element={<Start />}/>
          <Route path="/create" element={<CreateRoom />}/>
          <Route path="/enter" element={<EnterRoom />}/>
          <Route path="/editor" element={<Editor />}/>
        </Routes>
      </div>
   )
}

export default App;


// 1) ещё две html по папкам, чтобы был переход +
// 2) аналогичные enterRoom функции в этих html +

// 3) создать папку editor в components +
// 4) Структура Editor: +
  // общий box +
  // холст +
  // чат +
  // панель инструментов + 
  // панель сверху +


// один компонент - настройка инструментов
// внутри этого компонента - четыре условия
// нажимаем на панель инструментов -> передаём в параметре, какой компонент нам нужен
// и отображаем его 

/////////

// 1) перенеСТИ ВСЕ компоненты в editor +
// 2) увидеть отображение компонентов в /editor = прописать в каждом из них соотвествущее слово+
// 3) каждый отдельный компонент стилизовать под фигму
// 4) перенести в Editor.css 


// git config --global user.name "Saryuna-sama"
// git config --global user.email saryuna.chimitova.123@gmail.com