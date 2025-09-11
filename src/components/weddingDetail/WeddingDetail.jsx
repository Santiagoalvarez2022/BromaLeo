const WeddingDetail = ({ event, date, address, logo, link }) => {
  return (
    <section className="my-8 w-full font-Inria">
      <div className="grid grid-cols-[60px_1fr] gap-2 items-start">
        {/* Logo */}
        <div className="flex justify-center h-full">
          <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center">
            {logo}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col ">
          <h3 className="text-3xl text-blueP uppercase">
            {event}
          </h3>
          <p className="text-xs">{date}</p>
          <p className="text-xs">{address}</p>
          <div>
            <button className="bg-[#B6D9E8] text-xs text-white px-4 py-1 rounded-xl">
              Como llegar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingDetail;
