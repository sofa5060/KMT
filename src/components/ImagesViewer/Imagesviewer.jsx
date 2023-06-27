import React, { useState, useEffect } from "react";
import FsLightbox from "fslightbox-react";
import "./Imagesviewer.css";

function Imagesviewer({ imagesList, mainImage }) {
  const [images, setImages] = useState([]);
  const [noOfImages, setNoOfImages] = useState(0);

  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
      showThumbs: true,
    });
  }

  useEffect(() => {
    setImages(imagesList);
    setNoOfImages(imagesList.length);
  }, [imagesList, mainImage]);

  return (
    <div className="images-viewer">
      <div className="images">
        <div className="main-image">
          {images && (
            <img
              src={mainImage}
              alt=""
              onClick={() => openLightboxOnSlide(1)}
            />
          )}
        </div>
        <div className="secondary-images">
          {images &&
            images.map((image, index) => {
              if (index >= 0 && index < 4) {
                if (noOfImages > 4 && index === 3) {
                  return (
                    <div
                      className="secondary-image"
                      onClick={() => openLightboxOnSlide(index + 2)}
                      key={index}
                    >
                      <div className="last-image-cover">
                        <h4>+{images.length - 4} Photos</h4>
                      </div>
                      <img src={image} alt="" />
                    </div>
                  );
                } else {
                  return (
                    <div
                      className="secondary-image"
                      key={index}
                      onClick={() => openLightboxOnSlide(index + 2)}
                    >
                      <img src={image} alt="" />
                    </div>
                  );
                }
              }
            })}
        </div>
      </div>
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={[mainImage, ...images]}
        slide={lightboxController.slide}
        showThumbsOnMount={true}
      />
    </div>
  );
}

export default Imagesviewer;
