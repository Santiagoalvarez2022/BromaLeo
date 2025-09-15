import { InformationWedding, PrincipalPhoto,CountDown } from './components';
import WeddingDetail from './components/weddingDetail/WeddingDetail';
import Banner from './components/banner/Banner';
import camping from './assets/camping.jpg'
import './App.css';

const App = () => {
  return (
    <div className='flex flex-col items-center'>
      <PrincipalPhoto />
      <div className='shadow-white'/>
      <InformationWedding />
      <CountDown />
      <span className='font-Obaby msg  '>Te esperamos para celebrar juntos mi cumpleaños...</span>
      <div className="relative px-4">

        <div className="relative z-10">
          <WeddingDetail
            event={"Camping"}
            date={"Sabado 27 de Agosto - 10hs"}
            address={"Camping, gral Granadero Baigorria"}
            link={"https://maps.app.goo.gl/YD7R3y7gqkjieE3o8"}
            logo={camping}
          />
        </div>
      </div>

      <Banner />
      <h2>Porfavor confirmar asistencia! antes del 20 de Sep! </h2>
        {/* <div className='flex justify-center mb-12'>
           <video loop>
              <source
                src={video}
                type="video/mp4" />
              Tu navegador no soporta la reproducción de video.
          </video>
        </div> */}
    </div>
  )
}

export default App;
