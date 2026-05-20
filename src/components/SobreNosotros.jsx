function SobreNosotros() {
  return (
    <section id="nosotros" className="container py-5">
      <h2 className="section-title">Sobre nosotros</h2>

      <p>
        CHRISYUR es una empresa de ropa ubicada en El Rosal, Jilotepec,
        dedicada a ofrecer prendas cómodas, modernas y accesibles. Nace del
        esfuerzo familiar, el gusto por la moda y el compromiso de brindar
        una atención cercana a cada cliente.
      </p>

      <div className="row mt-4 g-4">
        <div className="col-md-4">
          <div className="card p-3 h-100 text-center">
            <i className="bi bi-award icono"></i>
            <h3>Calidad</h3>
            <p>Prendas seleccionadas con cuidado para ofrecer buen estilo y duración.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 h-100 text-center">
            <i className="bi bi-heart icono"></i>
            <h3>Confianza</h3>
            <p>Atención amable, responsable y cercana con nuestros clientes.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 h-100 text-center">
            <i className="bi bi-stars icono"></i>
            <h3>Estilo</h3>
            <p>Diseños actuales para diferentes edades, gustos y ocasiones.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SobreNosotros