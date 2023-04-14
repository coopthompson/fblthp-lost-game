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
    playerData:[],
    newPlayerName:"",
    newPlayerTime:0
  })
  

  const { 
          named, 
          scored, 
          playingGame, 
          playerData, 
          newPlayerName,
          newPlayerTime,
          explanation
        } = gameData

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

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <App 
              named={named}
              scored={scored}
              playingGame={playingGame}
              explanation={explanation}
              onSubmitNewPlayer={onSubmitNewPlayer}
              leaderBoardArray={leaderBoardArray}
              newPlayerEntry={newPlayerEntry}
              handleStart={handleStart}
            />
          </>
        }/>
        <Route path="/credits" element={
        <>
          <Navbar />
          <Credits />
        </>
          }/>
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch