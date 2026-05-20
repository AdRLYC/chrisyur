import logo from '../assets/LogoCY.png'

function Hero() {

  return (
    <section
      id="inicio"
      className="hero d-flex align-items-center text-white"
    >

      <div className="container text-center">

        <img
          src={logo}
          alt="Logo CY"
          className="logo-hero mb-4"
        />

        <h1 className="fw-bold">
          CHRISYUR
        </h1>

        <p className="lead">
          Moda, estilo y calidad desde El Rosal, Jilotepec
        </p>

        <a href="#contacto" className="btn btn-acento">
          Contáctanos
        </a>

      </div>

    </section>
  )
}

export default Hero