import { InformationWedding, PrincipalPhoto,CountDown } from './components';
import WeddingDetail from './components/weddingDetail/WeddingDetail';
import Banner from './components/banner/Banner';
import Label from './components/label/Label';
import './App.css';

const App = () => {
  return (
    <div className='mb-40 flex flex-col items-center'>
      <PrincipalPhoto />
      <InformationWedding />
      <CountDown />
      <span className='font-Obaby msg  '>Te esperamos para celebrar juntos...</span>
      <div className='px-4'>
        <WeddingDetail event={"Civil"} date={"Viernes 28 de Noviembre - 11hs"} address={"Beruti 3325, CABA"} link={"ss"} />

        <WeddingDetail event={"Fiesta"} date={"Viernes 28 de Noviembre - 19:45hs"} address={"El concerro, entre El Palenque y Exaltacion de la Cruz, CABA"} link={"ss"} />

        <WeddingDetail event={"Templo"} date={"Sabado 29 de Noviembre - 15hs"} address={"Autopista Riccheri 4955, Ciudad Evita"} link={"ss"} />
      </div>
      <Banner />
      <p className='font-Inria text-base text-center mx-4 text-[#003780] my-14'>Contamos con cada uno de ustedes para disfrutar del evento, pero por cuestiones de organización, les pedimos confirmar asistencia antes del 15 de Noviembre. </p>

      <Label text="CONFIRMAR ASISTENCIA" />

      <p className='font-Inria text-base text-center mx-4 text-[#003780] my-14'>Lo mas importante para nosotros es tu presencia, pero si deseas hacernos un regalo, aqui dejamos nuestros datos o podes consultarnos personalmente </p>

      <Label text="ALIAS: RENATAYPABLO.BODA" />
      <br />
      <Label text="CBU: 4530000800015182024100" />

    </div>
  )
}

export default App;
