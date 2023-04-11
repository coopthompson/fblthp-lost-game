import { db } from "./config/firebase"
import React, { useEffect, useState } from "react"
import { getDocs, collection, addDoc } from "firebase/firestore"
import "./styles/App.css"
import "./components/leaderboard"
import LeaderBoard from "./components/leaderboard"
import InputField from "./components/input"
import GameExplainer from "./components/explain"

function App(props) {
  const {
          explanation,
          named,
          newPlayerEntry,
          onSubmitNewPlayer, 
          leaderBoardArray, 
          scored
        } = props
  
  return (
    <div className="project--container">
      <GameExplainer explanation={explanation} />
      <InputField 
        named={named} 
        newPlayerEntry={newPlayerEntry} 
        onSubmitNewPlayer={onSubmitNewPlayer} 
      />
      <LeaderBoard leaderBoardArray={leaderBoardArray} scored={scored} />
    </div>
  );
}
 
export default App;






