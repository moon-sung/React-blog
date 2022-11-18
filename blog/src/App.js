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
  let [modalTitle, setModalTitle] = useState(0);{/*모달 창에서의 title의 인덱스를 위한 state */}
  let [inputData,setInputData] = useState('');

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
            let copy = [...title]; //state동작원리때문
            copy[0] = "여자코트 추천";
            setTitle(copy);
          }}
        >
          {" "}
          수정버튼{" "}
        </button>
      </div>

      {title.map(function (a, i) {
        const date = new Date();

        const year = date.getFullYear();
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const day = ('0' + date.getDate()).slice(-2);
        const dateStr = year + '-' + month + '-' + day; //날짜
        return (
          <div className="list" key={i}>
            
            <h4
              onClick={() => {
                setModal(!modal);
                setModalTitle(i);
              }}
            >
              {a}
              {/**누르면 modalTitle을 i로 바꿈 */}
            </h4>
            
            <span
              onClick={(e) => {
                let copyGood = [...good]; //array자료형이니 복사해서 사용
                e.stopPropagation(); //상위 html로 퍼지는 이벤트버블링을 막고싶을때 사용
                copyGood[i] += 1;
                setGood(copyGood);
              }}
            >
              {" "}
              좋아요👍
            </span>
            {good[i]}
            <p>today : {dateStr + ' ' +date.toLocaleTimeString('ko-kr')}</p>

            {/**삭제버튼 */}
            <button onClick={()=>{ 
              let copy = [...title];
              copy.splice(i, 1); //i 인덱스에서 1개만큼삭제
              setTitle(copy);}}>삭제</button>
          </div>
        );
      })}

      <input
        onChange={(e) => {
          setInputData(e.target.value);
          //console.log(inputData);
        }}
      ></input>
      <button onClick={()=>{ 
        let copy = [...title]; //array, state동작원리때문에 복사해서 사용
        let goodCopy = [...good]; //좋아요 수 카운트를 위한 0 추가
        copy.unshift(inputData); //unshift는 배열제일 앞에 값을 추가하는 내장함수
        goodCopy.unshift(0);
        setTitle(copy);
        setGood(goodCopy);}}>글발행</button>

      {/*보통넘길때 같은이름으로 작명*/}
      {modal == true ? (
        <Modal
          modalTitle={modalTitle}
          setTitle={setTitle}
          color={"#eee"}
          title={title}
        ></Modal>
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{props.title[props.modalTitle]}</h4>{" "}
      {/*state를 props로 넘겨와서 사용 */}
      <p>날짜</p>
      <p>상세내용</p>
      {/*함수를 넘겨받아 사용 */}
      <button
        onClick={() => {
          props.setTitle(["여자코트추천", "가나다", "공부하기"]);
        }}
      >
        글수정
      </button>
    </div>
  );
}

export default App;
