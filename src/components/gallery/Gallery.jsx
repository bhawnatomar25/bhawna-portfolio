import GalleryGrid from "./GalleryGrid";

function Gallery() {
  return (
    <section
      id="gallery"
      className="
        px-6
        py-28
      "
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-20 text-center">

          <p
            className="
              mb-6
              text-xs
              font-semibold
              tracking-[5px]
              text-cyan-400
            "
          >
            PHOTO GALLERY
          </p>

          <h2
            className="
              text-4xl
              font-bold
              text-white
              md:text-5xl
            "
          >
            Behind The Scenes
          </h2>

        </div>

        {/* Gallery Cards */}
        <GalleryGrid />

      </div>
    </section>
  );
}

export default Gallery;