export default function Footer() {
    return (
        <>
            <footer className="footer sm:footer-horizontal bg-[#b5bbd4] text-black p-10">
                <nav>
                    <h6 className="footer-title">Contacto</h6>
                    <a className="link link-hover" href="https://maps.app.goo.gl/yyUon3DspkJTiHhj6" target="_blank" rel="noopener noreferrer"><b>Ubicación:</b> Residencial San Luis calle Bernal Bis casa #37-A, 
                    <br/>
                    San Salvador, San Salvador, El Salvador</a>
                    <a className="link link-hover" href="mailto:fundacionvivajuntosporlaninez@gmail.com" target="_blank"><b>Email:</b> fundacionvivajuntosporlaninez@gmail.com</a>
                    <a className="link link-hover" href="tel:21249543"><b>Teléfono:</b> 2124-9543</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Fundación Viva Juntos por la Niñez</h6>
                    <a className="link link-hover" href="/quienes-somos/sobre-nosotros">Sobre nosotros</a>
                    <a className="link link-hover" href="/quienes-somos/historia">Historia</a>
                    <a className="link link-hover" href="/transparencia">Transparencia</a>
                    <a className="link link-hover" href="/donar">Donar</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover" href="/legal/terminos-y-condiciones">Términos y condiciones</a>
                    <a className="link link-hover" href="/legal/politica-de-privacidad">Política de privacidad</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Síguenos</h6>
                    <div className="grid grid-flow-col gap-2">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        className="fill-current">
                        <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.333v21.334C0 23.403.597 24 1.325 24H12.82v-9.294H9.692V11.01h3.127V8.414c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.797.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.696h-3.12V24h6.116C23.403 24 24 23.403 24 22.667V1.333C24 .597 23.403 0 22.675 0z" />
                        </svg>
                        <a className="link link-hover" href="https://www.facebook.com/profile.php?id=100064343365708" target="_blank" rel="noopener noreferrer">Facebook</a>
                    </div>
                    <div className="grid grid-flow-col gap-2 items-center">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        className="fill-current">
                        <rect x="1" y="1" width="22" height="22" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                        <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
                        </svg>
                        <a className="link link-hover" href="https://www.instagram.com/fundacion_viva/" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                                        <div className="grid grid-flow-col gap-2 items-center">
                                            <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            className="fill-current align-middle"
                                            style={{verticalAlign: 'middle', position: 'relative', top: '-2px'}}>
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.037-1.852-3.037-1.853 0-2.137 1.445-2.137 2.939v5.667H9.351V9h3.413v1.561h.049c.476-.9 1.637-1.852 3.369-1.852 3.602 0 4.269 2.37 4.269 5.455v6.288zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452z" />
                                            </svg>
                                            <a className="link link-hover" href="https://www.linkedin.com/company/fundaci-n-viva-juntos-por-la-ni-ez-el-salvador/?originalSubdomain=sv" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                        </div>
                    </nav>
                </footer>
                <footer className="footer bg-[#b5bbd4] px-10 py-4">
                <aside className="grid-flow-col items-center">
                    <img 
                    src="/logoviva.png" 
                    alt="Logo de la Fundación Viva Juntos por la Niñez" 
                    className="h-12 w-12"/>
                    <p>
                    &copy; 2026 Fundación Viva Juntos por la Niñez El Salvador.
                    <br />
                    Todos los derechos reservados.
                    </p>
                </aside>
            </footer>
        </>
    );
}