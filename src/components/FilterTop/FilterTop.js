import "./FilterTop.css"
import {Link} from "react-router-dom"

const FilterTop = () =>{

    return (
        <div>
            <div className="filter-top-container">
                <button><Link to="/game/valorant">Valorant</Link></button>
                <button><Link to="/game/lol">LOL</Link></button>
                <button><Link to="/game/csgo">CSGO</Link></button>
                <button><Link to="/game/fifa">FIFA</Link></button>
            </div>
        </div>
    )
}


export default FilterTop;






