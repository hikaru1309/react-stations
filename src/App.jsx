// DO NOT DELETE
import { useState } from 'react'
import './App.css'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [ dogUrl, setDogUrl ] = useState("https://images.dog.ceo/breeds/pug/n02110958_14768.jpg");


  return (
    <div>
      <div>
        <header>
          <h1>Dogアプリ</h1>
        </header>
        <p>犬の画像を表示するサイトです</p>
        <img src={dogUrl} alt="" />
      </div>
      <button>更新</button>
    </div>
  )
}
