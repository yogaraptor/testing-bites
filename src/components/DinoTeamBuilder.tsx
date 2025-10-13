import styles from "./DinoTeamBuilder.module.css";
import dinoCardStyles from "./DinoCard.module.css";
import yogaraptorIcon from "../assets/yogaraptor-icon.png";
import chillodactylIcon from "../assets/chillodactyl-icon.png";
import tricalmotopsIcon from "../assets/tricalmotops-icon.png";
import { useState } from "react";

export const DinoTeamBuilder = () => {
  const [team, setTeam] = useState("");

  const handleDragStart = (e: React.DragEvent<HTMLImageElement>) =>
    e.dataTransfer.setData("text", (e.target as HTMLImageElement).alt);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) =>
    e.preventDefault();
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setTeam(e.dataTransfer.getData("text"));
  };

  return (
    <div>
      <div
        className={[dinoCardStyles.card, styles.teamArea].join(" ")}
        aria-label="Team area"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {team}
      </div>

      <h2 id="dinos-heading">Available dinos</h2>
      <ul className={styles.dinoList} aria-labelledby="dinos-heading">
        <li>
          <img
            alt="Yogaraptor"
            src={yogaraptorIcon}
            onDragStart={handleDragStart}
            draggable
          />
        </li>
        <li>
          <img
            alt="Chillodactyl"
            src={chillodactylIcon}
            onDragStart={handleDragStart}
            draggable
          />
        </li>
        <li>
          <img
            alt="Tricalmotops"
            src={tricalmotopsIcon}
            onDragStart={handleDragStart}
            draggable
          />
        </li>
      </ul>
    </div>
  );
};
