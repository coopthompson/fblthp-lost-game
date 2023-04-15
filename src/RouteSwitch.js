import { db } from "./config/firebase"
import React, { useEffect, useState } from "react"
import { getDocs, collection, addDoc } from "firebase/firestore"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/navbar"
import App from "./App";
import Credits from "./Credits";

const RouteSwitch = () => {

  const [gameData, setGameData] = useState({
    explanation: true,
    named: false,
    scored: false,
    playingGame: false,
    displayQuestion: false,
    playerData:[],
    newPlayerName:"",
    newPlayerTime:0,
    leftToFind:[1,2,3,4,5],
    questionInfo:{
      idNumb:"",
      top:"0px",
      left:"0px"
    }
  })
  

  const { 
          named, 
          scored, 
          playingGame, 
          playerData, 
          newPlayerName,
          newPlayerTime,
          explanation,
          leftToFind,
          displayQuestion,
          questionInfo
        } = gameData

  console.log(leftToFind)

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
  },[scored])

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
        scored: true,
        named: false
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
        explanation: false,
        playingGame: true
      }
    })
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

    let x = e.clientX - container.getBoundingClientRect().left - (question.clientWidth / 2);
	  let y = e.clientY - container.getBoundingClientRect().top - (question.clientHeight / 2);

    setGameData((prevGameData) => {
      return {
        ...prevGameData,
        displayQuestion: true,
        questionInfo:{idNumb: idNumb, top: y, left: x}
      }
    })

    if (idNumb !== "" && idNumb !== false) {
      const newLeftToFind = leftToFind.filter((locationNumber) => {
        if (idNumb !== locationNumber) {
          return locationNumber;
        } else {
          return "";
        }
      })
      setGameData((prevGameData) => {
        return {
          ...prevGameData,
          leftToFind: newLeftToFind
        }
      })
    
    }
  }

    
    

  console.log(questionInfo)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar leftToFind={leftToFind.length} />
            <App 
              named={named}
              scored={scored}
              playingGame={playingGame}
              explanation={explanation}
              onSubmitNewPlayer={onSubmitNewPlayer}
              leaderBoardArray={leaderBoardArray}
              newPlayerEntry={newPlayerEntry}
              handleStart={handleStart}
              handleBoardClick={handleBoardClick}
              displayQuestion={displayQuestion}
              questionInfo={questionInfo}
              leftToFind={leftToFind}
            />
          </>
        }/>
        <Route path="/credits" element={
        <>
          <Navbar leftToFind={leftToFind.length}/>
          <Credits />
        </>
          }/>
      </Routes>
    </BrowserRouter>
  )
}
export default RouteSwitch