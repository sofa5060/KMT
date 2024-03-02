import { useCallback, useContext, useState } from "react";
import { LanguageContext } from "../../context/LanguageContextProvider";
import TextField from "@mui/material/TextField";
import { useDropzone } from "react-dropzone";
import uploadIcon from "../../images/upload.png";
import { X } from "lucide-react";
import { AlertContext } from "../../context/AlertContextProvider";
import axios from "axios";
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

const ReviewsForm = () => {
  const { renderContent } = useContext(LanguageContext);
  const { showAlert } = useContext(AlertContext);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState("");
  const [details, setDetails] = useState("");
  const [media, setMedia] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const storage = getStorage();

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

  const uploadVideo = useCallback(async (video) => {
    const storageRef = ref(storage, uuidv4() + ".mp4");

    // 'file' comes from the Blob or File API
    const uploadTask = await uploadBytesResumable(storageRef, video);
    let url = `https://firebasestorage.googleapis.com/v0/b/${uploadTask.metadata.bucket}/o/${uploadTask.metadata.fullPath}?alt=media&token=${uploadTask.metadata.name}`;
    return url;
  }, []);

  const uploadMedia = useCallback(async () => {
    let urls = [];
    for (let i = 0; i < media.length; i++) {
      let res;
      try {
        if (media[i].type === "image") {
          res = await uploadImage(media[i].file);
          urls.push({
            type: media[i].type,
            url: res.data.data.url,
          });
        } else {
          res = await uploadVideo(media[i].file);
          console.log(res);
          urls.push({
            type: media[i].type,
            url: res,
          });
        }
      } catch (error) {
        console.log(error);
        showAlert("error", "Something went wrong while uploading the media");
      }
      console.log(res.data);
    }

    return urls;
  }, [uploadImage, media, showAlert, uploadVideo]);

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    acceptedFiles.forEach((file) => {
      // check if the file is an image or a video
      if (file.type.startsWith("image")) {
        // max file size is 5MB
        if (file.size > 5 * 1024 * 1024) {
          return showAlert("error", "Image size must be less than 5MB");
        }
        setMedia((prev) => [...prev, { type: "image", file }]);
      } else if (file.type.startsWith("video")) {
        // max file size is 20MB
        if (file.size > 20 * 1024 * 1024) {
          return showAlert("error", "Video size must be less than 20MB");
        }
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
        showAlert("info", "Submitting Your Review...");
        setIsSubmitting(true);

        let uploadedMedia = [];
        if (media.length > 0) {
          uploadedMedia = await uploadMedia();
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
        setIsSubmitting(false);
      } catch (e) {
        setIsSubmitting(false);
        return showAlert(
          "error",
          "Something went wrong, please try again later"
        );
      }
    },
    [showAlert, uploadMedia, media]
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
      <h3 className="font-bold text-4xl">
        {renderContent(
          "Write A Review ★",
          "Escribe una reseña ★",
          "Escreva uma avaliação ★"
        )}
      </h3>
      <p className="mt-5 mb-12">
        {renderContent(
          "We sincerely thank you for sharing your detailed and heartfelt review of your Egypt journey with KMT Tours. Your thoughtful words about our meticulous planning, knowledgeable guides, and exclusive experiences bring immense joy to our team.",
          "Le agradecemos sinceramente por compartir su reseña detallada y sincera de su viaje a Egipto con KMT Tours. Sus palabras reflexivas sobre nuestra planificación meticulosa, guías expertos y experiencias exclusivas traen una inmensa alegría a nuestro equipo.",
          "Agradecemos sinceramente por compartilhar sua avaliação detalhada e sincera de sua viagem ao Egito com a KMT Tours. Suas palavras reflexivas sobre nosso planejamento meticuloso, guias experientes e experiências exclusivas trazem imensa alegria à nossa equipe."
        )}
      </p>
      <form onSubmit={handleSubmit} className="space-y-8 max-sm:space-y-4">
        <div className="flex gap-8 items-center max-sm:flex-col max-sm:gap-4">
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
        <div className="flex gap-8 items-center max-sm:flex-col max-sm:gap-4">
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
          className="border-dashed border-2 border-primary grid place-items-center max-w-max py-16 px-40 cursor-pointer max-sm:px-0 max-sm:max-w-full max-sm:py-8"
          {...getRootProps()}
        >
          {/* accept only images and videos */}
          <input {...getInputProps()} accept="image/*" />
          <img src={uploadIcon} alt="" className="w-full max-w-max" />
        </div>
        <div></div>
        <button
          type="submit"
          className="bg-primary text-white py-4 px-8 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:hover:bg-gray-300 disabled:text-gray-600 transition-all ease-in-out"
          disabled={isSubmitting}
        >
          {renderContent(
            "Submit Your Review",
            "Enviar tu reseña",
            "Enviar avaliação"
          )}
        </button>
      </form>
    </div>
  );
};
export default ReviewsForm;
