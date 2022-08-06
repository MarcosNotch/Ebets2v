
import Col from 'react-bootstrap/Col';
import "./Game.css";

const Game = ({game}) => {

    let   opponentName1= game.opponents[0].opponent.name != null ? game.opponents[0].opponent.name : "" ;
    let   opponentLogo1= game.opponents[0].opponent.image_url != null ? game.opponents[0].opponent.image_url : "";
    let   opponentName2= game.opponents[1].opponent.name != null ? game.opponents[1].opponent.name : "";
    let   opponentLogo2= game.opponents[1].opponent.image_url != null ? game.opponents[1].opponent.image_url: "";
    let   videogame = game.videogame.name != null ? game.videogame.name : "";


    return (
        <Col lg={4} md={6} sm={12}>
        <div className="cajafuera">
                <div className="header-proximoPartidoContainer">
                    <div className="header-proximoPartidoContainer-competencia">
                        <img id="imagenLogoCompetencia5" className="imagenLogoCompetencia" alt=""/>
                        <p id="nombre-competencia5" className="nombre-competencia">{videogame}</p>
                    </div>
               </div>
                <div className="main-container-caja" id="primerCaja">    
                    <div className="izquierda">
                        <div className="interior-izquierda">
                            <div className="imagenContenedor">
                                <p id="nombreEquipo5" className="nombreEquipo">{opponentName1}</p>
                                <img src={opponentLogo1} className="imagenLogoJuego" alt="Logo Kru Esports"/>
                            </div>
                            <div className="contenedor-versus">
                                <img src="images/vs2.png" alt="Versus"/>
                            </div>
                            <div className="imagenContenedor">
                                <p id="nombreEquipo5b" className="nombreEquipo">{opponentName2}</p>
                                <img src={opponentLogo2} className="imagenLogoJuego" alt="Logo Koi Esports"/>
                            </div>
                        </div>
                        <div className="horarios">
                            <div className="BanderaHora">
                                <img src="images/Banderas/banderaArgentina.jpg" alt="Bandera Argentina"/>
                                <p id="horaPartidoArg5"></p>
                            </div>
                            <div className="BanderaHora">
                                <img src="images/Banderas/BanderaEspana.jpg" alt="Bandera España"/>
                                <p id="horaPartidoEsp5"></p>
                            </div>
                            <div className="BanderaHora">
                                <img src="images/Banderas/usa.png" alt="Bandera USA"/>
                                <p id="horaPartidoUsa5"></p>
    
                            </div>
                        </div>
                    </div>
                    <div className="derecha">
                        <div className="compentencia">
                        
                            <p id="estadoPartido5" className="nombre-competencia"></p>
                        </div>
                        <div>
                            <input  id="botonApostar5" type="button" className="botonApostar" value="Apostar"/>
                        </div>
                        <div>
                            <input type="button" className="botonVivo" value="Ver en Twitch"/>
                        </div>
                    </div>
                </div>
            </div>
            </Col>
    )

}

export default Game