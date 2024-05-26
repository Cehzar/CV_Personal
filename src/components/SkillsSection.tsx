import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

const categories = [
  {
    name: 'Skills',
    content: (
      <div className="text-white text-lg">
        <p className="font-bold text-left">• Java 50%<br />
        <span className="font-normal text-left">Tengo práctica en el uso de Java gracias a una excelente formación académica en la UCR.</span></p>
        <p className="font-bold text-left">• JavaScript 50%<br />
        <span className="font-normal text-left">Gracias a la realización de diversos proyectos he logrado un nivel de conocimiento bueno en este lenguaje y algunas de sus APIs.</span></p>
        <p className="font-bold text-left">• SQL 75%<br />
        <span className="font-normal text-left">Dominio del lenguaje SQL en diversos gestores de bases de datos como SSMS o MySQL.</span></p>
      </div>
    )
  },
  {
    name: 'Experiencias',
    content: (
      <div className="text-white text-lg">
        <p className="font-bold text-left">• 20/08/2019-18/1/2020<br />
        <span className="font-normal text-left">Mesero • Bar restaurante y cabinas La Rancha</span></p>
        <p className="font-bold text-left">• 25/10/2021-17/12/2021<br />
        <span className="font-normal text-left">Proveeduría • Caja Costarricense del seguro social</span></p>
        <p className="font-bold text-left">• 03/01/2022-05/02/2022<br />
        <span className="font-normal text-left">Misceláneo • Municipalidad de Coto Brus</span></p>
        <p className="font-bold text-left">• 05/02/2022-30/03/2022<br />
        <span className="font-normal text-left">Archivo municipal • Municipalidad de Coto Brus</span></p>
      </div>
    )
  },
  {
    name: 'Otras Habilidades',
    content: (
      <div className="text-white text-lg">
        <p className="font-bold text-left">• Manejo paquete office</p>
        <p className="font-bold text-left">• Liderazgo</p>
        <p className="font-bold text-left">• Comunicativo</p>
        <p className="font-bold text-left">• Trabajador en equipo</p>
        <p className="font-bold text-left">• Nivel medio en mecanografía</p>
        <p className="font-bold text-left">• Capaz de trabajar bajo presión</p>
        <p className="font-bold text-left">• Aprendo rápido</p>
        <p className="font-bold text-left">• Licencia de conducir B1</p>
      </div>
    )
  }
]

export default function Example() {
  return (
    <div className="flex h-screen w-full items-center justify-center pt-24 px-4">
      <div className="w-full max-w-lg">
        <TabGroup>
          <TabList className="flex gap-4">
            {categories.map(({ name }) => (
              <Tab
                key={name}
                className="w-1/3 rounded-full py-2 px-4 text-lg font-semibold text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-2 data-[focus]:outline-white"
              >
                {name}
              </Tab>
            ))}
          </TabList>
          <TabPanels className="mt-5">
            {categories.map(({ name, content }) => (
              <TabPanel key={name} className="w-full rounded-xl bg-white/10 p-5">
                {content}
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  )
}
