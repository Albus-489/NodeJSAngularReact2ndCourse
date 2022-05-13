import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // завдання 1-3
      value: 'Пункт',
      list: ['Коля', 'Василь', 'Петро', 'Іван', 'Дмитро'],
      //================

      // завдання 4
      value2: 'Name',
      list2: ['Коля', 'Василь', 'Петро', 'Іван', 'Дмитро'],
      //================

      // завдання 5-6
      value3: 'Почніть вводити текст нижче',
      list3: ['Коля', 'Василь', 'Петро', 'Іван', 'Дмитро'],
      //================

      // завдання 7
      list4: [
        { name: 'Балгруф', age: 42 },
        { name: 'Ідгрод', age: 33 },
        { name: 'Ульфрік', age: 68 },
        { name: 'Вігнар', age: 31 }
      ],
      value4: '',
      //================

      // завдання 7
      list5: [
        { name: 'Балгруф', age: 42 },
        { name: 'Ідгрод', age: 33 },
        { name: 'Ульфрік', age: 68 },
        { name: 'Вігнар', age: 31 }
      ],
      value5: '',
      //================

      // завдання 8
      p1: <p>...</p>,
      p2: <p>...</p>,
      p3: <p>...</p>,
      //================

      // завдання 9
      value_9: '',
      txt_area: <textarea></textarea>,
      //================

      // завдання 10
      leftValue: 0,
      rightValue: 0,
      sumValue: <p>Сума: </p>,
      //================

      // завдання 11
      pibValue: <p>ПІБ: </p>,
      pValue: '',
      iValue: '',
      bValue: '',
      //================

      // завдання 12-13
      aon_12: ['Петро', 'Дмитро', 'Антон', 'Максим'],
      name_12: 'Name',
      //================

      // завдання 14
      hrefs: [
        {href: '1.html', text: 'посилання 1'},
		    {href: '2.html', text: 'посилання 2'},
		    {href: '3.html', text: 'посилання 3'},
      ],

      href14: '',
      item14: '',
      //===============

      //завдання 15
      aog_15: ['Elden Ring', 'Dark Souls', 'Bloodborne', 'TESO', 'Braid', 'Portal 2'],
      gp_15: "...", //game paragraph
      gameNum: 1,
      //============

      //завдання 16
      aog_16: [
        {name: 'Dark Souls 1', year: 2011},
        {name: 'Dark Souls 2', year: 2014},
        {name: 'Elden Ring', year: 2022},
        {name: 'Beyond: Two souls', year: 2013},
        {name: 'Heavy Rain', year: 2010}
      ],

      new_name: 'Name',
      new_year: 'Year'
      //============
    };
  }

  //завдання 1-3

  onAddItem = () => {
    this.setState
      (
        state => {
          const list = state.list.concat(state.value);
          return { list };
        }
      );
  };

  onRemoveItem = last => 
  {
    this.setState
      (
        state => 
        {
          const list = state.list.filter((item, j) => last != j);
          return {list};
        }
      );
  };
  //=================

  //завдання 4

  onChangeValue = event => {
    this.setState({ value2: event.target.value });
  };

  onAddItem_2 = () => {
    this.setState
      (
        state => {
          const list2 = state.list2.concat(state.value2);
          return {list2};
        }
      );
  };

  onRemoveItem_2 = last => 
  {
    this.setState
      (
        state => 
        {
          const list2 = state.list2.filter((item, j) => last != j);
          return {list2};
        }
      );
  };
  //=================

  //завдання 5-6

  onChangeValue3 = event => {
    this.setState({ value3: event.target.value });
  };
  //=================

  //завдання 7
  onChangeValue4 = event => {
    var inp = event.target.value;
    var arr = this.state.list4;

    let a = arr.find(p => p.name === inp)

    if(a != undefined)
      this.setState({value4: 'Вік: ' + a.age})
    else
      this.setState({value4: ''})
  };
  //=================

  //завдання 8
  onChangeValue5 = event => {
    var inp = event.target.value;
    var stringArray = inp.split(/(\s+)/);

    stringArray = stringArray.filter(function(str)
    {
      return /\S/.test(str);
    });

    if(stringArray.length == 1){
      this.setState({p1: <p>{stringArray[0]}</p>})
      this.setState({p2: <p>...</p>})
      this.setState({p3: <p>...</p>})
    }
    else if (stringArray.length == 2){
      this.setState({p2: <p>{stringArray[1]}</p>})
      this.setState({p3: <p>...</p>})
    }
    else if (stringArray.length == 0){
      this.setState({p1: <p>...</p>})
    }
    else{
      this.setState({p3: <p>{stringArray[2]}</p>})
    }
  };
  
  //============

   //завдання 9
   onChangeValue6 = event => {
    this.setState({value_9: event.target.value})
  };
   addText = () => {
    this.setState({txt_area: <textarea value={this.state.value_9}></textarea>})
   }
  //============

  //завдання 10
  onChangeFrst = event => {
    this.setState({leftValue: event.target.value})
  };

  onChangeSecond = event => {
    this.setState({rightValue: event.target.value})
  };

   showSum = () => {
    this.setState({sumValue: <p>Сума: {parseInt(this.state.leftValue) + parseInt(this.state.rightValue)}</p>})
   }
  //============

  //завдання 11
  pChange = event => {
    this.setState({pValue: event.target.value})
  };

  iChange = event => {
    this.setState({iValue: event.target.value})
  };

  bChange = event => {
    this.setState({bValue: event.target.value})
  };

   showPIB = () => {
    this.setState({pibValue: <p>ПІБ: {this.state.pValue + ' ' + this.state.iValue + ' ' + this.state.bValue}</p>})
   }
  //============

    //завдання 12-13
    onChange12 = event => {
      this.setState({name_12: event.target.value})
    };
    
  
    addName_12 = () => {

      const af = this.state.aon_12.concat(this.state.name_12);
      this.setState
        (
          { aon_12: af }
        );
    };
    
     onRemove12 = last => {

      const lr = this.state.aon_12.filter((item, j) => last != j);
      this.setState
        ({
          aon_12: lr
        });
    };
    //============

  //завдання 14
  hrefValue14 = event => {
    this.setState({href14: event.target.value})
  }

  itemValue14 = event => {
    this.setState({item14: event.target.value})
  }

  addHref = () => {
    let hrf = this.state.href14
    let txt = this.state.item14
    const ahref = this.state.hrefs
    ahref.push({'href':hrf, 'text':txt})
    this.setState({hrefs: ahref})
  }
  //============

   //завдання 15
   gameNameEvent = event => {
    this.setState({gameNum: event.target.value - 1})
  }

    showGame = () =>{
      const inpName = this.state.aog_15.filter((item, j) => this.state.gameNum == j);
      this.setState({gp_15: inpName})
    }
  //============

  //завдання 16
  addName_16 = event => {
    this.setState({new_name: event.target.value})
  }
  addYear_16 = event =>{
    this.setState({new_year: event.target.value})
  }

  insertInfo_16 = () => {
    let gm = this.state.new_name
    let yr = this.state.new_year
    const games = this.state.aog_16
    games.push({'name':gm, 'year':yr})
    this.setState({aog_16: games})
  }
  //============

  render() {
    return (

      <div className='FatherDIV'>
        <div>
          Task 1-3
          <hr></hr>
          <ul>
            {this.state.list.map((item) => (
              <li>{item}</li>
            ))}
          </ul>

          <button
            type="button"
            onClick={this.onAddItem}
          >
            +
          </button>
          
          <button
                type="button"
                onClick={() => this.onRemoveItem(this.state.list.length - 1)}
              >
                -
          </button>
          <hr></hr>
        </div>

        <div>
          Task 4
          <hr></hr>
          <ul>
            {this.state.list2.map((item, ind) => (
              <li>
                {item}
                <button onClick={() => this.onRemoveItem_2(ind)}> - </button>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={this.onAddItem_2}
          >
            +
          </button>
          <hr></hr>
        </div>

        <div>
          Task 5-6
          <hr></hr>
          <textarea value={this.state.value3.toUpperCase()}></textarea>
          <br></br>
          <input type="text" onChange={this.onChangeValue3}></input>
          <hr></hr>
        </div>

        <div>
          Task 7
          <hr></hr>
          <textarea value={this.state.value4}></textarea>
          <br></br>
          <input type="text" onChange={this.onChangeValue4}></input>
          <hr></hr>
        </div>

        <div>
          Task 8
          <hr></hr>
          {this.state.p1}
          {this.state.p2}
          {this.state.p3}
          <input type="text" onChange={this.onChangeValue5}></input>
          <hr></hr>
        </div>

        <div>
          Task 9
          <hr></hr>
          {this.state.txt_area}
          <br></br>
          <input type="text" onChange={this.onChangeValue6}></input>
          <br></br>
          <button onClick={this.addText}>+</button>
          <hr></hr>
        </div>

        <div>
          Task 10
          <hr></hr>
          <input type="text" onChange={this.onChangeFrst}></input>
          <input type="text" onChange={this.onChangeSecond}></input>
          <br></br>
          <button onClick={this.showSum}>+</button>
          {this.state.sumValue}
          <hr></hr>
        </div>

        <div>
          Task 11
          <hr></hr>
          <input type="text" onChange={this.pChange}></input>
          <br></br>
          <input type="text" onChange={this.iChange}></input>
          <br></br>
          <input type="text" onChange={this.bChange}></input>
          <br></br>
          <button onClick={this.showPIB}>+</button>
          {this.state.pibValue}
          <hr></hr>
        </div>

        <div>
          Task 12-13
          <hr></hr>
          <ul>
            {this.state.aon_12.map((item, ind) => (
              <li>
                {item}
                <button onClick={() => this.onRemove12(ind)}> - </button>
              </li>
            ))}
          </ul>
          
          <input onChange={this.onChange12}></input>
          <button
            type="button"
            onClick={this.addName_12}
          >
            +
          </button>
          <hr></hr>
        </div>

        <div>
          Task 14
          <hr></hr>
          <ul>
            {this.state.hrefs.map((item) => {return <li><a href={item.href}>{item.text} </a></li>})}
          </ul>
          
          <input onChange={this.hrefValue14}></input>
          <br></br>
          <input onChange={this.itemValue14}></input>
          <br></br>
          <button
            type="button"
            onClick={this.addHref}
          >
            +
          </button>
          <hr></hr>
        </div>

        <div>
          Task 15
          <hr></hr>
          <ul>
            {this.state.aog_15.map((item) => (
              <li>
                {item}
              </li>
            ))}
          </ul>
          
          <input onChange={this.gameNameEvent}></input>
          <br></br>
          <br></br>
          {this.state.gp_15}
          <hr className='hrShort'></hr>
          <br></br>
          <button
            type="button"
            onClick={this.showGame}
          >
            Find
          </button>
          <hr></hr>
        </div>

        <div>
          Task 16
          <hr></hr>
          <table>
          	{this.state.aog_16.map((item) => (
              <tr>
                <td>{item.name}</td> <td>{item.year}</td>
              </tr>
            ))}
          </table>
          
          <br></br>
          <input onChange={this.addName_16}></input>
          <br></br>
          <input onChange={this.addYear_16}></input>
          <br></br>
          <button
            type="button"
            onClick={this.insertInfo_16}
          >
            ADD
          </button>
          <hr></hr>
        </div>
      </div>
    );
  }
}

export default App;