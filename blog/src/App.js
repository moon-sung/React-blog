import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let post = "맛집투어";
  let [title, setTitle] = useState([
    "남자 코트 추천",
    "강남 고기 맛집",
    "리액트 공부",
  ]);
  let [good, setGood] = useState([0, 0, 0]);
  
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4 className={post} style={{ color: "yellow", fontSize: "16px" }}>
          BLOG
        </h4>
      </div>

      <div>
        <button
          className="change"
          onClick={() => {
            let sortTitle = [...title.sort()];
            setTitle(sortTitle);
          }}
        >
          글제목 정렬
        </button>
      </div>

      {/* <div className="list">
        <h4>
          {title[0]}{" "}
          <span
            onClick={() => {
              setGood(good + 1);
            }}
          >
            좋아요👍
          </span>{" "}
          {good}{" "}
        </h4>
        <p>today : 2022.11.10</p>
      </div>

      <div className="list">
        <h4>{title[1]}</h4>
        <p>today : 2022.11.10</p>
      </div>

      <div className="list">
        <h4
          onClick={() => {
            setModal(!modal);
          }}
        >
          {title[2]}
        </h4>
        <p>today : 2022.11.10</p>
      </div> */}

      {title.map(function (e, i) {
        return (
          <div className="list" key={i}>
            <h4 onClick={() => { setModal(!modal); }}>{e}
            </h4>
            <span onClick={() => { 
              let copyGood = [...good]; //array자료형이니 복사해서 사용
              copyGood[i] += 1;
              setGood(copyGood); }}> 좋아요👍</span>{good[i]}
            <p>today : 2022.11.10</p>
          </div>
        );
      })}

      {modal == true ? <Modal></Modal> : null}
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
