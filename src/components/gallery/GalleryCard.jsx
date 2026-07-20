function GalleryCard({ title, image }) {
  return (
    <div
      className="
        group
        relative
        h-[370px]
        overflow-hidden
        rounded-3xl
        border
        border-cyan-500/15
        bg-[#0B1120]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-cyan-400/40
        hover:shadow-[0_0_35px_rgba(56,189,248,0.15)]
      "
    >
      {/* Image */}
      {image ? (
        <img
          src={image}
          alt={title}
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            transition-all
            duration-700
            group-hover:scale-110
          "
        />
      ) : (
        <div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            bg-gradient-to-b
            from-[#0B1735]
            to-[#050816]
          "
        >
          <div className="text-center text-slate-500">
            <div className="mb-4 text-4xl">📷</div>

            <p className="text-sm">
              Add your photo here
            </p>
          </div>
        </div>
      )}

      {/* Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-[#050816]
          via-transparent
          to-transparent
          opacity-80
        "
      ></div>

      {/* Title */}
      <h3
        className="
          absolute
          bottom-6
          left-6
          text-lg
          font-semibold
          text-white
        "
      >
        {title}
      </h3>
    </div>
  );
}

export default GalleryCard;