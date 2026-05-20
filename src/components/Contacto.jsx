function Contacto() {

  return (

    <section id="contacto" className="contacto-section py-5">

      <div className="container">

        <div className="text-center mb-5">

          <h2 className="section-title">
            Contacto
          </h2>

          <p className="contacto-subtitulo">
            ¿Te interesa alguna prenda? Escríbenos y con gusto te atenderemos.
          </p>

        </div>

        <div className="row g-4 align-items-stretch">

          {/* INFORMACIÓN */}

          <div className="col-lg-5">

            <div className="contacto-info h-100">

              <div className="contacto-logo-titulo">

                
                <h3 className="mb-0">
                  CHRISYUR
                </h3>

              </div>

              <p className="mt-4">
                Tienda de ropa ubicada en El Rosal, Jilotepec.
                Ofrecemos prendas modernas, cómodas y accesibles
                para todos los estilos.
              </p>

              <div className="contacto-dato">

                <i className="bi bi-geo-alt-fill"></i>

                <span>
                  El Rosal, Jilotepec
                </span>

              </div>

              <div className="contacto-dato">

                <i className="bi bi-whatsapp"></i>

                <span>
                  55 5555 5555
                </span>

              </div>

              <div className="contacto-dato">

                <i className="bi bi-envelope-fill"></i>

                <span>
                  contacto@chrisyur.com
                </span>

              </div>

              <div className="contacto-dato">

                <i className="bi bi-clock-fill"></i>

                <span>
                  Lunes a sábado · 10:00 a.m. - 7:00 p.m.
                </span>

              </div>

            </div>

          </div>

          {/* FORMULARIO */}

          <div className="col-lg-7">

            <div className="contacto-formulario h-100">

              <h3 className="mb-4">
                Envíanos un mensaje
              </h3>

              <form
              <form
              name="contacto-chrisyur"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              action="/"
              onSubmit={(e) => {
                e.preventDefault();

                const form = e.target;
                const data = new FormData(form);

                fetch("/", {
                  method: "POST",
                  headers: { "Content-Type": "application/x-www-form-urlencoded" },
                  body: new URLSearchParams(data).toString(),
                })
                .then(() => {
                  alert("Mensaje enviado correctamente");
                  form.reset();
                })
                .catch(() => alert("Ocurrió un error al enviar el mensaje"));
              }}
              > 
                

                {/* NECESARIO PARA NETLIFY */}

                <input
                  type="hidden"
                  name="form-name"
                  value="contacto-chrisyur"
                />

                <p className="d-none">

                  <label>
                    No llenar este campo:
                    <input name="bot-field" />
                  </label>

                </p>

                <div className="row g-3">

                  {/* NOMBRE */}

                  <div className="col-md-6">

                    <label className="form-label">
                      Nombre completo
                    </label>

                    <input
                      name="nombre"
                      type="text"
                      className="form-control"
                      required
                      placeholder="Escribe tu nombre"
                    />

                  </div>

                  {/* CORREO */}

                  <div className="col-md-6">

                    <label className="form-label">
                      Correo electrónico
                    </label>

                    <input
                      name="correo"
                      type="email"
                      className="form-control"
                      required
                      placeholder="correo@ejemplo.com"
                    />

                  </div>

                  {/* TELEFONO */}

                  <div className="col-md-6">

                    <label className="form-label">
                      Teléfono
                    </label>

                    <input
                      name="telefono"
                      type="tel"
                      className="form-control"
                      required
                      placeholder="Ej. 5555555555"
                    />

                  </div>

                  {/* PRODUCTO */}

                  <div className="col-md-6">

                    <label className="form-label">
                      Producto de interés
                    </label>

                    <select
                      name="producto"
                      className="form-select"
                      required
                    >

                      <option value="">
                        Selecciona una opción
                      </option>

                      <option>
                        Blusas
                      </option>

                      <option>
                        Pantalones
                      </option>

                      <option>
                        Vestidos
                      </option>

                      <option>
                        Playeras
                      </option>

                      <option>
                        Accesorios
                      </option>

                    </select>

                  </div>

                  {/* MENSAJE */}

                  <div className="col-12">

                    <label className="form-label">
                      Mensaje
                    </label>

                    <textarea
                      name="mensaje"
                      className="form-control"
                      rows="4"
                      required
                      placeholder="Escribe aquí tu mensaje"
                    ></textarea>

                  </div>

                  {/* PRIVACIDAD */}

                  <div className="col-12">

                    <div className="form-check">

                      <input
                        className="form-check-input"
                        type="checkbox"
                        required
                        id="privacidad"
                      />

                      <label
                        className="form-check-label"
                        htmlFor="privacidad"
                      >

                        Acepto el aviso de privacidad.

                      </label>

                    </div>

                  </div>

                  {/* BOTON */}

                  <div className="col-12">

                    <button
                      className="btn btn-acento px-4"
                      type="submit"
                    >

                      Enviar mensaje

                    </button>

                  </div>

                </div>

              </form>

            </div>

          </div>

        </div>

      </div>

    </section>

  )
}

export default Contacto