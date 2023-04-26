import Acordeon from "../../componentes/acordeon/Acordeon"
import MyCarousel from "./Slider"


const data = [
  {
    title: "Acerca de nosotros:",
    content:
      "Somos una empresa dedicada al servicio de mantenimiento y restauración de sistemas de CCTV en plantas industriales. Contamos con un equipo de técnicos altamente capacitados y experimentados que se dedican a garantizar el correcto funcionamiento de los sistemas de seguridad de nuestros clientes. Estamos comprometidos en brindar un servicio de alta calidad y en cumplir con las expectativas de nuestros clientes."
  },
  {
    title: "Misión:",
    content: "En nuestro servicio de mantenimiento y restauración de sistemas de CCTV, nuestra misión es proporcionar a nuestros clientes soluciones eficientes y confiables para garantizar el correcto funcionamiento de sus sistemas de seguridad en plantas industriales. Nos comprometemos a brindar un servicio de alta calidad que satisfaga las necesidades y expectativas de nuestros clientes."
  },
  {
    title: "Visión:",
    content: "Nuestra visión es convertirnos en líderes en el mercado de mantenimiento y restauración de sistemas de CCTV en plantas industriales. Queremos ser reconocidos por nuestra excelencia en el servicio al cliente, nuestro compromiso con la calidad y la satisfacción del cliente, y nuestra capacidad para brindar soluciones innovadoras y eficientes."
  }
];

function AboutUs() {
  return (
    <div>
          <div className="space">
            <h1 stye="color:black;" className="title">Acerca de nosotros</h1>
          </div>
          {
            data.map((item, index)=> <div
             key={index}
             style = {{marginBottom:"5px"}}
              >
              <Acordeon title={item.title} content={item.content}/>
              </div>
            )
          }
        <MyCarousel/>   
    </div>
  )
}
export default AboutUs