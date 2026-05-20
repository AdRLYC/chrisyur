function Galeria() {
  return (
    <section id="galeria" className="container py-5">

      <h2 className="section-title">
        Galería y portafolio
      </h2>

      <div className="row g-3">

        <div className="col-md-4">
          <img
            className="img-fluid rounded imagen-galeria"
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
            alt="Tienda de ropa"
          />
        </div>

        <div className="col-md-4">
          <img
            className="img-fluid rounded imagen-galeria"
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b"
            alt="Ropa en exhibición"
          />
        </div>

        <div className="col-md-4">
          <img
            className="img-fluid rounded imagen-galeria"
            src="https://images.unsplash.com/photo-1496747611176-843222e1e57c"
            alt="Moda femenina"
          />
        </div>

      </div>

      <h3 className="mt-5 mb-3">
        Video
      </h3>

      <div className="ratio ratio-16x9">

        <iframe
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
          title="Video de moda"
          allowFullScreen
        ></iframe>

      </div>

      {/* NUEVO AUDIO */}

      <div className="card p-4 mt-4 shadow-sm">

        <h3 className="mb-3">
          Audio promocional
        </h3>

        <p>
          Escucha nuestro audio promocional de CHRISYUR.
        </p>
        
        <audio controls className="w-100">

          <source
            src="/audio/promocional.mp3"
            type="audio/mpeg"
          />

          Tu navegador no soporta audio.

        </audio>

      </div>

    </section>
  )
}

export default Galeria


  

  
      