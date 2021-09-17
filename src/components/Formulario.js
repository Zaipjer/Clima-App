import React, { useState } from 'react';
import axios from 'axios';
import Global from '../Global';
import Weather from './Weather';

const Formulario = () => {

    const url = Global.url;
    const key = Global.key;

    const [ciudad, setCiudad] = useState('');
    const [pais, setPais] = useState('');
    const [status, setStatus] = useState('');
    const [weather, setWeather] = useState([]);

    // extraer ciudad y pais
    const handleChangePais = (e) => {
        setPais(e.target.value);
    }
    const handleChangeCiudad = (e) => {
        setCiudad(e.target.value);
    }

    // Submit al formulario
    const handleSubmit = (e) => {
        e.preventDefault();

        // ValidarWWWW
        if (ciudad === "" || pais === "") {
            setStatus('waiting');
            return;
        } else {
            // hacer la peticion a la api
            getWeather();

        }
    }

    const getWeather = () => {

        axios.get(url + ciudad + key)
            .then(res => {
                console.log(res.data);
                setWeather(res.data);
                setStatus('success');

            }).catch(err => {
                setStatus('failed');
            });
    }

    return (

        <div className="row">

            <div className="col m6 s12">
                <form onSubmit={(e) => handleSubmit(e)}>

                    {status === 'waiting' &&
                        <p className="red darken-4 error">Todos los campos son obligatorios</p>
                    }
                    <div className="input-field col s12">
                        <input type="text" name="ciudad" id="ciudad" onChange={(e) => handleChangeCiudad(e)} />
                        <label htmlFor="ciudad">Ciudad: </label>

                    </div>
                    <div className="input-field col s12">
                        <select name="pais" id="pais" onChange={(e) => handleChangePais(e)}>
                            <option value="">-- Seleccione un país</option>
                            <option value="US">Estados Unidos</option>
                            <option value="MX">México</option>
                            <option value="AR">Argentina</option>
                            <option value="CO">Colombia</option>
                            <option value="CR">Costa Rica</option>
                            <option value="ES">España</option>
                            <option value="PE">Perú</option>
                        </select>
                        <label htmlFor="pais">País: </label>
                    </div>
                    <div className="input-field col s12">
                        <p className="text-center">
                            <input type="submit" value="Buscar Clima" className="btn-large btn-block yellow accent-4" />
                        </p>
                    </div>
                </form>
            </div>
            <div className="col m6 s12">
                {status === 'success' &&
                    <Weather clima={weather} />
                }
                {status === 'failed' &&
                    <p className="red darken-4 error">No se pudo encontrar la ciudad o no existe</p>
                }
            </div>

        </div>


    );
}

export default Formulario;