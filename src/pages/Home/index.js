import { HomeThunks } from "./redux";
import { useDispatch } from "react-redux";
import LogoBody from "../../common/components/Logo/LogoBody";

const Home = () => {

  const dispatch = useDispatch();

  const handleMakeAwesome = () => {
    dispatch(HomeThunks.helpMakeAwesome());
  }

  //console.log('home component');

  return (
    <div className='section'>
      Here is the home page, whoo!
      <br></br>
      <button onClick={handleMakeAwesome}>Make Awesome</button>
      <LogoBody
        height='200'
        textColor='white'
        logoColor='red'
      />
    </div>
  );
}

export default Home;