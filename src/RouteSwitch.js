import { db } from "./config/firebase"
import React, { useEffect, useState } from "react"
import { getDocs, collection, addDoc } from "firebase/firestore"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/navbar"
import App from "./App";
import Credits from "./Credits";

const RouteSwitch = () => {

  const [gameData, setGameData] = useState({
    explanationDisplayed: true,
    inputDisplayed: false,
    leaderBoardDisplayed: false,
    playingGame: false,
    displayQuestion: true,
    isRunning: false,
    playerData:[],
    newPlayerName:"",
    newPlayerTime:0,
    leftToFind:[1,2,3,4,5],
    questionInfo:{
      idNumb:"",
    },
    questionStyling: {
      top: 0,
      left: 0,
    }
  })
  

  const { 
          inputDisplayed, 
          leaderBoardDisplayed, 
          playingGame, 
          playerData, 
          newPlayerName,
          newPlayerTime,
          explanationDisplayed,
          leftToFind,
          displayQuestion,
          questionInfo,
          questionStyling,
          isRunning
        } = gameData

  console.log(newPlayerTime)

  const playerCollectionRef = collection(db, "players")

  const getPlayerList = async () => {
    try {
    const data = await getDocs(playerCollectionRef)
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(), id: doc.id
    }))
    filteredData.sort((a,b) => (a.time > b.time) ? 1 : ((b.time > a.time) ? -1 : 0))
    const finishedData = filteredData.map((prevData) => {
      return {
        ...prevData,
        ranking: filteredData.indexOf(prevData) + 1
      }
    })
    setGameData((prevGameData) => {
      return {
        ...prevGameData,
        playerData:finishedData
      }
    })
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getPlayerList();
  },[leaderBoardDisplayed])

  const onSubmitNewPlayer = async() => {
    try {
    await addDoc(playerCollectionRef, {
      name: newPlayerName,
      time: newPlayerTime
    })
    } catch (err) {
      console.error(err)
    }
    setGameData((prevGameData) => {
      return {
        ...prevGameData,
        leaderBoardDisplayed: true,
        inputDisplayed: false
      }
    })
  }

  const leaderBoardArray = playerData.map((player) => {
    return (
      <div className="ranking" key={playerData.indexOf(player)}>
        <p>{player.ranking}</p>
        <p>{player.name}</p>
        <p>{player.time}</p>
      </div>
    )
  })

  const startAndStop = () => {
    setGameData((prevGameData) => {
      return {
        ...prevGameData,
        isRunning:!isRunning
      }
    });
  };

  const newPlayerEntry = (e) => {

    const { name, value } = e.target

    setGameData((prevGameData) => {
      return {
        ...prevGameData,
        [name]: /^\d+$/.test(value) ? Number(value) : value
      }
    })
  }

  const handleStart = () => {
    setGameData((prevGameData) => {
      return {
        ...prevGameData,
        explanationDisplayed: false,
        playingGame: true
      }
    })
    startAndStop();
  }

  const handleBoardClick = (e) => {
    
    const container = document.getElementById('game--container')
    const question = document.getElementById('question--div')

    const { id } = e.target

    let idNumb = ""

    if (id === "") {
      idNumb = false;
    } else {
      idNumb = Number(id.replace(/[^0-9]/g,""));
    }

    let x = 70 + e.clientX - container.getBoundingClientRect().left - (question.clientWidth / 2);
	  let y = 40 + e.clientY - container.getBoundingClientRect().top - (question.clientHeight / 2);

    setGameData((prevGameData) => {
      return {
        ...prevGameData,
        displayQuestion: true,
        questionInfo:{idNumb: idNumb},
        questionStyling:{
          top: y,
          left: x,
          backgroundColor: "black",
          color: "white"
        }
      }
    })
  }

  const handleNo = (e) => {
    e.stopPropagation();
    setGameData((prevGameData) => {
      return {
        ...prevGameData,
        questionStyling:{}
        }
      })
    }

  const handleYes = (e) => {
    e.stopPropagation();
    setGameData((prevGameData) => {
      return {
        ...prevGameData,
        questionStyling:{}
        }
      }
    )
    if (questionInfo.idNumb === false) {
      console.log("That isn't Fblthp!")
    } else if (typeof(questionInfo.idNumb) === "number") {
      console.log("That is Fblthp!")
      const newLeftToFind = leftToFind.filter((locationNumber) => {
        if (questionInfo.idNumb !== locationNumber) {
          return locationNumber;
        } else {
          return "";
        }
      })
      const stopWatchTime = document.getElementById("stopwatch-time").textContent
      newLeftToFind.length === 0 ? startAndStop() : console.log('Keep it up')
      setGameData((prevGameData) => {
        return {
          ...prevGameData,
          playingGame: newLeftToFind.length === 0 ? false : true,
          inputDisplayed: newLeftToFind.length === 0 ? true : false,
          leftToFind: newLeftToFind,
          newPlayerTime: stopWatchTime
        }
      })
      
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar 
              newPlayerTime={newPlayerTime}
              leftToFind={leftToFind.length}  
              isRunning={isRunning} 
              startAndStop={startAndStop}
            />
            <App 
              inputDisplayed={inputDisplayed}
              leaderBoardDisplayed={leaderBoardDisplayed}
              playingGame={playingGame}
              explanationDisplayed={explanationDisplayed}
              onSubmitNewPlayer={onSubmitNewPlayer}
              leaderBoardArray={leaderBoardArray}
              newPlayerEntry={newPlayerEntry}
              handleStart={handleStart}
              handleBoardClick={handleBoardClick}
              displayQuestion={displayQuestion}
              questionInfo={questionInfo}
              leftToFind={leftToFind}
              handleNo={handleNo}
              handleYes={handleYes}
              questionStyling={questionStyling}
            />
          </>
        }/>
        <Route path="/credits" element={
        <>
          <Navbar 
            newPlayerTime={newPlayerTime}
            leftToFind={leftToFind.length}
            startAndStop={startAndStop}
            isRunning={isRunning}
          />
          <Credits />
        </>
          }/>
      </Routes>
    </BrowserRouter>
  )
}
export default RouteSwitch