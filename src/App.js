import logo from './logo.svg';
import './App.css';
import Allusers from './Components/Allusers/Allusers';
import 'boxicons';

function App() {
  return (
    <div className="App">
      <div className="HeaderInfo">
        <img className='logo' src={logo} alt="" />
        <h1>All Users In Community.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatem sapiente qui veritatis quam porro officia, quia laborum, deserunt odit aspernatur non doloribus illo assumenda iste error perferendis molestiae itaque.</p>
      </div>
      <Allusers></Allusers>
      <div></div>
    </div>  
  );
}

export default App;
