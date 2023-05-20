
const gallery = document.createElement("div");
gallery.id = "gallery";
document.body.appendChild(gallery);

fetch("https://jsonplaceholder.typicode.com/photos")
  .then((response) => response.json())
  .then((data) => {
    const first100 = data.slice(0, 100);
    first100.forEach((photo) => {
      const img = document.createElement("img");
      img.src = photo.thumbnailUrl;
      img.style.width = "150px";
      img.style.height = "150px";
      img.style.margin = "10px";
      img.style.cursor = "pointer";
      img.addEventListener("mouseenter", () => {
        img.src = photo.url;
        img.style.width = "200px";
        img.style.height = "200px";
        img.style.margin = "10px";
      });
      img.addEventListener("mouseleave", () => {
        img.src = photo.thumbnailUrl;
        img.style.width = "150px";
        img.style.height = "150px";
        img.style.margin = "10px";
        img.style.cursor = "pointer";
      })
      gallery.appendChild(img);
    });
  });