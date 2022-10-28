import React from 'react'

export default function Buttons({ setChoice, choice, disabled, timer, winner }) {


  const pickRight = () => {
    setChoice('right')
  }

  const pickLeft = () => {
    setChoice('left')
  }

  return (
    <>
      <button className={choice === 'right' ? 'picked' : ''} disabled={disabled} onClick={() => {
        pickRight()
      }}>
        RIGHT
      </button>


      <button className={choice === 'left' ? 'picked' : ''} disabled={disabled} onClick={() => {
        pickLeft()
      }}>
        LEFT
      </button>

      {timer === 0 && winner === 'left' ? <p>Left Wins!</p> : timer === 0 && winner === 'right' ? <p>Right Wins!</p> : null}
      {timer === 0 && choice === winner ? <p>You win</p> : timer === 0 ? <p>You lose</p> : null}
    </>
  )
}
