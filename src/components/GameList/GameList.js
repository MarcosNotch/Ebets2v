import Game from "../Game/Game"
import "./GameList.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const GameList = ({games}) => {

    return (
        <Container>
          <Row>
           {games.map(game =><Game key={game.id}  game={game}/>)}
          </Row>
        </Container>
       
         
      
    )

}



export default GameList




