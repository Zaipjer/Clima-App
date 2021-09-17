import React, { useEffect, useState } from 'react';

const Weather = ({ clima }) => {

    const [image , setImage] = useState('');

    useEffect(()=> {
        setImage("https://openweathermap.org/img/wn/"+ clima.weather[0].icon +"@2x.png");
    },[clima])

    return (
        <div className="card-panel white col s12">
            {clima &&
                <div className="black-text center">
                    <h2>El clima de {clima.name} es:</h2>
                    <p className="temperatura">{Math.round(clima.main.temp - 273.15) + " °C"}</p>
                    <img  src={image} alt="Icono"/>

                    <p style={{marginTop: '0px'}}> Temperatura Máxima {Math.round(clima.main.temp_max - 273.15) + " °C"}</p>

                    <p> Temperatura Minima {Math.round(clima.main.temp_min - 273.15) + " °C"}</p>

                    <p> Humedad: {clima.main.humidity}%</p>

                    <p> Viento a: {Math.round(clima.wind.speed*3.6)} km/h</p>

                    <p> Descripción: {clima.weather[0].description}</p>
                </div>
            }
        </div>
    );
}

export default Weather;