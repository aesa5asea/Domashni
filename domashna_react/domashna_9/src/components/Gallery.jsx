import { useContext } from "react";
import PropTypes from "prop-types";
import { Popup } from "./Popup";
import { GalleryContext } from "../utils/GalleryContext";

export const Gallery = ({ listOfPhotos }) => {
  const { selectedImage, setSelectedImage } = useContext(GalleryContext);
  return (
    <div id="gallery">
      {listOfPhotos.slice(0, 50).map((photo) => {
        return (
          <div
            className="image-holder"
            key={photo.id}
            onClick={() => {
              setSelectedImage(photo.url);
            }}
          >
            <img
              src={photo.thumbnailUrl}
              alt={photo.title}
            />
          </div>
        );
      })}
      {selectedImage !== "" && <Popup />}
    </div>
  );
};

Gallery.propTypes = {
  listOfPhotos: PropTypes.arrayOf(PropTypes.object),
};
