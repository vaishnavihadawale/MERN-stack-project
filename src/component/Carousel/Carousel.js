export const Carousel = () => {
  return (
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel"
      style={{objectFit:"contain !important"}}
    >
       <div class="carousel-caption " style={{"zIndex":"10"}}>

       <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success  text-black bg-danger-subtle" type="submit">Search</button>
    </form>
        </div>
      <div class="carousel-inner" id="carousel">
        <div class="carousel-item active">
          <img src="/assets/img-6.jpg" class="d-block w-100" alt="..." style={{"filter":"brightness(50%)"}} />
        </div>
        <div class="carousel-item">
          <img src="/assets/img-3.jpg" class="d-block w-100" alt="..." style={{"filter":"brightness(50%)"}}/>
        </div>
        <div class="carousel-item">
          <img src="/assets/img-2.jpg" class="d-block w-100" alt="..." style={{"filter":"brightness(50%)"}} />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};
