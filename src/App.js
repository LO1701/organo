
import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';

export default function App() {

  const [colaboradores, setColaboradores] = useState([]);

  function aoNovoColaborador(colaborador) {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador])
    console.log(colaboradores);
  }

  return (
    <div>
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaborador(colaborador)}/>
      <Time nome='Lurian'/>
    </div>
  );
}