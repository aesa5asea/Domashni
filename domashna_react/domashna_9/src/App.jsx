import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Gallery } from "./components/Gallery";
import { Home } from "./components/Home";
import { Nav } from "./components/Nav";
import { Albums } from "./components/Albums";
import axios from "axios";
import { API_URL } from "./utils/constants";
import "./css/App.css";
import { GalleryContext } from "./utils/GalleryContext";
import { AlbumContext } from "./utils/AlbumContext";

export function App() {
  const [photos, setPhotos] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios(`${API_URL}/photos`)
      .then((res) => setPhotos(res.data))
      .catch((err) => alert(err.message));
  }, []);

  useEffect(() => {
    axios(`${API_URL}/albums`)
      .then((res) => setAlbums(res.data))
      .catch((err) => alert(err.message));
  }, []);

  const deleteImage = () => {
    if (selectedImage) {
      const updatedPhotos = photos.filter((photo) => photo.url !== selectedImage);
      console.log("Image deleted successfully");
      setPhotos(updatedPhotos);
      setSelectedImage("");
    }
  };

  return (
    <div id="app">
      <Nav />
      <GalleryContext.Provider value={{ selectedImage, setSelectedImage, deleteImage }}>
        <AlbumContext.Provider value={{ albums }}>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            ></Route>
            <Route
              path="/gallery"
              element={<Gallery listOfPhotos={photos} />}
            ></Route>
            <Route
              path="/albums"
              element={<Albums albums={albums} />}
            />
          </Routes>
        </AlbumContext.Provider>
      </GalleryContext.Provider>
    </div>
  );
}
