import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { ChangeEvent, useEffect, useState } from 'react'
import TodoTask from './components/TodoTask'


const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  const [text , settext] = useState<string>("");
  const [todolist , settodolist] = useState<string[]>([]);
  

  const handleChang = (event : ChangeEvent<HTMLInputElement>): void => {
    settext(event.target.value); 
  };

  const appList = (): void =>{
    if (text.length > 0){
      settodolist([...todolist, text])
      settext("");
    }
  }

  const completeTask = (textNameToDelete : string): void => {
    settodolist(todolist.filter((text) =>{
      return text != textNameToDelete
    }
    ))
  }

  function MyComponent() {
    const [className, setClassName] = useState<string>("done");
  
    useEffect(() => {
      let myEliment = document.getElementById("idContent") as HTMLElement
      myEliment?.classList.remove("content")
      myEliment?.classList.toggle(className)
    }, [className]);
  
    return (
      <div id="idContent" className={className}>
    </div>
    );
  }

 

  return (
    <>
    
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <div>
            <div>
                <h1 className="text"><b>To Do List</b></h1>
            </div>
        </div>
        
        <div>

            <div className="input">
                <input type={"text"} 
                id="userInput" 
                name='text'
                value={text}
                placeholder="Text...." 
                onChange={handleChang}
                />            

                <button id="enter"
                name='button'
                onClick={appList}
                ><b>ADD</b>
                </button>

            </div>
        </div>

        <div>
            <div className="list">
                {todolist.map((text : string) => {
                  return <TodoTask text={text} completeTask={completeTask} chackList={function (): void {
                    throw new Error('Function not implemented.')
                  } }/>
                })}

            </div>
        </div>
    </div>
    </>
  )
}
