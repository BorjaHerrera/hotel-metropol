import BackgroundHome from '../../components/BackgroundHome/backgroundHome';
import { StartGameButton } from '../../components/StartGameButton/StartGameButton';
import './Home.css';

const Home = () => {
  return (
    <>
      <BackgroundHome />
      <section id='Home'>
        <h1>BIENVENIDOS AL HOTEL METROPOL</h1>
        <p>
          En el corazón de Moscú, un Conde y una niña se encuentran atrapados en
          un viejo hotel lleno de secretos. La única forma de escapar es
          resolviendo una serie de acertijos que les permitirán desbloquear las
          puertas de su libertad. El Conde, con su astucia y coraje, debe usar
          su ingenio para superar cada desafío.
        </p>
        <StartGameButton />
      </section>
    </>
  );
};

export default Home;
