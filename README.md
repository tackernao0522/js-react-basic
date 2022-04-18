## 40 準備

- `src/App.css`を削除<br>

- `src/index.js`の中身を削除<br>

* `src/App.js`の中身を削除<br>

## 41 JSX 記法のルールを知る

- `src/App.js`を削除<br>

* `src/index.js`を編集<br>

```js:index.js
import ReactDom from 'react-dom'

const App = () => {
  return null
}

ReactDom.render(<App />, document.getElementById('root'))
```

- `src/index.js`を編集<br>

```js:index.js
import ReactDom from 'react-dom'

const App = () => {
  return (
    <>
      <h1>こんにちは!</h1>
      <p>お元気ですか？</p>
    </>
  )
}

ReactDom.render(<App />, document.getElementById('root'))
```

## 42 コンポーネントの使い方を知る

- `$ touch src/App.js`を実行<br>

* `src/App.js`を編集<br>

```js:App.js
const App = () => {
  return (
    <>
      <h1>こんにちは!</h1>
      <p>お元気ですか？</p>
    </>
  )
}

export default App
```

- `src/index.js`を編集<br>

```js:index.js
import ReactDom from 'react-dom'
import App from './App'

ReactDom.render(<App />, document.getElementById('root'))
```

- `$ mv src/App.js src/App.jsx`を実行<br>

* `src/index.js`を編集<br>

```js:index.js
import ReactDom from 'react-dom'
// 編集
import App from './App.jsx'

ReactDom.render(<App />, document.getElementById('root'))
```

## 44 React でイベントや style の扱い方を知る

- `src/App.jsx`を編集<br>

```jsx:App.jsx
const App = () => {
  const onClickButton = () => alert()
  const contentStyle = {
    color: 'blue',
    fontSize: '18px',
  }
  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは!</h1>
      <p style={contentStyle}>お元気ですか？</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  )
}

export default App
```

## 45 Props を知る

- `src/App.jsx`を編集<br>

```jsx:App.jsx
const App = () => {
  const onClickButton = () => alert()
  const contentStyle = {
    color: 'blue',
    fontSize: '18px',
  }
  const contentLadyStyle = {
    color: 'pink',
    fontSize: '18px',
  }
  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは!</h1>
      <p style={contentStyle}>お元気ですか？</p>
      <p style={contentLadyStyle}>元気です!</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  )
}

export default App
```

- `$ mkdir src/componetns && touch $_/ColorfulMessage.jsx`を実行<br>

* `src/components/ColorfulMessage.jsx`を編集<br>

```jsx:ColorfulMessage.jsx
const ColorfulMessage = () => {
  const contentStyle = {
    color: 'blue',
    fontSize: '18px',
  }
  return <p style={contentStyle}>お元気ですか？</p>
}

export default ColorfulMessage
```

- `src/App.jsx`を編集<br>

```jsx:App.jsx
import ColorfulMessage from './componetns/ColorfulMessage'

const App = () => {
  const onClickButton = () => alert()
  const contentLadyStyle = {
    color: 'pink',
    fontSize: '18px',
  }
  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは!</h1>
      // 編集
      <ColorfulMessage color="blue" message="お元気ですか？" />
      <p style={contentLadyStyle}>元気です!</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  )
}

export default App
```

- `src/components/ColorfulMessage.jsx`を編集<br>

```jsx:ColorfulMessage.jsx
const ColorfulMessage = (props) => {
  // console.log(props)
  const contentStyle = {
    color: props.color,
    fontSize: '18px',
  }
  return <p style={contentStyle}>{props.message}</p>
}

export default ColorfulMessage
```

- `src/App.jsx`を編集<br>

```jsx:App.jsx
import ColorfulMessage from './componetns/ColorfulMessage'

const App = () => {
  const onClickButton = () => alert()
  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは!</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です!</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  )
}

export default App
```

- `src/components/ColorfulMessage.jsx`を編集<br>

```jsx:ColorfulMessage.jsx
const ColorfulMessage = (props) => {
  // console.log(props)
  const contentStyle = {
    color: props.color,
    fontSize: '18px',
  }
  return <p style={contentStyle}>{props.children}</p>
}

export default ColorfulMessage
```

- `src/components/ColorfulMessage.jsx`を編集<br>

```jsx:ColorfulMessage.jsx
const ColorfulMessage = (props) => {
  // console.log(props)
  const { color, children } = props
  const contentStyle = {
    color,
    fontSize: '18px',
  }
  return <p style={contentStyle}>{children}</p>
}

export default ColorfulMessage
```

## 46 State を知る(useState)

- `src/App.jsx`を編集<br>

```jsx:App.jsx
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
      <p>{num}</p>
    </>
  )
}

export default App
```

## 47 再レンダリングと副作用を知る(useEffect)

- `src/App.jsx`を編集<br>

```jsx:App.jsx
import { useState } from 'react'
import ColorfulMessage from './componetns/ColorfulMessage'

const App = () => {
  console.log('最初')
  const [num, setNum] = useState(0)
  const [faceShowFlag, setFaceShowFlag] = useState(true)

  const onClickCountup = () => {
    setNum(num + 1)
  }

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag)
  }

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
```

- `src/components/ColorfulMessage.jsx`を編集<br>

```jsx:ColorfulMessage.jsx
const ColorfulMessage = (props) => {
  // 追記
  console.log('カラフル')
  // console.log(props)
  const { color, children } = props
  const contentStyle = {
    color,
    fontSize: '18px',
  }
  return <p style={contentStyle}>{children}</p>
}

export default ColorfulMessage
```

- `src/App.jsx`を編集<br>

```jsx:App.jsx
import { useState } from 'react'
import ColorfulMessage from './componetns/ColorfulMessage'

const App = () => {
  console.log('最初')
  const [num, setNum] = useState(0)
  const [faceShowFlag, setFaceShowFlag] = useState(true)

  const onClickCountup = () => {
    setNum(num + 1)
  }

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag)
  }

  // 追記
  if (num % 3 === 0) {
    faceShowFlag || setFaceShowFlag(true)
  } else {
    faceShowFlag && setFaceShowFlag(false)
  }

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
```

### num が 0 の時は顔文字が出ないようにするには

`src/App.jsx`を編集<br>

```jsx:App.jsx
import { useState } from 'react'
import ColorfulMessage from './componetns/ColorfulMessage'

const App = () => {
  console.log('最初')
  const [num, setNum] = useState(0)
  // falseに変更
  const [faceShowFlag, setFaceShowFlag] = useState(false)

  const onClickCountup = () => {
    setNum(num + 1)
  }

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag)
  }

  // 編集
  if (num > 0) {
    if (num % 3 === 0) {
      faceShowFlag || setFaceShowFlag(true)
    } else {
      faceShowFlag && setFaceShowFlag(false)
    }
  }

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
```

- `src/App.jsx`を編集<br>

```jsx:App.jsx
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

  // 編集
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
```

## 48 default export と export

- `src/components/ColorfulMessage.jsx`を編集<br>

```jsx:ColorfulMessage.jsx
export const ColorfulMessage = (props) => {
  console.log('カラフル')
  // console.log(props)
  const { color, children } = props
  const contentStyle = {
    color,
    fontSize: '18px',
  }
  return <p style={contentStyle}>{children}</p>
}
```

- `src/App.jsx`を編集<br>

```jsx:App.jsx
import { useState, useEffect } from 'react'
// 編集
import { ColorfulMessage } from './componetns/ColorfulMessage'

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
```
