import './informationWeddings.css';

const InformationWedding = () => {
  return (
    <div className="wedding-container">
      {/* Flores arriba */}
      <div className="flowers"></div>

      {/* Contenido */}
      <div className="wedding-info text-blueP">
        <h1 className="namesTitle font-Marcellus">Renata & Pablo</h1>
        <p className="wedding-date">28 · 11 · 2025</p>
      </div>
    </div>
  );
};

export default InformationWedding;
