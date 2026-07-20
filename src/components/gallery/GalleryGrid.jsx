import GalleryCard from "./GalleryCard";
import { galleryItems } from "./galleryData";

function GalleryGrid() {
  return (
    <div
      className="
        grid
        grid-cols-1
        gap-6
        sm:grid-cols-2
        lg:grid-cols-4
      "
    >
      {galleryItems.map((item) => (
        <GalleryCard
          key={item.title}
          title={item.title}
          image={item.image}
        />
      ))}
    </div>
  );
}

export default GalleryGrid;