import './App.css';
import React from 'react';
import { createRef } from 'react';

import { useState } from 'react';


function App() {

  const [st1, setSt1] = useState('');
  let myRef = React.createRef();

  const [st2, setSt2] = useState(0);
  const [st3, setSt3] = useState('');
  let input_3 = '';
  const [st4, setSt4] = useState(0);
  const [st5, setSt5] = useState('');
  const [st6, setSt6] = useState('');
  const [st7, setSt7] = useState('');
  const [st8, setSt8] = useState('');
  const [st9, setSt9] = useState('');
  let ref10 = React.createRef();
  const [st10, setSt10] = useState('');

  function task1() {
    let a = myRef.current.value;
    setSt1(a)
    myRef.current.value = '';
  }

  function task2() {
    console.log('Hi')
    let count_st2 = st2
    count_st2++
    setSt2(count_st2)
    console.log(st2)


  }
  function task3(event) {
    input_3 += event.target.value
    setSt3(input_3);
  }
  let count = 0;

  function task4() {
    let count = st4;
    count++;
    setSt4(count)
  }
  function task5(event) {
    if (event.target.checked) {
      setSt5('value checkbox')
    }
    else {
      setSt5(0)
    }
  }
  function task6(event) {
    setSt6(event.target.value)
  }
  function task7() {
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    let colour = `${'rgb('}${getRandomInt(255)}${','}${getRandomInt(255)}${','}${getRandomInt(255)}${')'}`;
    setSt7(colour);
  }
  function task8(event) {
    let c = st8
    isNaN(event.key) ? c+=0 : c+=1;
    setSt8(c)
  }
  function task9(event) {
    setSt9(event.target.value)
  }
  function task10() {
     setSt10(ref10.current.value)
  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <input type="text" ref={myRef} />
        <button className="task-1" onClick={task1}>Push</button>
        <div>{st1}</div>
      </section>

      <section>
        <h2>Task 2</h2>
        <div className="task-2" onMouseEnter={task2} ></div>
        <div>{st2}</div>
      </section>

      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={task3} value={st3} />
        <div>{st3}</div>
      </section>
      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4}>Count</button>
        <div>{st4}</div>
      </section>
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" currentValue="55" onChange={task5} />
        <div>{st5}</div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6" onChange={task6}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div>{st6}</div>
      </section>
      <section>
        <h2>Task 7</h2>
        <div className="block-7" style={{ background: st7 }}></div>
        <button className="task-7" onClick={task7}>Color</button>
        <div>{st7}</div>
      </section>
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8" onKeyPress={task8}></input>
        <div>{st8}</div>
      </section>
       <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9" onInput={task9}></input>
        <div>{st9}</div>
      </section> 
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10" ref={ref10}></input>
        <button className="task-10" onClick={task10}>Push</button>
        <div>{st10}</div>
      </section>
    </>
  );
}

export default App;
