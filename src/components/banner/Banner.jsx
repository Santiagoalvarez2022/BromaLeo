import img from '../../assets/fotoleo2.jpg'

const Banner = () => {
  return (
   <div className='w-full'>
      <img
        src={img}
        alt="Pareja en banco"
        className="w-full max-w-3xl mx-auto rounded-lg "
      />
   </div>
  )
}

export default Banner