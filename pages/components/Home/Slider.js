import Image from 'next/image'
import {Images as ImageLink} from '../images'


const Slider = () => {
  return (
    <div
    id="carouselExampleIndicators"
    className="carousel slide"
    data-bs-ride="true"
  >
    {/* <div className="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to={0}
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      />
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to={1}
        aria-label="Slide 2"
      />
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to={2}
        aria-label="Slide 3"
      />
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to={3}
        aria-label="Slide 4"
      />
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to={4}
        aria-label="Slide 5"
      />
    </div> */}
    <div className="carousel-inner">
      <div className="carousel-item active">
        <Image src={ImageLink.Slider1} className="d-block w-100 img-fluid" alt="Slider 1" />
      </div>
      <div className="carousel-item">
        <Image src={ImageLink.Slider2} className="d-block w-100" alt="Slider 2" />
      </div>
      <div className="carousel-item">
        <Image src={ImageLink.Slider3} className="d-block w-100" alt="Slider 3" />
      </div>
      <div className="carousel-item">
        <Image src={ImageLink.Slider4} className="d-block w-100" alt="Slider 4" />
      </div>
      <div className="carousel-item">
        <Image src={ImageLink.Slider5} className="d-block w-100" alt="Slider 5" />
      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Slider