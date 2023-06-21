import "tailwindcss/tailwind.css";
import pic1 from "./1932042689-shutterstock-1932042690.jpg";
import pic2 from "./banking-technology-concept-cropped.jpg";
import pic3 from "./photo-1573164574572-cb89e39749b4.jpg";

const Working = () => {
  const images = [pic1, pic2, pic3]; // Replace with your own image URLs

  return (
    <div className="relative">
      {" "}
      <div className="working">
        {" "}
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="w-full h-auto object-cover"
          />
        ))}{" "}
      </div>{" "}
    </div>
  );
};

export default Working;
