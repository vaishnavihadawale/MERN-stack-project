import { Card } from "../Card/card";
import { Carousel } from "../Carousel/Carousel";

export const Home = () => {
  return (
    <>
      <Carousel></Carousel>
      <div className="m-3">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};
