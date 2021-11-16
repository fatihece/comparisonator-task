import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Player from "./Player";
import { Card, Container, CardImg } from "react-bootstrap";

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const { path, url } = useRouteMatch();

  console.log(path, url);
  useEffect(() => {
    axios(" https://mock-foooty-api.herokuapp.com/teams")
      .then((res) => setTeams(res.data.teams))
      .finally(() => setLoading(false));
  }, []);
  return (
    <Container>
      <h1>Teams</h1>
      {loading && <div>Loading...</div>}
      <Container className="team-container">
        {teams.map((team) => (
          <Link
            to={`${url}/${team.id}`}
            className="justify-content-md-center row teamname"
            key={team.id}
          >
            <Card style={{ border: "none", cursor: "pointer" }}>
              <CardImg
                src={team.icon}
                style={{
                  width: "60px",
                  height: "60px",
                  marginBottom: "0.5rem",
                  marginTop: "0.6rem",
                  marginLeft: "0.5rem",
                }}
                alt="Card image"
                className="rounded mx-auto d-block"
              />

              <Card.Body>
                <Card.Text className="team-name">{team.name}</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        ))}
      </Container>

      <Switch>
        <Route path={`${path}/:id`} component={Player} />
      </Switch>
    </Container>
  );
};

export default Teams;
