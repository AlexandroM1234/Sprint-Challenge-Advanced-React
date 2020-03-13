import React from "react";
import { useStyles } from "../hooks/useStyles";

const PlayerCard = props => {
  const styles = useStyles();
  return (
    <div>
      <div className={styles.container}>
        <p>{props.players.name}</p>
        <p>{props.players.country}</p>
        <p>{props.players.searches}</p>
      </div>
    </div>
  );
};

export default PlayerCard;
