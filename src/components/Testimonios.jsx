function Testimonios() {
  return (
    <section id="testimonios" className="bg-light py-5">
      <div className="container">
        <h2 className="section-title">Testimonios y casos de éxito</h2>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card p-4 h-100">
              <p>"Excelente atención y ropa muy bonita. Siempre encuentro algo para mí."</p>
              <strong>- Cliente local</strong>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-4 h-100">
              <p>"Me gustó mucho la calidad de las prendas y los precios son accesibles."</p>
              <strong>- Compradora frecuente</strong>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-4 h-100">
              <p>"Compré un regalo y me ayudaron a elegir la mejor opción."</p>
              <strong>- Cliente satisfecha</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonios