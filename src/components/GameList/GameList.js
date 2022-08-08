import Game from "../Game/Game"
import "./GameList.css"

const GameList = ({games}) => {

    return (
        <div className="container">
          <div className="row">
           {games.map(game =><Game key={game.id}  game={game}/>)}
          </div>
        </div>
       
         
      
    )

}



export default GameList




