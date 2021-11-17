import React, { useEffect, useState } from "react";
import axios from "axios";
import SemiCircleProgressBar from "react-progressbar-semicircle";

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
  
      <div className="progress-circle">
        <SemiCircleProgressBar 
          percentage={Math.round(stats.index)}
          
          stroke={"#25AEFD"}

          />
        <p style={{ color: "#25AEFD", fontWeight: "bold", textAlign: "center", fontSize: "2rem", marginBottom: "-0.3rem", marginTop:"-1.2rem" }}>
          {Math.round(stats.index)}
        </p>
        <p style={{ color: "#25AEFD", fontWeight: "bold",textAlign:"center", marginBottom:"-0.3rem" }}> COMPARİSONATOR</p>
        <p style={{ color: "#25AEFD", fontWeight: "bold", textAlign:"center", marginLeft:".9" }}> INDEX</p>
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
