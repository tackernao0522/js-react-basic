import { useState } from 'react'
import ColorfulMessage from './componetns/ColorfulMessage'

const App = () => {
  const onClickCountup = () => {
    setNum(num + 1)
  }
  const [num, setNum] = useState(0)
  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは!</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です!</ColorfulMessage>
      <button onClick={onClickCountup}>カウントアップ</button>
      <p>{ num }</p>
    </>
  )
}

export default App
