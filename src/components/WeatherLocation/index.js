import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import { SUN } from './../../constants/weather';
import './style.css';

const location = 'Guadalajara, MX';
const api_key = 'f0871dbe6cf411711e8ef3408b9a9add';
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`;

const data1 = {
    temperature: 20,
    weatherState: SUN,
    humidity: 10, 
    wind: '10 m/s'
};


class WeatherLocation extends Component {

    constructor(){
        super();
        this.state = {
            city: 'Guadalajara',
            data: data1
        };
    }

    handleUpdateClick = () => {
        fetch(api_weather)
            .then(data =>{
                console.log(data);
                return data.json();
            }).then(weather_data=>{
                console.log(weather_data);
            })
            .catch(e=>{
                console.log(e);
            })

        /*
        this.setState({
            city:'Mexico',
            data: data2
        });*/
        console.log('actualizado');
    }

    render = () =>{
        const { city, data } = this.state;
        return (
            <div className='weatherLocationCont'>
                <Location city={city}/>
                <WeatherData data={data}/>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    };
}

export default WeatherLocation;