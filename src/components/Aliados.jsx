function Aliados() {
  return (
    <section id="aliados" className="bg-light py-5">
      <div className="container text-center">
        <h2 className="section-title">Clientes y aliados estratégicos</h2>

        <div className="row g-4">
          <div className="col-md-4">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="text-decoration-none">
              <div className="logo-aliado">
                <i className="bi bi-shop"></i>
                <p>Proveedores</p>
              </div>
            </a>
          </div>

          <div className="col-md-4">
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="text-decoration-none">
              <div className="logo-aliado">
                <i className="bi bi-people"></i>
                <p>Clientes Locales</p>
              </div>
            </a>
          </div>

          <div className="col-md-4">
            <a href="https://www.whatsapp.com" target="_blank" rel="noreferrer" className="text-decoration-none">
              <div className="logo-aliado">
                <i className="bi bi-truck"></i>
                <p>Ventas y Entregas</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Aliados