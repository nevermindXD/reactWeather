import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfro from './WeatherExtraInfo';
import {SNOW} from './../../../constants/weather';
import './style.css';

const WeatherData = () => (
    <div className='weatherDataCont'>
        <WeatherTemperature temperature={20} weatherState={SNOW}/>
        <WeatherExtraInfro humidity={80} wind={'10m/s'}/>
    </div>
);

export default WeatherData;