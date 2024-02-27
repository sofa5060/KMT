import ReviewItem from "./ReviewItem";

const ReviewsList = () => {
  const reviews = [
    {
      name: "John Doe",
      verified: true,
      date: "2021-10-10",
      rating: 3,
      title: "Great Program and Hustle-Free Experience",
      details:
        "My recent trip to Egypt with KMT Tours was nothing short of extraordinary, leaving me with memories that will last a lifetime. From the moment I landed in Cairo to the final farewell, KMT Tours ensured a seamless and captivating experience through the wonders of this ancient land. The itinerary crafted by KMT Tours was well-thought-out, striking the perfect balance between historical exploration and leisure. Our knowledgeable guide, Ahmed, was a true gem, sharing not only historical facts but also captivating stories that brought ancient Egypt to life. His passion for Egyptology was infectious, making each tour an immersive and educational experience.",
      media: [
        {
          type: "image",
          url: "https://i.ibb.co/HXjs6qf/image.jpg",
        },
        {
          type: "image",
          url: "https://i.ibb.co/HXjs6qf/image.jpg",
        },
        {
          type: "video",
          url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        },
      ],
    },
    {
      name: "Jane Doe",
      verified: false,
      date: "2021-10-10",
      rating: 5,
      title: "Trip to Abu Simbel was Amazing",
      details:
        "One of the highlights of the trip was a visit to Abu Simbel, where the colossal statues of Ramses II greeted us at the entrance. The well-coordinated logistics by KMT Tours made the journey to this remote site hassle-free, allowing us to marvel at these monumental structures without any concerns. Accommodations selected by KMT Tours were top-notch, providing a perfect blend of comfort and authenticity. From charming boutique hotels in Cairo to the Nile-view rooms during the cruise, every stay enhanced the overall experience.",
      media: [
        {
          type: "image",
          url: "https://i.ibb.co/HXjs6qf/image.jpg",
        },
      ],
    },
  ];
  return (
    <div className="max-w-screen-md px-10 flex flex-col gap-10 mx-auto">
      {reviews.map((review, index) => (
        <ReviewItem key={index} review={review} />
      ))}
    </div>
  );
};
export default ReviewsList;
