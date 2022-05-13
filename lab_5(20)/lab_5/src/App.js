import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state={

      // T1
      txt1: <p></p>,
      //=-=-=-=-=-=-=-=-

      // T2
      txt2: false,
      //=-=-=-=-=-=-=-=-

      // T3
      txt3: false,
      text3: <p></p>,
      //=-=-=-=-=-=-=-=-

      // T4
      text4: <p>Місто: Харків</p>,
      arr4: [
        'Харків',
        'Сокиряни',
        'Львів',
        'Вільнюс',
        'Токіо',
        'Сеул',
        'Торонто',
        'Осло',
        'Лісабон'],
      //=-=-=-=-=-=-=-=-

      // T5
      text5: <p>Game: <span className='s5'>...</span></p>,
      //=-=-=-=-=-=-=-=-

      // T6
      text6: '',
      arr6: [],
      bool6: false,
      //=-=-=-=-=-=-=-=-

      // T7
      text7: 'white',
      arr7: [
        'yellow', 'black', 'blue', 'red', 'lime', 'orange', 'purple', 'silver'
      ],
      //=-=-=-=-=-=-=-=-

       // T8
       bool8: true,
       //=-=-=-=-=-=-=-=-

       // T9
       visible1: 'none',
       visible2: 'none',
       visible3: 'none',
       selected9: '',
       //=-=-=-=-=-=-=-=-

       // T10
       text10: '',
       arr10: [
        ],
       //=-=-=-=-=-=-=-=-

       // T11
       bool11: false,
       //=-=-=-=-=-=-=-=-

       // T12
       days:   [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 12, 23, 24, 25, 26, 27, 28, 29, 30, 31],
       months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
       years:  [2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010],

       day: new Date().getDate(),
       month: new Date().getMonth() + 1,
       year: new Date().getFullYear(), 

       dow: "...",
       //=-=-=-=-=-=-=-=-
    }
  }

  onClickT6 = () =>
  {
    let a = this.state.arr6
    a.push(this.state.text6)
    this.setState({arr6: a})
  }

  visibility = e =>{
    if(e.target.value == 1){
      this.setState({visible1:   true})
      this.setState({visible2: 'none'})
      this.setState({visible3: 'none'})
    }
    else if (e.target.value == 2){
      this.setState({visible1: 'none'})
      this.setState({visible2:   true})
      this.setState({visible3: 'none'})
    }else{
      this.setState({visible1: 'none'})
      this.setState({visible2: 'none'})
      this.setState({visible3:   true})
    }
      return 'none'
  }

  onClickT10 = () =>
  {
    let b = this.state.arr10
    b.push(this.state.text10)
    this.setState({arr10: b})
  }

  getWeekDay = () => {
    let days = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    let d = new Date(this.state.year, this.state.month - 1, this.state.day)
    this.setState({dow: days[d.getDay()]})
  }

  render(){
    return(
      <div className='FatherDiv'>
        
        {/* T1 */}
        <div>Task 1<hr></hr>
        {this.state.txt1}<br></br><textarea onChange={event => this.setState({txt1: event.target.value})}></textarea>
        </div><hr></hr>

        {/* T2 */}
        <div>Task 2<hr></hr>
        {String(this.state.txt2)}<br></br><input type='checkbox' defaultChecked={this.state.txt2} onChange={() => this.setState({txt2: !this.state.txt2})} />
        </div><hr></hr>

        {/* T3 */}
        <div>Task 3<hr></hr>
        {this.state.txt3 ? <p>ВІТАЮ!</p> : <p></p>}<br></br><input type='checkbox' defaultChecked={this.state.txt3} onChange={() => this.setState({txt3: !this.state.txt3})} />
        </div><hr></hr>

        {/* T4 */}
        <div>Task 4<hr></hr>
            <select name="language" size="4" onChange={e => this.setState({text4: <p>Місто: {e.target.value}</p>})}>
              {this.state.arr4.map((text, index) => { return <option key={index}>{text}</option>})}
            </select>
            {this.state.text4}
        </div><hr></hr>

        {/* T5 */}
        <div>Task 5<hr></hr>
        {this.state.text5}
            <hr className='hrShort'></hr>
        <div className='d5' onChange={e => this.setState({text5: <p>Game: <span className='s5'>{e.target.value}</span></p>})}>
          <table>
            <tr>
              <td className='d5'>Elden Ring</td>
              <td><input type="radio" value="Elden Ring" name="game" /></td>
            </tr>
            <tr>
              <td className='d5'>Dark Souls III</td>
              <td className='d5'><input type="radio" value="Dark Souls III" name="game" /></td>
            </tr>
            <tr>
              <td className='d5'>Sekiro: Shadow Die Twice</td>
              <td><input type="radio" value="Sekiro: Shadow Die Twice" name="game" /></td>
            </tr>
            <tr>
              <td className='d5'>Heavy Rain</td>
              <td><input type="radio" value="Heavy Rain" name="game" /></td>
            </tr>
          </table>
        </div>
        </div><hr></hr>

        {/* T6 */}
        <div>Task 6<hr></hr>
          <ul>
          {this.state.bool6 ? this.state.arr6.map((item) => (<li>{item}</li>)) : <p></p>}
          </ul>
          <textarea onChange={e => this.setState({ text6: e.target.value })}></textarea><br />
          <button onClick={this.onClickT6}>В масив</button><br/>
          <button onClick={() => this.setState({bool6: !this.state.bool6})}>+/-</button><br/>
        </div><hr></hr>

        {/* T7 */}
        <div>Task 7<hr></hr>
            <select name="language" size="4" onChange={e => this.setState({text7: e.target.value})}>
              {this.state.arr7.map((text, index) => { return <option key={index}>{text}</option>})}
            </select>
            {<p style={{color: "" + this.state.text7}}>текст</p>}
        </div><hr></hr>

        {/* T8 */}
        <div>Task 8<hr></hr>
            <select name="language" size="2" onChange={() => this.setState({bool8: !this.state.bool8})}>
              <option selected='selected'>Позначено</option>
              <option>Не позначено</option>
            </select><br/>
            <input type='checkbox' checked={this.state.bool8 ? true : false}/>
        </div><hr></hr>

        {/* T9 */}
        <div>Task 9<hr></hr>
            <select name="language" size="3" onChange={this.visibility}>
              <option value={1}> Варіант 1 </option>
              <option value={2}> Варіант 2</option>
              <option value={3}> Варіант 3</option>
            </select><br/>
            <p style={{display: this.state.visible1}}>Перший абзац</p>
            <p style={{display: this.state.visible2}}>Другий абзац</p>
            <p style={{display: this.state.visible3}}>Третій абзац</p>
        </div><hr></hr>

        {/* T10 */}
        <div>Task 10<hr></hr>
            <select name="language" size="3">
              {this.state.arr10.map((text, index) => { return <option key={index}>{text}</option>})}
            </select><br/>
            <input onChange={e => this.setState({text10: e.target.value})}></input><br/><button onClick={this.onClickT10}>Додати текст</button>
        </div><hr></hr>

        {/* T11 */}
        <div>Task 11<hr></hr>
            <input disabled={this.state.bool11}></input><br/>
            <input type='checkbox' onChange={(e) => this.setState({bool11: e.target.checked})}></input>
        </div><hr></hr>

        {/* T12 */}
        <div>Task 12<hr></hr>
          <p>День: {this.state.dow}</p>
          <select defaultValue={this.state.day} onChange={e => this.setState({ day: e.target.value })}>{this.state.days.map((text, index) => { return <option key={index}>{text}</option> })}</select>
          <select defaultValue={this.state.month} onChange={e => this.setState({ month: e.target.value})}>{this.state.months.map((text, index) => { return <option key={index}>{text}</option> })}</select>
          <select defaultValue={this.state.year} onChange={e => this.setState({ year: e.target.value })}>{this.state.years.map((text, index) => { return <option key={index}>{text}</option> })}</select>
          <br />
          <br />
          <button onClick={this.getWeekDay}>Вивести день</button>
        </div><hr></hr>
        
        
      </div>
    );
  }
}

export default App;