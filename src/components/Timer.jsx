import React, { useEffect, useRef, useState } from 'react'

export default function Timer({ setChoice, setDisabled, timer, setTimer, setWinner, truePlayers, setTruePlayers }) {

  const [running, setRunning] = useState(false)
  console.log(running)


  const id = useRef(null);

  const startTimer = () => {
    setRunning(prevCheck => !prevCheck)
  }

  const pickSide = () => {
    if (Math.random() > 0.5) {
      return "left";
    } else {
      return "right";
    }
  };



  const resetTimer = () => {
    for (let i = 0; i < truePlayers.length; i++) { truePlayers[i].choice = pickSide() }
    const tempArr = [...truePlayers]
    setTruePlayers(tempArr)
    setTimer(3)
    setRunning(true)
    setWinner(false)
    setChoice('none')
    setDisabled(false)
  }

  const clear = () => {
    window.clearInterval(id.current)
  }

  useEffect(() => {
    if (Math.random() > 0.5) {
      setWinner('left');
    } else {
      setWinner('right')
    }
  }, [running, setWinner]);

  useEffect(() => {
    if (running) {
      id.current = window.setInterval(() => {
        setTimer((time) => time - 1)
      }, 1000)
      return () => clear();
    }
  }, [running, setTimer])

  useEffect(() => {
    if (timer === 0) {
      setDisabled(true)
      setRunning(false)
      clear()
    }

  }, [timer, setDisabled])


  return (
    <>
      <div>Time left : {timer} </div>
      <button onClick={() => {
        startTimer()
      }}>
        Start Timer
      </button>
      <button onClick={() => {
        resetTimer()
      }}>
        Reset Timer
      </button>

    </>
  );
}