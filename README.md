##　useState　練習

- 関数コンポーネントはstateを保持できる
- useState()の引数は初期値

```
import React,{ useState } from 'react'
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>your click {count} times.</p>
      <button onClick={() => setCount(count + 1)}>
        onClick
      </button>
    </div>
  )
}

export default App
```

const [count, setCount] = useState(0);
- count
状態を管理

- setCount
変更を加えるときに利用

```
<button onClick={() => setCount(count + 1)}>
```

onClickにて変更を加えるため
setcount(count + 1)で追加可能



##　useEffect練習
最初にレンダリングもしくは変更されたとき

```
import React,{ useState,useEffect } from 'react'
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // effect
    console.log(count)
  }, [count])

  return (
    <div>
      <p>your click {count} times.</p>
      <button onClick={() => setCount(count + 1)}>
        onClick
      </button>
    </div>
  )
}

export default App
```

第二引数がへ変わったときconsole.log（中身の処理が行われる）


##　写真検索機能
参考YouTube
https://www.youtube.com/watch?v=V2K7XXrUHvE

- 新規登録
https://unsplash.com/# react-image
