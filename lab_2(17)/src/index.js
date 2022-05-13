import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      num: 0,
      show: true
    };
  }

  fNext() {
    this.setState({ num: this.state.num += 1 })
    console.log(this.state.show);
  }

  fPrevious() {
    this.setState({ num: this.state.num -= 1 })
  }

  taskNum(ln) {
    if (this.state.num < 0) {
      this.setState({ num: ln - 1 })
      return this.state.num
    }
    else if (this.state.num > ln - 1) {
      this.setState({ num: 0 })
      return this.state.num
    }
    else
      return this.state.num

  }

  wNext(ln) {
    if (this.state.num == ln - 1)
      return 1
    else
      return this.state.num + 2
  }

  wPrev(ln) {
    if (this.state.num == 0)
      return ln
    else
      return this.state.num
  }
  
  getText(){
    return <p>Завдання 10. Текст_10</p>
  }

  getNumber1(){
    return 1;
  }

  getNumber2(){
    return 2;
  }
  render() {
    // array of functions
    let aof = [
      T1(), T2(), T3(), T4(), T5(),
      T6(), T7(), T8(this), T9(), T10(this),
      T11(this)
    ]

    //Функції до завдань
    function T1() {
      return (<div className='T'>Завдання 1. Текст_1</div>)
    }

    function T2() {
      const txt = <div className='T'>Завдання 2. Текст_2</div>
      return (txt)
    }

    function T3() {
      const txt = <div className='T'>Завдання 3. Текст_3</div>
      return (txt)
    }

    function T4() {
      const txt =
        <div className='T'>
          Завдання 4.
          <p>Текст_4</p>
          <p>!!!</p>
          <p>Текст_4</p>
        </div>

      return (txt)
    }

    function T5() {

      const attr = "block";
      const txt =
        <div id={attr}>
          Завдання 5. Текст_5
        </div>

      return (txt)
    }

    function T6() {
      const attr = "block";
      const txt =
        <div className={attr}>
          Завдання 6. Текст_6
        </div>

      return (txt)
    }

    function T7() {
      const txt =
        <div style={
          {
            color: "green",
            border: "3px solid green",
            borderRadius: "30px",
            maxWidth: "200px",
            margin: "0 auto",
            textAlign: "center",
          }
        }>
          Завдання 7.<br /> Текст_7. Зміна div.
        </div>

      return (txt)
    }

    function T8(props) {

      let txt1 =
        <div className='T'>
          Завдання 8. Текст --True--
          <br />
          <button onClick={() => {props.setState({show: false})}}>
            SWITCH
          </button>
        </div>

      let txt2 =
        <div className='T'>
          Завдання 8. Текст --False--
          <br />
          <button onClick={() => {props.setState({show: true})}}>
            SWITCH
          </button>
        </div>

      return (props.state.show ? txt1 : txt2)
    }

    function T9() {

      let arr = ['a', 'b', 'c', 'd', 'e']
      let liArr = []

      //створюю <li>{arr[i]}</li>... в liArr[]
      for (var i = 0; i < arr.length; i++) {
        liArr.push(<li>{arr[i]}</li>)
      }

      let ulil =
        <div className='T'>
          <ul>
            {liArr}
          </ul>
        </div>

      return (ulil)
    }

    function T10(props) {
      let txt = 
      <div className='T'>
        {props.getText()}
      </div>
      return (txt)
    }

    function T11(props) {
      let txt = 
      <div className='T'>
        Завдання 11. Результат: {props.getNumber1() + props.getNumber2()}
      </div>
      return (txt)
    }
    //======================

    return (
      <div className='fatherDiv'>
        {aof[this.taskNum(aof.length)]}

        <div className='btnDiv'>
          <button id='lBtn' onClick={this.fPrevious.bind(this)}>
            Завдання &lt;==№{this.wPrev(aof.length)}
          </button>

          <button id='rBtn' onClick={this.fNext.bind(this)}>
            Завдання №{this.wNext(aof.length)}==&gt;
          </button>
        </div>
      </div>
    );
  }
}
//===============

// Render method
//===============
ReactDOM.render
  (
    //txt
    <Main />,
    document.getElementById("root")
  );