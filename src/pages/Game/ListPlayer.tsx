import { IPlayer } from "./type";

interface Props {
  data: IPlayer[];
}
function ListPlayer(props: Props) {
  return (
    <section className="player-container">
      {props.data &&
        props.data.map((player, i) => (
          <div className="player-tasks" key={i}>
            <div className="player-name">
              <i className="fa-solid fa-xmark" />
              <i
                className="fa-solid fa-crown"
                style={{ color: "rgb(255, 220, 24)" }}
              />
              <span>{player.name}</span>
            </div>
            <div className="player-point">
              <i className="fa-solid fa-minus" />
              <span>{player.score}</span>
              <i className="fa-solid fa-plus" />
            </div>
          </div>
        ))}
    </section>
  );
}

export default ListPlayer;
