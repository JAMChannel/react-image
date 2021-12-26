import React,{ useState,useEffect } from 'react'
import './App.css';

function App() {

  const [images, setImages] = useState([]);
  const [text, setText] = useState('');  // 検索
  const [query, setQuery] = useState('apple');

  useEffect(() => {
    console.log("Effect動く？？")
    fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${process.env.REACT_APP_CLIENT_ID}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setImages(data.results)
      })
  }, [query]) //queryが変更される場合は第二引数


  const onSubmit = (e) => {
    e.preventDefault();
    setQuery(text);
    setText('');
    console.log("onSubmitが呼ばれました。")
  } 
  return (
    <div className="App">
      <div className='main'>
        <form onSubmit={onSubmit}>
          <input 
            type="text"
            onChange={e => setText(e.target.value)}
            value={text}
          />
          <button type='submit'>
            search
          </button>
        </form>
        <div className='container'>
          {
            images.map(image => (
              <div key={image.id} className="card">
                <img src={image.urls.regular} className="card-img" alt=""/>
                <div className="card-content">
                  <h1 className="card-title">
                    {image.alt_description}
                  </h1>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App


// import React,{ useState,useEffect } from 'react'

// function App() {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     // effect
//     console.log(count)
//   }, [count])

//   return (
//     <div>
//       <p>your click {count} times.</p>
//       <button onClick={() => setCount(count + 1)}>
//         onClick
//       </button>
//     </div>
//   )
// }

// export default App

