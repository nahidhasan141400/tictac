import React from 'react'
import party from "party-js";
import './style/ach.scss';
import {ImCross ,ImRadioUnchecked} from "react-icons/im";
import UseWin from '../hooks/UseWin';
import intbot from '../hooks/gameint';



function Ach() {
  let darr = [false,false,false,false,false,false,false,false,false];
  let msg = [
    'ohh nice move',
    'goodPlay',
    'you are nice player',
    'you are genius !',
    'You made me cry 😢',
    'What a game you showed 😌',
    "You made me a complete fool"
  ];
  let botmsg =[
    "Yeahh..! This is my boom trun 😇",
    'Lose me if you can 😃',
    'This is my best move 😘',
    "I'm not stupid either 😘"
  ]
  // eslint-disable-next-line no-unused-vars
  let [icon , setIcon] = React.useState([false,false,false,false,false,false,false,false,false]);
  let [text , setText] = React.useState('Hi lets play tic tac toe')
  let v = React.useRef();
  let c = React.useRef();
  let gg = React.useRef();

  let effect = React.useCallback((gg)=>{
    console.dir(gg.current)
    party.sparkles(gg.current, {
      count: party.variation.range(20, 40),
      speed: party.variation.range(20, 300),
    });
  },[])
  
  let buttonClick = React.useCallback((number)=>{
    
    // eslint-disable-next-line no-self-assign
    c.current ? c.current = c.current : c.current = 'p';
    if(c.current === 'bot'){
      setText("It's my trun 😆")
      return;
    }

    if(icon[number] === false){
      
    // eslint-disable-next-line no-self-assign
      v.current ? v.current = v.current: v.current = 'o';
      let arr2 = [...icon];
      arr2[number] = 'o';

      let wincon = UseWin(arr2 , 'o');


    
      if(wincon){
        effect(gg);
        setText('Wow you won this round ❤️');
        setIcon(darr);
      }else{
        let ind = Math.round(Math.random() * (msg.length - 1))
        setText(msg[ind]);
        if (!arr2.includes(false)){
          setText("macth draw.Let's play agein ?");
          setIcon(darr);
          return;
        }else{
          c.current = 'bot';
          setTimeout(() => {
            bot(arr2);
          }, 1000);
          setIcon(arr2);
        }
      }
    
     

    
    
      v.current === 'o'? v.current = 'x' : v.current = 'o';

    }else{
      setText('Thid box trun over 😊')
    }
    
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[icon, darr, msg]);

let bot = (arr)=>{
  
   let settarget = intbot(arr)
    let nn = [...arr];
    nn[settarget] = 'x';
    
    let isxwin = UseWin(nn , 'x');
    
    if(isxwin){
      setText('opss you loss the game ');
      setIcon(darr);
      c.current = 'p'
    }else{
      let ind2 = Math.round(Math.random() * (botmsg.length - 1))
        setText(botmsg[ind2]);
      c.current = 'p'
      setIcon(nn)
    }
    // console.log(settarget);
}

  return (
          <section className='Ach'>
            <div className="achivment">
              <div className="gameS">
                <h1>{text}</h1>
                <p>you are such good player!</p>
              </div>
            </div>
            <div className="game">
              <div className="game-frem">
                  <span className='one-game' onClick={()=> buttonClick(0) }>
                    {icon[0]? icon[0] === 'x'? <ImCross /> : <ImRadioUnchecked /> : null }
                  </span>
                  <span className='tow-game' onClick={()=> buttonClick(1) }>
                    {icon[1]? icon[1] === 'x'? <ImCross /> : <ImRadioUnchecked /> : null }
                  </span>
                  <span className='three-game' onClick={()=> buttonClick(2) }>
                    {icon[2]? icon[2] === 'x'? <ImCross /> : <ImRadioUnchecked /> : null }
                  </span>
                  <span className='four-game' onClick={()=> buttonClick(3) }>
                    {icon[3]? icon[3] === 'x'? <ImCross /> : <ImRadioUnchecked /> : null }
                  </span>
                  <span ref={gg} className='five-game' onClick={()=> buttonClick(4) }>
                    {icon[4]? icon[4] === 'x'? <ImCross /> : <ImRadioUnchecked /> : null }
                  </span>
                  <span className='six-game' onClick={()=> buttonClick(5) }>
                    {icon[5]? icon[5] === 'x'? <ImCross /> : <ImRadioUnchecked /> : null }
                  </span>

                  <span className='seven-game' onClick={()=> buttonClick(6) }>
                    {icon[6]?  icon[6] === 'x'? <ImCross /> : <ImRadioUnchecked /> : null }
                  </span>
                  <span className='eight-game' onClick={()=> buttonClick(7) }>
                    {icon[7]?  icon[7] === 'x'? <ImCross /> : <ImRadioUnchecked /> : null }
                  </span>
                  <span className='nine-game' onClick={()=> buttonClick(8) }>
                    {icon[8]?  icon[8] === 'x'? <ImCross /> : <ImRadioUnchecked /> : null }
                  </span>
              </div>
            </div>
          </section>
  )
}

export default Ach