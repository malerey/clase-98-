import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [personajes, setPersonajes] = useState([]);
  const [value, setValue] = useState('');
  const [busqueda, setBusqueda] = useState(0);
  const [gender, setGender] = useState('');
  const [status, setStatus] = useState('');

  // efectos: una manera de controlar la informacion en mi componente
  // la accion dentro del efecto se ejecuta solo en determinados momentos
  useEffect(() => {
    fetch(
      `https://rickandmortyapi.com/api/character/?name=${value}&gender=${gender}&status=${status}`,
    )
      .then(res => res.json())
      .then(data => {
        setPersonajes(data.results);
      });
    // array de dependencias:
    // si esta vacio, el efecto solo se ejecuta en el primer render
    // si tiene alguna variable, el efecto se ejecuta toda vez que esa variable cambie
    // si tiene mas de una variable, el efecto se ejecuta toda vez que alguna variable cambie
    // si no existe (MALA IDEA), el efecto se ejecuta cada vez que se hace un nuevo render
  }, [value, gender]);

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    setBusqueda(busqueda + 1);
  };

  const handleChangeGenero = e => {
    setGender(e.target.value);
  };

  console.log(gender);
  return (
    <div className="App">
      <input onChange={handleChange} value={value} />
      <label for="genero">Genero</label>
      <input
        onChange={handleChangeGenero}
        type="radio"
        value="female"
        name="genero"
      />
      Female
      <input
        onChange={handleChangeGenero}
        type="radio"
        value="male"
        name="genero"
      />
      Male
      <input
        onChange={handleChangeGenero}
        type="radio"
        value="unknown"
        name="genero"
      />
      Unknown
      <input
        onChange={handleChangeGenero}
        type="radio"
        value="genderless"
        name="genero"
      />
      Genderless
      <button onClick={handleClick}>Buscar personajes</button>
      {personajes.map(personaje => (
        <h2>{personaje.name}</h2>
      ))}
    </div>
  );
}

export default App;
