type DinoCardProps = {
  name: string;
  image: string;
  description: string;
};

export const DinoCard = ({ name, image, description }: DinoCardProps) => {
  return (
    <div>
      <h1>{name}</h1>
      <img alt="" src={image} />
      <p>{description}</p>
    </div>
  );
};
