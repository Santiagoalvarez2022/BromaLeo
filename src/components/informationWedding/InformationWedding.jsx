import './informationWeddings.css';

const InformationWedding = () => {
  return (
    <div className="wedding-container">
      {/* Flores arriba */}
      <div className="flowers"></div>

      {/* Contenido */}
      <div className="wedding-info text-blueP">
        <h1 className="namesTitle font-Marcellus">Renata & Pablo</h1>
        <div className='flex justify-center items-center'>
          <div className='date' />
        </div>
      </div>
    </div>
  );
};

export default InformationWedding;
