import leofoto from "../../assets/fotoLeo.jpg";

const PrincipalPhoto = () => {
  return (
    <div className="w-full flex justify-center">
      <img
        src={leofoto}
        alt="Couple photo"
        className="w-full max-w-[600px] aspect-[3/4] object-cover"
        />
    </div>
  );
};

export default PrincipalPhoto;
