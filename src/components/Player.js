import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import axios from "axios";
import star from "../image/star.svg";
import starFill from "../image/star-fill.svg";
import { Container, Accordion } from "react-bootstrap";
import Stats from "./Stats";
import { MainContext } from "../context/Context";

const Player = () => {
  const [loading, setLoading] = useState(true);
  const [players, setPlayers] = useState([]);
  const { id } = useParams();
  const { likes, toggleLikes } = useContext(MainContext);

  useEffect(() => {
    axios(`https://mock-foooty-api.herokuapp.com/teams/${id}/players`)
      .then((res) => setPlayers(res.data.players))
      .finally(() => setLoading(false));
  }, []);

  console.log(likes);
  return (
    <div>
      <h1>Players</h1>
      {loading && <div>Loading...</div>}
      {players.map((player, index) => (
        <Accordion key={index} >
          <Accordion.Item eventKey={index} >
            <Accordion.Header >
              <Container className="player-info">
                <img
                  src={player.image}
                  className={`avatar ${player.role.name}`}
                  alt={player.firstName}
                />

                <img
                  src={
                    likes.find((like) => like.id === player.id)
                      ? starFill
                      : star
                  }
                  className="fav-btn"
                  onClick={() => toggleLikes(player)}
                />

                <div className="player-area">
                  <span>
                    <img
                      src={`https://flagcdn.com/16x12/${player.birthArea.iconcode}.png`}
                      width="16"
                      height="12"
                      alt={player.birthArea.iconcode}
                    />
                  </span>
                  <span>
                    <img
                      src={`https://flagcdn.com/16x12/${player.passportArea.iconcode}.png`}
                      width="16"
                      height="12"
                      alt={player.passportArea.iconcode}
                    />
                  </span>
                </div>

                <p style={{ width: "30%", fontWeight:"bolder" }}>
                  {player.firstName + " " + player.lastName}
                </p>

                <p style={{ width: "20%" }}>
                  Age: {new Date().getFullYear() - player.birthDate?.slice(0, 4)}
                </p>

                <p style={{ width: "15%" }}>Foot: {player.foot}</p>
              </Container>
            </Accordion.Header>
            <Accordion.Body>
              <Stats id={player.id} />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ))}
    </div>
  );
};

export default Player;
