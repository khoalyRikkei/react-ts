import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import ListPlayer from "./ListPlayer";
import "./style.css";
import { IPlayer } from "./type";

function Game() {
  const [listPlayer, setListPlayer] = useState<IPlayer[]>([
    {
      name: "Quyet",
      score: 0,
      isTop: false,
    },
    {
      name: "Thai",
      score: 0,
      isTop: false,
    },
    {
      name: "Huong",
      score: 0,
      isTop: false,
    },
  ]);
  return (
    <>
      <div id="game">
        <div className="container">
          <Header />
          <ListPlayer data={listPlayer} />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Game;
