/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import { Button } from '@gcba/obelisco'

export default function Home() {

  const cards1 = [
    {title: "Testeos", text: "Si tenés algún síntomas, si estuviste en contacto con alguien."},
    {title: "Vacunación", text: "Si vos o un familiar quieren vacunarse, ingresá y empadronate."},
    {title: "Últimas medidas", text: "Quiero saber que medidas se toman en el gobierno."},
  ];

  const cards2 = [
    {title: "Protocolos de apertura", text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna."},
    {title: "Personal de salud", text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna."},
    {title: "Personas mayores", text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna."},
  ];

  const cards3 = [
    {title: "Vacunación docente", text: "Para personal docente y no docente de escuelas de la Ciudad."},
    {title: "Testeos docentes", text: "Quiénes, cuándo y dónde pueden testearse."},
    {title: "La escuela hoy", text: "Las chicas y los chicos hicieron todo bien. Hagámoslo nosotros también."},
  ];

  const cards4 = [
    {title: "Vivamos cultura", text: "La Ciudad te acompaña brindándote asistencia y entretenimiento."},
    {title: "Estaciones saludables", text: "Las actividades virtuales dirigidas a personas mayores."},
  ];

  return (
    <>
      <Head>
        <title>Demos de Obelisco</title>
        <meta name="description" content="Ejemplso de diferentes formatos para web utilizando Obelisco" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="navbar">
        <div className="container my-2">
          <span className="navbar-brand">
            <img src="/logos.png" alt="logo" height={34} width={133} />
          </span>
        </div>
      </nav>

      <main>
        <section className="pt-4 pb-5 bg-light">
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Buenos Aires</a></li>
                <li className="breadcrumb-item"><a href="#">Pagina anterior</a></li>
              </ol>
            </nav>

            <div className="row">
              <div className="col-8">
                <p>Última actualización 28/05/2020 - 16:00 hs</p>
                <h1>Coronavirus (Covid-19)</h1>
                <p className="lead">Recomendaciones y medidas para el cumplimiento del <strong>distanciamiento social, preventivo y obligatorio</strong> establecido por el <a href="#">DNU 875/2020</a>.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-n5 pb-5">
          <div className="container">
            <div className="row mt-3 mb-5">
              {cards1.map(item => 
                <div className="col-4" key={item.title}>
                  <a className="card" href="#">
                    <div className="card-body">
                      <h3 className="card-title">{item.title}</h3>
                      <p className="card-text">{item.text}</p>
                    </div>
                  </a>
                </div>
              )}
            </div>
            
            <div className="row mt-3 mb-5">
              {cards2.map(item => 
                <div className="col-4" key={item.title}>
                  <div className="card card-simple">
                    <div className="card-body">
                      <h4 className="card-title"><a href="#">{item.title}</a></h4>
                      <p className="card-text">{item.text}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <h2>Te acercamos más información sobre</h2>
            <h3>Escuelas</h3>
            <div className="row mt-3 mb-5">
              {cards3.map(item => 
                <div className="col-4" key={item.title}>
                  <a className="card" href="#">
                    <div className="card-body">
                      <h3 className="card-title">{item.title}</h3>
                      <p className="card-text">{item.text}</p>
                    </div>
                  </a>
                </div>
              )}
            </div>
            <h3>Propuestas para hacer en casa</h3>
            <div className="row mt-3 mb-5">
              {cards4.map(item => 
                <div className="col-4" key={item.title}>
                  <a className="card" href="#">
                    <div className="card-body">
                      <h3 className="card-title">{item.title}</h3>
                      <p className="card-text">{item.text}</p>
                    </div>
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="py-5 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-8">
                <h2>Información en datos</h2>
                <p className="lead">Conocé los datos de a evolución del COVID-19 y todo lo que estamos haciendo en la Ciudad.</p>
                <p>
                  <Button type="primary" className="mr-3">Ver datos de covid-19</Button>
                  <Button type="secondary">Ver informes diarios</Button>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <h2>Prevención</h2>
                <p className="lead">Limitá al máximo cualquier salida.</p>
                <Button type="primary" size="small">Conocé los consejos para cuidarte</Button>
              </div>
              <div className="col-6">
                <h2>Síntomas</h2>
                <p className="lead">Si presentas alguno de estos síntomas.</p>
                <Button type="primary" size="small">Acercate a una UFU</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5 bg-light">
          <div className="container text-center">
            <p><strong>Información oficial del Gobierno Nacional</strong></p>
            <ul className="list-unstyled">
              <li className="list-inline-item"><a href="#">App cuidar</a></li>
              <li className="list-inline-item"><a href="#">Rectificación autodiagnóstico cuidar</a></li>
              <li className="list-inline-item"><a href="#">Agencia Nacional de Discapacidad</a></li>
              <li className="list-inline-item"><a href="#">Información COVID-19</a></li>
            </ul>
          </div>
        </section>
      </main>
    </>
  )
}
