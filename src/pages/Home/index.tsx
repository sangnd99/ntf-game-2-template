import Introduce from "./components/Introduce";
import GamePlay from "./components/GamePlay";

interface IHomeProps {}

const Home: React.FC<IHomeProps> = (props) => {
  return (
    <div>
      <Introduce />
      <GamePlay />
    </div>
  );
};

export default Home;
