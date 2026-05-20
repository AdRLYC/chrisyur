function Redes() {
  return (
    <section className="redes text-center py-5">

      <div className="container">

        <h2 className="mb-3">
          Redes sociales
        </h2>

        <p className="mb-4">
          Síguenos en nuestras redes y conoce nuestras promociones.
        </p>

        <div className="d-flex justify-content-center gap-4 flex-wrap">

          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
            className="icono-red"
          >
            <i className="bi bi-facebook"></i>
          </a>

          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
            className="icono-red"
          >
            <i className="bi bi-instagram"></i>
          </a>

          <a
            href="https://wa.me/525555555555"
            target="_blank"
            rel="noreferrer"
            className="icono-red"
          >
            <i className="bi bi-whatsapp"></i>
          </a>

        </div>

      </div>

    </section>
  )
}

export default Redes