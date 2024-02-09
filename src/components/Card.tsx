import { FC } from "react";
import "./Card.css";

interface CardProps {
  name: string;
  playerClass: string;
}

const Card: FC<CardProps> = ({ name, playerClass }) => {
  return (
    <div className="card">
      <header className="card-header">{name}</header>
      <div className="card-body">{playerClass}</div>
    </div>
  );
};

export default Card;
