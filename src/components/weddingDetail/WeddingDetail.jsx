
const WeddingDetail = ({event,date,address,logo,link}) => {
    /*
        logo,
        evento,
        date,
        addres,
        link
    */
  return (
    <section>
        <div>
            <div>logo</div>
            <div>
                <h3>{event}</h3>
                <p>{date}</p>
                <p>{address}</p>
                <button>{link}</button>
            </div>
        </div>
    </section>
  )
}

export default WeddingDetail