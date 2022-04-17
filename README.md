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
