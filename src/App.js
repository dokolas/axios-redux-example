import react, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [weather, setWeather] = useState(null);
  const [input, setinput] = useState('');
  
  //Build this first
  useEffect(() => {
    axios.get("http://api.weatherapi.com/v1/current.json?key=90f22f1f3bd3473a86c14120210201&q=Moline")
    .then(data => {
      setWeather(data.data);
      console.log(data.data);
    })
    .catch(err => console.log(err));
  }, []);

  //event - built third - sets state to input
  const weatherInput = (e) => {
    setinput(e.target.value);
  }

  const searchWeather = () => {
    axios.get(`http://api.weatherapi.com/v1/current.json?key=90f22f1f3bd3473a86c14120210201&q=${input}`)
    .then(data => {
      setWeather(data.data);
      console.log(data.data);
    })
    .catch(err => console.log(err));
  }

  return (
    <div className="App">
      {/* IF WEATHER IS AVAILABLE HAD TO SET NULL ABOVE TO DO THIS */}
      {/* built this second */}
        {weather && (
          <div>
            <div className='weatherinfo'>
              <input type='text' onChange={weatherInput}/>
              <button onClick={searchWeather}>Search</button>
            </div>
            <h1>{weather.location.country}</h1>
            <h2>{weather.location.region}</h2>

            <div className='condition'>
              <h3>{weather.current.condition.text}</h3>
              <img src={weather.current.condition.icon} />
              <h3>{weather.current.temp_f}F</h3>
            </div>
          </div>
        )}
    </div>
  )
}

export default App;
