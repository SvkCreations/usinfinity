import React, { useState } from "react";

const SearchImages = () => {
    function importAllImages(r) {
        return r.keys().map(r);
      }
      
const images_2023 = importAllImages(require.context('../images/gallery/2023/', false, /\.(png|jpe?g|svg)$/));

  // State for managing search query and filtered images
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
      <h1>Image Search</h1>
      <input
        type="text"
        placeholder="Search for images"
        value={searchQuery}
        onChange={handleSearch}
      />

      <div className="image-gallery">
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
  );
};

export default SearchImages;
