import React from "react";
import "./App.css";
import axios from "axios";

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
      // console.log(this.state.players);
    });
  }

  render() {
    return (
      <div>
        {this.state.players.map(player => {
          return (
            <div>
              <p>{player.name}</p>
              <p>{player.country}</p>
              <p>{player.searches}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
