import React, { useState, useEffect } from "react";
import FsLightbox from "fslightbox-react";
import "./Imagesviewer.css";

function Imagesviewer({ imagesList }) {
  const [images, setImages] = useState();
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
  }, []);

  return (
    <div className="images-viewer">
      <div className="images">
        <div className="main-image">
          {images && (
            <img
              src={images[0]}
              alt=""
              onClick={() => openLightboxOnSlide(1)}
            />
          )}
        </div>
        <div className="secondary-images">
          {images &&
            images.map((image, index) => {
              if (index > 0 && index < 5) {
                if (index === noOfImages - 1 || index === 4) {
                  return (
                    <div
                      className="secondary-image"
                      onClick={() => openLightboxOnSlide(index + 1)}
                      key={index}
                    >
                      <div className="last-image-cover">
                        <h4>+{images.length - 5} Photos</h4>
                      </div>
                      <img src={image} alt="" />
                    </div>
                  );
                } else {
                  return (
                    <div
                      className="secondary-image"
                      key={index}
                      onClick={() => openLightboxOnSlide(index + 1)}
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
        sources={images}
        slide={lightboxController.slide}
        showThumbsOnMount={true}
      />
    </div>
  );
}

export default Imagesviewer;
