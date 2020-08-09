import React from "react";
import { useStyles } from "../hooks/useStyles";

const PlayerCard = props => {
  const styles = useStyles();
  return (
    <div>
      <div className={styles.container}>
        <p>Player Name: {props.players.name}</p>
        <p>Home Country: {props.players.country}</p>
        <p>Searches: {props.players.searches}</p>
      </div>
    </div>
  );
};

export default PlayerCard;
