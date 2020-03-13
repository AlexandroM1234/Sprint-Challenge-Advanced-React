import React from "react";
import "./App.css";
import axios from "axios";
import PlayerCard from "./components/playerCard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/players").then(response => {
      this.setState({
        players: response.data
      });
    });
  }

  render() {
    return (
      <>
        {this.state.players.map(player => {
          return <PlayerCard players={player} />;
        })}
      </>
    );
  }
}

export default App;
