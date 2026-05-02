import Slider from '@/components/Slider';

export default function Home() {
  return (
    <main>
      {/* Slider automático con 4 imágenes */}
      <Slider />

      <div className="px-4 sm:px-10 md:px-10 lg:px-20 ">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mt-6 sm:mt-8 md:mt-10">
          Viva Juntos Por la Niñez
        </h1>
        <br></br>
          

          <div className="card lg:card-side bg-base-100 shadow-sm p-8 max-h-100 max-w-5xl center mx-auto  "> {/*Modifico la carta*/}
  <figure className="p-2">
    <img
      src="/quien.jpg"
      alt="¿Quiénes somos?"
      className="rounded-xl p-2"
    />
  </figure>
  <div className="card-body  ml-5"> {/*Modifico la imagen*/}
    <h2 className="card-title ml-10">¿Quiénes somos?</h2>
    <p className='ml-10' >Somos una ONG, orientada hacia un enfoque de derechos 
      de la niñez, para contribuir al bienestar y desarrollo
       integral de niñas, niños, adolescentes y sus familias.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary ">Leer más</button>
    </div>
  </div>
</div>

        
      </div>
        <br></br>
    </main>
  )
}