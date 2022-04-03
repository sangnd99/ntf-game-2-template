import Introduce from "./components/Introduce";

interface IHomeProps {}

const Home: React.FC<IHomeProps> = (props) => {
  return (
    <div>
      <Introduce />
    </div>
  );
};

export default Home;
