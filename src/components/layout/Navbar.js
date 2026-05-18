export default function Navbar() {
  return (
    <div className="navbar bg-white shadow-sm">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            {/*Esto es para hacer responsive la página.*/}
             <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li><a className="transition-colors duration-200 hover:bg-[#3496ca] hover:text-white rounded-md px-2 py-1">¿Quiénes somos?</a></li>
                <li>
                <a></a>
                <ul className="p-2 bg-white rounded-box shadow-sm">
                    <li><a className="transition-colors duration-200 hover:bg-[#3496ca] hover:text-white rounded-md px-2 py-1 block">Historia</a></li>
                    <li><a className="transition-colors duration-200 hover:bg-[#3496ca] hover:text-white rounded-md px-2 py-1 block">Sobre nosotros</a></li>
                </ul>
                </li>
                <li><p className="transition-colors duration-200 hover:bg-[#3496ca] hover:text-white rounded-md px-2 py-1">Programas y proyectos</p></li>
                <li>
                <a></a>
                <ul className="p-2 bg-white rounded-box shadow-sm">
                    <li><a className="transition-colors duration-200 hover:bg-[#3496ca] hover:text-white rounded-md px-2 py-1 block">Desarrollo social</a></li>
                    <li><a className="transition-colors duration-200 hover:bg-[#3496ca] hover:text-white rounded-md px-2 py-1 block">Desarrollo económico</a></li>
                    <li><a className="transition-colors duration-200 hover:bg-[#3496ca] hover:text-white rounded-md px-2 py-1 block">Otros proyectos</a></li>
                </ul>
                </li>
                <li><a className="transition-colors duration-200 hover:bg-[#3496ca] hover:text-white rounded-md px-2 py-1">Transparencia</a></li>
            </ul>
            
                {/*Esto es para hacer responsive pantallas grandes.*/}
            </div>
            <a className="flex items-center gap-3 ml-10" href="/">
              <img src="/logoviva.png" alt="Logo de la Fundación Viva Juntos por la Niñez" className="h-18 w-18 mb-1 mt-1"/>
            </a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-slate-900">
            <li>
                <details>
                <summary className="transition-colors duration-200 text-lg font-semibold hover:bg-[#233E99] hover:text-white rounded-md px-3 py-2 ml-5">¿Quiénes somos?</summary>
                <ul className="p-2 bg-white border border-slate-200 w-40 z-1 shadow-sm rounded-md">
                    <li><a className="transition-colors duration-200 hover:bg-[#3496ca] hover:text-white rounded-md px-3 py-2 block" href="/quienes-somos/historia">Historia</a></li>
                    <li><a className="transition-colors duration-200 hover:bg-[#3496ca] hover:text-white rounded-md px-3 py-2 block" href="/quienes-somos/sobre-nosotros">Sobre nosotros</a></li>
                </ul>
                </details>
            </li>
            <li>
                <details>
                <summary className="transition-colors duration-200 text-lg font-semibold hover:bg-[#233E99] hover:text-white rounded-md px-3 py-2 ml-5">Proyectos y programas</summary>
                <ul className="p-2 bg-white border border-slate-200 w-40 z-1 shadow-sm rounded-md">
                    <li><a className="transition-colors duration-200 hover:bg-[#3496ca] hover:text-white rounded-md px-3 py-2 block" href="/programas-y-proyectos/desarrollo-social">Desarrollo social</a></li>
                    <li><a className="transition-colors duration-200 hover:bg-[#3496ca] hover:text-white rounded-md px-3 py-2 block" href="/programas-y-proyectos/desarrollo-economico">Desarrollo económico</a></li>
                    <li><a className="transition-colors duration-200 hover:bg-[#3496ca] hover:text-white rounded-md px-3 py-2 block" href="/programas-y-proyectos/otros-proyectos">Otros proyectos</a></li>
                </ul>
                </details>
            </li>
            <li><a className="transition-colors duration-200 text-lg font-semibold hover:bg-[#233E99] hover:text-white rounded-md px-6 py-2 ml-8" href="/transparencia">Transparencia</a></li>
            </ul>
        </div>
        <div className="navbar-end pr-8">
            <a className="btn text-lg font-semibold hover:bg-[#f5ec3f] hover:text-slate-900 bg-[#233E99] text-white" href="/donar">Donar</a>
        </div>
    </div>
  );
}