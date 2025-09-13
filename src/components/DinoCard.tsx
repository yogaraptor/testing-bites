import styles from "./DinoCard.module.css";

type DinoCardProps = {
  name: string;
  image: string;
  description: string;
  onRelease: () => void;
};

export const DinoCard = ({
  name,
  image,
  description,
  onRelease,
}: DinoCardProps) => {
  return (
    <div className={styles.card} data-testid="dino-card">
      <h1>{name}</h1>
      <img alt="" src={image} />
      <p>{description}</p>
      <button type="button" onClick={onRelease}>
        Release
      </button>
    </div>
  );
};
