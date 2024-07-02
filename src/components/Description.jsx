import '../App.css'
import { useState } from 'react';

const Description = () => {
  const [ dogUrl, setDogUrl ] = useState("https://images.dog.ceo/breeds/pug/n02110958_14768.jpg");
  const ImageChange = () => {
    console.log("更新ボタンが押されました")
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((json) => setDogUrl(json.message))
  }

  return (
    <div className='main'>
      <p>犬の画像を表示するサイトです。</p>
      <div className='image-container'>
        <img src={dogUrl} alt="" />
        <button onClick={ImageChange}>更新</button>
      </div>
    </div>
  )
}

export default Description