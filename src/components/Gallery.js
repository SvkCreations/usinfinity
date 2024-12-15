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
      <div className="py-3 my-3 my-md-5" id="custom-cards">
        <div className='d-flex flex-column align-items-center' style={{ cursor: 'pointer' }}>
          <h1 className="display-1 fw-bold" data-aos="fade-up">Our Gallery</h1>
        </div>
        <p className='lead' data-aos="fade-up">Welcome to our photo gallery! This space is a collection of moments we've shared—adventures, milestones, and little snippets of our everyday lives. Each photo tells a story, and together, they create a visual journey of our time together. Whether it's a candid shot from a spontaneous outing or a cherished memory from a special day, these pictures capture the essence of our love and the memories we've built.
          <br />We hope you enjoy looking through them as much as we enjoyed living them.</p>
        <div className='my-4 my-md-5'>
          <p className='lead fw-bold text-center'>Search in Gallery</p>
          <input value={searchQuery} onChange={handleSearch} type="text" id="search" className="form-control p-3" aria-describedby="passwordHelpBlock" placeholder='Type year, place or occassion...' />
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
            <p>No images found</p>
          )}
        </div>
      </div>
    </div>
  )
}
