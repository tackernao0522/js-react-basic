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
