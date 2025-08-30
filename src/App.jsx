import { InformationWedding, PrincipalPhoto,CountDown } from './components';
import './App.css';

const App = () => {
  return (
    <div className='mb-40 flex flex-col items-center'>
      <PrincipalPhoto />
      <InformationWedding />
      <CountDown />
      <span className='font-Obaby msg'>Te esperamos para celebrar juntos...</span>
    </div>
  )
}

export default App;