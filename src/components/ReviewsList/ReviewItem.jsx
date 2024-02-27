import { ShieldCheck, Star } from "lucide-react";
import FsLightbox from "fslightbox-react";
import { useState } from "react";
import { PlayCircle } from "lucide-react";

const ReviewItem = ({ review }) => {
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

  return (
    <div className="shadow-md py-8 px-12">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h4 className="font-semibold opacity-70">{review.name}</h4>
          {review.verified && (
            <div className="flex items-center gap-1 text-primary">
              <span>Verified Traveler</span>
              <ShieldCheck className="w-5 h-6 fill-primary text-white" />
            </div>
          )}
        </div>
        <div className="flex gap-1 items-center">
          {Array.from({ length: review.rating }).map((_, index) => (
            <Star key={index} className="w-6 fill-[#F1BE00] text-[#F1BE00]" />
          ))}
          {Array.from({ length: 5 - review.rating }).map((_, index) => (
            <Star key={index} className="w-6 text-[#F1BE00]" />
          ))}
          <span className="text-[#A9E094] font-semibold text-sm ml-2">
            {review.rating} / 5
          </span>
        </div>
      </div>
      <h3 className="font-semibold mt-4 text-2xl font-golos">{review.title}</h3>
      <p className="mt-2">{review.details}</p>
      {review.media.length > 0 && (
        <div className="flex flex-wrap gap-4 mt-4">
          {review.media.map((file, index) => (
            <div
              key={index}
              className="relative min-w-72 cursor-pointer w-full flex-1"
              onClick={() => openLightboxOnSlide(index + 1)}
            >
              {file.type === "image" ? (
                <img
                  src={file.url}
                  alt=""
                  className="object-cover rounded-lg h-52 w-full flex-1"
                />
              ) : (
                <div className="relative cursor-pointer w-full min-w-72 flex-1">
                  <PlayCircle className="w-12 h-12 fill-primary text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  <video
                    src={file.url}
                    className="object-cover rounded-lg h-52 w-full"
                  ></video>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={[...review.media.map((file) => file.url)]}
        slide={lightboxController.slide}
        showThumbsOnMount={true}
      />
    </div>
  );
};
export default ReviewItem;
