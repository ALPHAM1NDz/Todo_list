import React from 'react'
import { text } from 'stream/consumers'

interface Props {
    text : string;
    completeTask(textNameToDelete:string): void;
    MyComponent():void;
}


const TodoTask = ({text , completeTask,MyComponent} : Props) => {
    return (
        <div className='text'>
        <div className='content' id='idContent'>

            <input className="check" 
            onClick={MyComponent}
            type="checkbox" 
            />
             
            <span className='listtext'>
                {text}
             </span>

            <button 
            className='deletebutton'
            onClick={()=>{
                completeTask(text)
            }}
             >X</button>

        </div>
        </div>
    )

}; 

export default TodoTask
