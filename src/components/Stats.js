import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";
import axios from "axios";
// import { Container, Row, Col } from "react-bootstrap";
// import { Link, useRouteMatch } from "react-router-dom";

const Stats = ({ id }) => {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(
    () =>
      axios(`https://mock-foooty-api.herokuapp.com/players/${id}/stats`)
        .then((res) => setStats(res.data.stats))
        .finally(() => setLoading(false)),
    [id]
  );

  return (
    <div className="stats-container">
      {loading && <div>Loading...</div>}
      {/* <p>{stats.goals}</p>
      <p>{stats.assists}</p>
      <p>{stats.passes}</p> */}
      <div>
      progress bar
      </div>

      <div className="column">
        <ul style={{textDecoration:"none"}}>
          <li style={{textDecoration:"none"}}>Goals</li>
          <li>Asists</li>
          <li>Shots</li>
          <li>Passes</li>
          <li>Crosses</li>
        </ul>
        <ul>
        {Object.values(stats).slice(1, 6)
                        .map((item) => {
                          return <li><strong>{item}</strong></li>;
                        })}
        </ul>
      </div>

      <div className="column">
        <ul>
          <li>Key Passes</li>
          <li>Smart Passes</li>
          <li>Touch in Box</li>
          <li style={{color:"yellow"}}>Yellow Cards</li>
          <li style={{color:"red"}}>Red Cards</li>
        </ul>
        <ul>
        {Object.values(stats).slice(1, 6)
                        .map((item) => {
                            return <li><strong>{item}</strong></li>;
                        })}
        </ul>
      </div>







    </div>
  );
};

export default Stats;
