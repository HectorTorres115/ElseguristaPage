import './App.css';

function App() {
  return (
    <div className="Container">
      <img className="center" src={process.env.PUBLIC_URL + '/elsegurista.jpeg'} alt="On build"/>
    </div>
  );
}

export default App;
