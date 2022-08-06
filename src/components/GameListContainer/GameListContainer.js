import { useEffect, useState } from "react"
import GameList from "../GameList/GameList"


const GameListContainer = () => {

    let [games, setGames]  = useState([])

 

    useEffect(() => {
      const options = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer XWS-8fq_iLTuPxxhHElTYS_hm_ltFPSQ1ZvK2OqQq3mEo4lREZo'
        },
   
      };

      fetch('https://api.pandascore.co/valorant/matches/upcoming?sort=begin_at&page=1&per_page=12', options)
      .then(response => response.json())
      .then(response => setGames(response))
      .catch(err => console.error(err))

    }, [])


    return (

        <div>
          <GameList games={games}/>
        </div>
        

    )


}


export default GameListContainer


