import { db } from "./config/firebase"
import React, { useEffect, useState } from "react"
import { getDocs, collection } from "firebase/firestore"


function App() {
  const [playerData, setPlayerData] = useState([])
  const [componentHiders, setComponentHiders] = useState({
    named: true,
    scored: false
  })

  const { named, scored } = componentHiders

  const playerCollectionRef = collection(db, "players")
  useEffect(() => {
    const getPlayerList = async () => {
      try {
      const data = await getDocs(playerCollectionRef)
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(), id: doc.id
      }))
      filteredData.sort((a,b) => (a.ranking > b.ranking) ? 1 : ((b.ranking > a.ranking) ? -1 : 0))
      setPlayerData(filteredData)
      } catch (err) {
        console.error(err);
      }
    }

    getPlayerList();
  },[])

  const scoreBoard = playerData.map((player) => {
    return (
      <div key={playerData.indexOf(player)}>
        <p>{player.ranking}</p>
        <p>{player.name}</p>
        <p>{player.time}</p>
      </div>
    )
  })
  
  return (
    <div>
      {named && <div>{scoreBoard}</div>}
    </div>
  );
}
 
export default App;




