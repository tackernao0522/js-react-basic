import { useState, useEffect } from 'react'
import ColorfulMessage from './componetns/ColorfulMessage'

const App = () => {
  console.log('最初')
  const [num, setNum] = useState(0)
  const [faceShowFlag, setFaceShowFlag] = useState(false)

  const onClickCountup = () => {
    setNum(num + 1)
  }

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag)
  }

  useEffect(() => {
    console.log('useEffect!')
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true)
      } else {
        faceShowFlag && setFaceShowFlag(false)
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]) // numの値が変化したときだけレンダリングされるようになる

  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは!</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です!</ColorfulMessage>
      <button onClick={onClickCountup}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>( ´ ▽ ` )</p>}
    </>
  )
}

export default App
