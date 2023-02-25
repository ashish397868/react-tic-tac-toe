import React, {  useState } from "react"
import Square from "./Square"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import gif from "./hacker.gif"
import ting from "./static.js/ting.mp3"
import win from "./static.js/win.mp3"
import Line from "./Line"

function Dev() {
  const [state, setState] = useState(Array(9).fill(null))
  const [isXturn, setIsXturn] = useState(true)
  const [audio, setAudio] = useState(new Audio(win))
//   const [handleClearTimeout,setHandleClearTimeout] = useState(null)
//   const handleClearTimeout= useRef(null);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    for (let logic of winnerLogic) {
      const [a, b, c] = logic
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a]
      }
    }
    return false
  }
  let isWinner = false
  isWinner = checkWinner()

  const handleClick = (index) => {
    if (state[index] !== null || isWinner) {
      return
    }
    const copyState = [...state]
    copyState[index] = isXturn ? "X" : "O"
    setState(copyState)
    setIsXturn(!isXturn)
    let tingAudio = new Audio(ting)
    tingAudio.play()
  }

  const handleReset = () => {
    // handleClearTimeout.current=null;
        // clearTimeout(handleClearTimeout.current)
      setState(Array(9).fill(null))
       audio.pause()
       document.getElementById("img").style.width = "0px"
       audio.currentTime = 0

  }

  const OnWinning = () => {
    if (isWinner) {
      audio.play()
      document.getElementById("img").style.width = "200px"
      toast.success(`${isWinner} Won the Game`, { autoClose: 1000, theme: "dark", toastId: "success1" })
      
      setTimeout(() => {
        audio.pause()
        document.getElementById("img").style.width = "0px"
        document.getElementById("line").style.transform = "translate(23vw,30vw) rotate(90deg)"
        audio.currentTime = 0
        // setState(Array(9).fill(null))
      }, 5000)
    }
  }

  OnWinning()

  const onDraw = () => {
    if (
      !isWinner &&
      state.every((e) => {
        return e !== null
      })
    ) {
      toast.error(`Game is Draw! Reset to Play Again`, { autoClose: 2000, theme: "dark", toastId: "success2" })
    }
  }
  onDraw()

  return (
    <>
      <div className="board-container m-7 flex flex-col justify-center items-center">
        <img src={gif} alt="" id="img" />
        <Line/>
        <div className="board-row flex items-center">
          <Square onClick={() => handleClick(0)} value={state[0]} className="square bt-0 bl-0" />
          <Square onClick={() => handleClick(1)} value={state[1]} className="square bt-0" />
          <Square onClick={() => handleClick(2)} value={state[2]} className="square br-0 bt-0" />
        </div>
        <div className="board-row flex items-center">
          <Square onClick={() => handleClick(3)} value={state[3]} className="square bl-0" />
          <Square onClick={() => handleClick(4)} value={state[4]} className="square" />
          <Square onClick={() => handleClick(5)} value={state[5]} className="square br-0" />
        </div>
        <div className="board-row flex  items-center">
          <Square onClick={() => handleClick(6)} value={state[6]} className="square bl-0 bb-0" />
          <Square onClick={() => handleClick(7)} value={state[7]} className="square bb-0" />
          <Square onClick={() => handleClick(8)} value={state[8]} className="square br-0 bb-0" />
        </div>
      </div>
      <div className="mt-9 flex justify-center items-center flex-col">
        <button type="button" className=" focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" onClick={handleReset}>
          Reset
        </button>
        <ToastContainer position="top-right" autoClose={1000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" />
      </div>
    </>
  )
}

export default Dev
