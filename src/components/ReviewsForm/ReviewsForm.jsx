import { useCallback, useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../context/LanguageContextProvider";
import TextField from "@mui/material/TextField";
import { useDropzone } from "react-dropzone";
import uploadIcon from "../../images/upload.png";
import { X } from "lucide-react";
import { AlertContext } from "../../context/AlertContextProvider";
import axios from "axios";

const ReviewsForm = () => {
  const { renderContent } = useContext(LanguageContext);
  const { showAlert } = useContext(AlertContext);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState("");
  const [details, setDetails] = useState("");
  const [media, setMedia] = useState([]);

  const removeMedia = (index) => {
    setMedia((prev) => prev.filter((_, i) => i !== index));
  };

  const uploadImage = useCallback((img) => {
    let body = new FormData();
    body.set("key", `${process.env.REACT_APP_IMGBB_API_KEY}`);
    body.append("image", img);

    return axios({
      method: "post",
      url: "https://api.imgbb.com/1/upload",
      data: body,
    });
  }, []);

  const uploadImages = useCallback(async () => {
    let urls = [];
    for (let i = 0; i < media.length; i++) {
      let res;
      try {
        res = await uploadImage(media[i].file);
      } catch (error) {
        console.log(error);
        showAlert("error", "Something went wrong while uploading the images");
      }
      console.log(res.data);
      urls.push({
        type: media[i].type,
        url: res.data.data.url,
      });
    }

    return urls;
  }, [uploadImage, media, showAlert]);

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    acceptedFiles.forEach((file) => {
      // check if the file is an image or a video
      if (file.type.startsWith("image")) {
        setMedia((prev) => [...prev, { type: "image", file }]);
      } else if (file.type.startsWith("video")) {
        setMedia((prev) => [...prev, { type: "video", file }]);
      }
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const validate = () => {
    let isValid = true;
    if (
      fullName === "" ||
      email === "" ||
      title === "" ||
      rate === "" ||
      details === ""
    ) {
      isValid = false;
    }

    if (rate === "" || rate < 1 || rate > 5) {
      isValid = false;
    }

    return isValid;
  };

  const addReview = useCallback(
    async (name, email, title, details, rate) => {
      try {
        showAlert("info", "Submitting Your Reviews...");

        let uploadedMedia = [];
        if (media.length > 0) {
          uploadedMedia = await uploadImages();
        }
        console.log(uploadedMedia);

        await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/review`, {
          name,
          email,
          title,
          details,
          media: uploadedMedia,
          rate,
        });

        showAlert("success", "Your review has been submitted successfully");
        setFullName("");
        setEmail("");
        setTitle("");
        setDetails("");
        setRate("");
        setMedia([]);
      } catch (e) {
        return showAlert(
          "error",
          "Something went wrong, please try again later"
        );
      }
    },
    [showAlert, uploadImages, media]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      // If not valid return
      showAlert("error", "Please fill all required fields correctly");
      return;
    }

    await addReview(fullName, email, title, details, rate);
  };

  return (
    <div className="max-w-screen-lg px-10 mx-auto pt-32" id="form">
      <h3 className="font-bold text-4xl">Write A Review ★</h3>
      <p className="mt-5 mb-12">
        We sincerely thank you for sharing your detailed and heartfelt review of
        your Egypt journey with KMT Tours. Your thoughtful words about our
        meticulous planning, knowledgeable guides, and exclusive experiences
        bring immense joy to our team.
      </p>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="flex gap-8 items-center">
          <TextField
            label={renderContent(
              "Full Name",
              "Nombre completo",
              "Nome completo"
            )}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            fullWidth
          />
          <TextField
            label={renderContent(
              "Email Address",
              "Dirección de correo electrónico",
              "Endereço de e-mail"
            )}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            fullWidth
          />
        </div>
        <div className="flex gap-8 items-center">
          <TextField
            label={renderContent(
              "Title of Your Review",
              "Título de tu reseña",
              "Título da sua avaliação"
            )}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            fullWidth
          />
          <TextField
            label={renderContent("Your Rate /5", "Tu tasa /5", "Sua taxa /5")}
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            error={
              (rate > 5 || rate < 1 || isNaN(parseInt(rate))) && rate !== ""
            }
            required
            fullWidth
            helperText={
              (rate > 5 || rate < 1 || isNaN(parseInt(rate))) && rate !== ""
                ? "rate must be between 1 and 5"
                : ""
            }
            onWheel={(e) => e.target.blur()}
          />
        </div>
        <TextField
          label={renderContent(
            "Review Details",
            "Detalles de la reseña",
            "Detalhes da avaliação"
          )}
          multiline
          required
          fullWidth
          rows={4}
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
        {media.length > 0 && (
          <div className="flex gap-4">
            {media.map((file, index) => (
              <div key={index} className="relative">
                <X
                  className="absolute -top-2 -right-2 cursor-pointer z-20 border-2 border-white rounded-full bg-primary text-white"
                  onClick={() => removeMedia(index)}
                />
                {file.type === "image" ? (
                  <img
                    src={URL.createObjectURL(file.file)}
                    alt=""
                    className="w-32 h-32 object-cover"
                  />
                ) : (
                  <video
                    src={URL.createObjectURL(file.file)}
                    controls
                    className="w-32 h-32"
                  ></video>
                )}
              </div>
            ))}
          </div>
        )}
        <div
          className="border-dashed border-2 border-primary grid place-items-center max-w-max py-16 px-40 cursor-pointer"
          {...getRootProps()}
        >
          {/* accept only images and videos */}
          <input {...getInputProps()} accept="image/*" />
          <img src={uploadIcon} alt="" className="w-full" />
        </div>
        <button type="submit" className="bg-primary text-white py-4 px-8">
          Submit Your Review
        </button>
      </form>
    </div>
  );
};
export default ReviewsForm;
