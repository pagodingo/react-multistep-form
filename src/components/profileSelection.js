const profileSelection = () => {
    return (
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item">
      <img class="d-block w-50" src="https://www.teahub.io/photos/full/274-2743459_snow-cabin-pixel-art.jpg" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-50" src="https://preview.redd.it/q5l4dwtlc4941.png?width=960&crop=smart&auto=webp&s=f3714e5cca6cfcd0f7cb5d07ac786fa139e57f10" alt="Second slide"/>
    </div>
    <div class="carousel-item active">
      <img class="d-block w-50" src="https://cdn.dribbble.com/users/3567453/screenshots/10005954/media/5e4f13f8494e20e80cf506cb4f515c12.png?compress=1&resize=1200x900&vertical=top" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev profile-controls" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next profile-controls" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    )
}

export default profileSelection;