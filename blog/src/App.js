import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {



  let post = '맛집투어';
  let [title, setTitle] = useState('남자 코트 추천');
  let [title2, setTitle2] = useState('부산 고기 맛집');
  let [title3, setTitle3] = useState('리액트 공부');

  //let [total, setTotal] = useState(['첫번째', '두번째', '세번째']);

  return (
    <div className="App">
      <div className="black-nav">
        <h4 className={post} style={{color: 'yellow', fontSize: '16px'}}>BLOG</h4>
      </div>

      <div className='list'>
        <h4>{ title }</h4>
        <p>today : 2022.11.10</p>
      </div>

      <div className='list'>
        <h4>{ title2 }</h4>
        <p>today : 2022.11.10</p>
      </div>

      <div className='list'>
        <h4>{ title3 }</h4>
        <p>today : 2022.11.10</p>
      </div>

      <h4>{post}</h4>
    </div>
  );
}

export default App;
