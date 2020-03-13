import React from "react";

const PlayerCard = props => {
  return (
    <div>
      <p>{props.players.name}</p>
      <p>{props.players.country}</p>
      <p>{props.players.searches}</p>
    </div>
  );
};

export default PlayerCard;
