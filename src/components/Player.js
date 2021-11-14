import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import axios from "axios"
import star from "./image/star.png"
import { Container, Row, Col } from 'react-bootstrap'


const Player = () => {
    const[loading, setLoading] = useState(true)
    const[players, setPlayers] = useState([])
    const { id } = useParams();

    
    useEffect(() => (
        axios(`https://mock-foooty-api.herokuapp.com/teams/${id}/players`)
            .then(res => setPlayers(res.data.players))
            .finally(()=> setLoading(false))
    ),[id])

    return (
        <div>
            <h1>Players</h1>
            {loading && <div>Loading...</div>}
            {players.map(player => (
                <Container className="player-info">
                    
                    <img src={player.image}
                        className={`avatar ${player.role.name}`}
                        alt={player.firstName}
                       />
                     
                    <img src={star} className="fav-btn" />
                
                    <div className="player-area">
                        <span>{player.birthArea.iconcode}</span>
                        <span>{player.passportArea.iconcode}</span>
                    </div>    
                        
                    <p style={{width:"30%"}}>{player.firstName + " " + player.lastName}</p>
                        
                    <p style={{width:"20%"}}>{new Date().getFullYear()- (player.birthDate?.slice(0, 4))}</p>
                       
                    <p style={{width:"15%"}}>{player.foot}</p>

                </Container>
            ))}
        </div>
    )
}

export default Player;
