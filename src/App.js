import { Banner } from './components/Banner/Banner';
import { CampoTexto } from './components/CampoTexto';

function App() {
  return (
    <div>
      <Banner />
      <CampoTexto label={'Nome'} type={'text'} placeholder={'Digite seu nome'}/>
    </div>
  );
}

export default App;
