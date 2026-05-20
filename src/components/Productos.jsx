function Productos() {
  return (
    <section id="productos" className="container py-5">
      <h2 className="section-title">Servicios y productos</h2>

      <div className="row text-center mb-5 g-4">
        <div className="col-md-4">
          <i className="bi bi-bag-heart icono"></i>
          <h3>Ropa casual</h3>
          <p>Prendas cómodas para uso diario.</p>
        </div>

        <div className="col-md-4">
          <i className="bi bi-person-standing-dress icono"></i>
          <h3>Moda juvenil</h3>
          <p>Diseños actuales para diferentes estilos.</p>
        </div>

        <div className="col-md-4">
          <i className="bi bi-gift icono"></i>
          <h3>Accesorios</h3>
          <p>Complementos para regalos o uso personal.</p>
        </div>
      </div>

      <h3 className="mb-3">Tabla de precios</h3>

      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>Producto</th>
              <th>Descripción</th>
              <th>Precio aproximado</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Blusa</td>
              <td>Modelo casual</td>
              <td>$180</td>
            </tr>

            <tr>
              <td>Pantalón</td>
              <td>Mezclilla o vestir</td>
              <td>$350</td>
            </tr>

            <tr>
              <td>Vestido</td>
              <td>Diseño juvenil</td>
              <td>$420</td>
            </tr>

            <tr>
              <td>Playera</td>
              <td>Modelo básico o estampado</td>
              <td>$150</td>
            </tr>

            <tr>
              <td>Accesorio</td>
              <td>Bolsa, moño, cinturón o complemento</td>
              <td>$90</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Productos