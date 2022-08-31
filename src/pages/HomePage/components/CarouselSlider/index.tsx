import * as React from 'react';



const CarouselSliderComponent: React.FunctionComponent = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide relative flex justify-center" data-bs-ride="carousel">
    <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div className="carousel-inner relative w-full overflow-hidden rounded-lg text-left">
      <div className="carousel-item active relative float-left w-full">
        <img
          src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
          className="block w-full"
          alt="..."
        />
        <div className="carousel-caption absolute">
          <h5 className="text-sm sm:text-3xl font-['Lora'] font-extrabold">First slide label</h5>
          <p className='text-sm sm:text-xl font-["Lora"] text-gray-400'>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div className="carousel-item relative float-left w-full">
        <img
          src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
          className="block w-full"
          alt="..."
        />
        <div className="carousel-caption absolute">
          <h5 className="text-sm sm:text-3xl font-['Lora'] font-extrabold">Second slide label</h5>
          <p className='text-sm sm:text-xl font-["Lora"] text-gray-400'>Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div className="carousel-item relative float-left w-full">
        <img
          src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
          className="block w-full"
          alt="..."
        />
        <div className="carousel-caption absolute">
          <h5 className="text-sm sm:text-3xl font-['Lora'] font-extrabold">Third slide label</h5>
          <p className='text-sm sm:text-xl font-["Lora"] text-gray-400'>Some representative placeholder content for the third slide.</p>
        </div>
      </div>
    </div>
    <button
      className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon inline-block bg-no-repeat bg-slate-400 rounded-full w-[15px] h-[25px] sm:w-[30px] sm:h-[50px]" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon inline-block bg-no-repeat bg-slate-400 rounded-full w-[15px] h-[25px] sm:w-[30px] sm:h-[50px]" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  );
};

export default CarouselSliderComponent;