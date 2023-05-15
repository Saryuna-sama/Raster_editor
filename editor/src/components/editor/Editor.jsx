import Panel from "./panel/Panel";
import Setting from "./setting/Setting";
import Canvas from './canvas/Canvas'
import Chat from './chat/Chat'


const Editor = () => {
    return (
        <div>
         <h1>Editor</h1>
            <Canvas/>
            <Chat/>
            <Panel/>
            <Setting/>
        </div>
        
    )
}

export default Editor;