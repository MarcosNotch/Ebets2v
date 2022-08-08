import { useState } from "react";


export const getGames = (gameId) =>{

    


    if(typeof gameId === 'undefined'){
        gameId = 'valorant'
    }
   
    const options = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer XWS-8fq_iLTuPxxhHElTYS_hm_ltFPSQ1ZvK2OqQq3mEo4lREZo'
        },
      
      };
      fetch(`https://api.pandascore.co/${gameId}/matches/upcoming?sort=begin_at&page=1&per_page=12`, options)
      .then(response => response.json())
      .then(response => response)
      .catch(err => console.error(err))
      


}



