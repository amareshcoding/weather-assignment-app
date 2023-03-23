import axios from 'axios';
import { useState } from 'react';
import {
  Box,
  Box1,
  Box2,
  Box3,
  Box4,
  Button,
  Container,
  Heading,
  Img,
  Input,
  Text1,
  Text2,
  Text3,
} from './components/StyledUI';

function App() {
  const [city, setCity] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [data, setData] = useState<any>();

  //on submit check input values and then fetch
  const handleSubmit = async () => {
    if (!city || !country) {
      alert('Please Fill Both City and Country!');
      return;
    }
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=aa47420846e9d103bcf81df633f13bdb&units=metric`;
    try {
      const res = await axios.get(api);
      setData(res.data);
    } catch (err) {
      console.error('err: ', err);
    }
  };

  //taking out times from given miliseconds
  const Time = new Date(data?.dt * 1000);
  const _time = Time.toLocaleTimeString();

  const TimeSr = new Date(data?.sys.sunrise * 1000);
  const _timeSr = TimeSr.toLocaleTimeString();

  const TimeSs = new Date(data?.sys.sunset * 1000);
  const _timeSs = TimeSs.toLocaleTimeString();

  return (
    <Container>
      <Heading>Weather App</Heading>
      <Box>
        <Input
          placeholder="fill your city"
          onChange={(e) => setCity(e.target.value)}
        />
        <Input
          placeholder="fill country name"
          onChange={(e) => setCountry(e.target.value)}
        />
        <Button onClick={handleSubmit}>Submit</Button>
      </Box>
      <Box1>
        <Text1> {data ? data?.name : 'City in Weather'} </Text1>
        <Text2>As of {_time !== 'Invalid Date' ? _time : '00:00 AM/PM'}</Text2>
        <Box>
          <Text3>{data?.main.temp ? data?.main.temp : '0.00'}°</Text3>
          <div id="icon">
            {data ? (
              <img
                id="wicon"
                src={`http://openweathermap.org/img/w/${data?.weather[0].icon}.png`}
                alt="Weather icon"
              />
            ) : (
              <Img src="/assets/rain.png" alt="" />
            )}
          </div>
        </Box>
        <Text2>
          {data?.weather[0].main ? data?.weather[0].main : 'condition'}{' '}
        </Text2>
      </Box1>
      <Box2>
        <Box3>
          <Box4>
            <Text1>High/Low</Text1>
            <Text2>{`${data ? data.main.temp_max : 0}/${
              data ? data.main.temp_min : 0
            }`}</Text2>
          </Box4>
          <Box4>
            <Text1>Humidity</Text1>
            <Text2>{data ? data.main.humidity : 0} %</Text2>
          </Box4>
          <Box4>
            <Text1>Pressure</Text1>
            <Text2>{data ? data.main.pressure : 0} hPa</Text2>
          </Box4>
          <Box4>
            <Text1>Visibility</Text1>
            <Text2>{data ? data.visibility / 1000 : 0} Km</Text2>
          </Box4>
        </Box3>
        <Box3>
          <Box4>
            <Text1>Wind</Text1>
            <Text2>{data ? data.wind.speed : 0} Km/h</Text2>
          </Box4>
          <Box4>
            <Text1>Wind Direction</Text1>
            <Text2>{data ? data.wind.deg : 0}°</Text2>
          </Box4>
          <Box4>
            <Text1>Sunrise</Text1>
            <Text2>{_timeSr !== 'Invalid Date' ? _timeSr : '00:00 AM'}</Text2>
          </Box4>
          <Box4>
            <Text1>Sunset</Text1>
            <Text2>{_timeSs !== 'Invalid Date' ? _timeSs : '00:00 PM'}</Text2>
          </Box4>
        </Box3>
      </Box2>
    </Container>
  );
}

export default App;
