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
