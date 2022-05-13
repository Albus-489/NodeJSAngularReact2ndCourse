import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      num: 0,
      show: true,
      btnClick: true,
      nm: "Саша",
      ag: "25",
      //array of names
      aon: ['Коля', 'Василь', 'Петро', 'Іван', 'Дмитро'],
      value: 'Пункт',
      pon: [],
      hrefs: [
        {href: '1.html', text: 'посилання 1'},
        {href: '2.html', text: 'посилання 2'},
        {href: '3.html', text: 'посилання 3'},
      ]
    };
  }

  fNext() {
    this.setState({ num: this.state.num += 1 })
    this.setState({nm:"Саша", ag:"25"})
  }

  onAddItem = () => {
    this.setState(state => {
      const list = state.list.concat(state.value);

      return {
        list,
        value: '',
      };
    });
  };

  rempoint = () => {
    var array = [this.state.pon];
    array.pop();
    this.setState({pon: array});
  }

  fPrevious() {
    this.setState({ num: this.state.num -= 1 })
    this.setState({nm:"Саша", ag:"25"})
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

  showMsg () {
    alert("Hello")
  }

  showName = ()  => {
    alert("Ім'я в стейті: " + this.state.name)
  }

  render() {
    // array of functions
    let aof = [
      T1(this), T2(this), T3(this), T4(this), T5(this),
      T6(this), T7(this), T8(this), T9(this), T10(this),
      T11(this)
    ]

    //Функції до завдань
    function T1(props) {
      let arr = props.state.aon
      let liArr = []

      liArr = arr.map((item) => {return <li>{item}</li>})

      let ulil =
        <div className='T'>
          <ul>
            {liArr}
          </ul>
        </div>

      return (ulil)
    }

    function T2(props) {
      let liArr = []

      liArr = props.state.pon.map((item) => {return <li>{item}</li>})

      let ulil =
        <div className='T'>
          <ul>
            {liArr}
          </ul>
          <button onClick={props.onAddItem}>
            Додати пункт
          </button>
        </div>
      return (ulil)
    }

    function T3(props) {
      const txt =
        <button className='btn' onClick={() => alert("Ім'я в стейті: " + props.state.nm)}>
          Показати ім'я в стейті
        </button>
      return (txt)
    }

    function T4(props) {

      const txt = 
        <div>
          <button className='btn' onClick={() => props.setState({nm: "Коля", ag: "30"})}>
            Змінити ім'я та вік
          </button>
          <div className='T'>
            Ім'я: {props.state.nm}, вік: {props.state.ag}
          </div>
        </div>
        

    return (txt)

    }

    function T5(props) {

      const attr = "block";
      const txt1 =
        <div id={attr}>
          <p>
            Привіт, {props.state.nm}
          </p>
          <button onClick={() => props.setState({show:false})}>
            SWITCH
          </button>
        </div>

      const txt2 =
      <div id={attr}>
        <p>
          Пока, {props.state.nm}
        </p>
        <button onClick={() => props.setState({show:true})}>
            SWITCH
        </button>
      </div>

      return (props.state.show ? txt1 : txt2)
    }

    function T6(props) {

      const e1 = "";
      const e2 = <p>Ім'я: {props.state.nm}, вік: {props.state.ag}</p>;
      const txt =
      <div className='T'>
        {props.state.btnClick ? e1 : e2}
        <button onClick={() => props.state.btnClick ? props.setState({btnClick: false}) : props.setState({btnClick: true}) }>
          Натисни на мене
        </button>
      </div>

      return (txt)
    }

    function T7(props) {

      const e1 = "";
      const e2 = <p>Ім'я: {props.state.nm}, вік: {props.state.ag}</p>;
      const txt =
      <div className='T'>
        {props.state.btnClick ? e1 : e2}
        <button onClick={() => props.state.btnClick ? props.setState({btnClick: false}) : props.setState({btnClick: true}) }>
          Натисни на мене
        </button>
      </div>

      return (txt)
    }

    function T8(props) {

      const e1 = "";
      const e2 = <p>Ім'я: {props.state.nm}, вік: {props.state.ag}</p>;

      const b1 = "Показати"
      const b2 = "Приховати"

      const txt =
      <div className='T'>
        {props.state.btnClick ? e1 : e2}
        <button className='btn' onClick={() => props.state.btnClick ? props.setState({btnClick: false}) : props.setState({btnClick: true}) }>
          {props.state.btnClick ? b1: b2}
        </button>
      </div>

      return (txt)
    }

    function T9(props) {

      let arr = props.state.aon
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
      let arr = props.state.aon
      let liArr = []

      liArr = arr.map((item, ind) => {return <li>{item} - {ind + 1}</li>})

      let ulil =
        <div className='T'>
          <ul>
            {liArr}
          </ul>
        </div>

      return (ulil)
    }

    function T11(props) {
      let arr = props.state.hrefs
      let liArr = []


      let ulil =
        <div className='T'>
          <ul>
            {arr.map((item) => {return <li><a href={item.href}>{item.text} </a></li>})}
          </ul>
        </div>

      return (ulil)
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