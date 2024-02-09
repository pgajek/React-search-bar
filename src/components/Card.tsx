import { FC } from "react";
import "./Card.css";

interface CardProps {
  name: string;
  email: string;
}

const Card: FC<CardProps> = ({ name, email }) => {
  return (
    <div className="card">
      <header className="card-header">{name}</header>
      <div className="card-body">{email}</div>
    </div>
  );
};

export default Card;
