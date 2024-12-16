import React, { useState } from 'react'

export default function Gallery() {
  function importAllImages(r) {
    return r.keys().map(r);
  }

  const images_2023 = importAllImages(require.context('../images/gallery/2023/', false, /\.(png|jpe?g|svg)$/));

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredImages, setFilteredImages] = useState(images_2023);

  // Handle the search input change
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter images based on the search query
    if (query === "") {
      setFilteredImages(images_2023);
    } else {
      const filtered = images_2023.filter((image) =>
        image.toLowerCase().includes(query)
      );
      setFilteredImages(filtered);
    }
  };

  return (
    <div>
      <div className="py-3 my-3" id="custom-cards">
        <div class="p-4 p-md-5 rounded text-body-emphasis bg-body-secondary">
          <div class="col-lg-6 px-0">
            <h1 className="featurette-heading fw-bold display-1" data-aos="fade-up">Our Gallery</h1>
            <p className='col col-md-10'>Welcome to our photo gallery! This space is a collection of moments we've shared—adventures, milestones, and little snippets of our everyday lives. Each photo tells a story, and together, they create a visual journey of our time together. Whether it's a candid shot from a spontaneous outing or a cherished memory from a special day, these pictures capture the essence of our love and the memories we've built.</p>
          </div>
        </div>
        <div className='my-4 my-md-5'>
          <p className='lead fw-bold text-center'>Search in Gallery</p>
          <input value={searchQuery} onChange={handleSearch} type="text" id="search" className="form-control py-3 px-5 shadow-none" aria-describedby="passwordHelpBlock" placeholder='Type year, place or occassion...' ></input>
        </div>

        <div className="row row-cols-1 row-cols-lg-4 align-items-stretch g-4 py-2">
          {filteredImages.length > 0 ? (
            filteredImages.map((image, index) => (
              <div className="col" key={index} data-aos="fade-up">
                <div className="card card-cover overflow-hidden rounded-4" >
                  <div className="d-flex justify-content-center h-100 text-white text-shadow-1">
                    <img className='img-fluid text-center' src={image} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className='lead fw-bold'>No images found</p>
          )}
        </div>
      </div>
    </div>
  )
}
