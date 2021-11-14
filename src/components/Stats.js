import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useRouteMatch } from "react-router-dom";

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
    <div>
      {loading && <div>Loading...</div>}
      <p>{stats.goals}</p>
      <p>{stats.assists}</p>
      <p>{stats.passes}</p>
          
        <div>
              {
                  
              }
        </div>
    </div>
  );
};

export default Stats;
