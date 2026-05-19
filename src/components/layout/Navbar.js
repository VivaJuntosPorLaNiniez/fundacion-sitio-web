import Image from "next/image";
import Link from "next/link";
import { ChevronDown, HeartHandshake, Menu } from "lucide-react";

const primarySections = [
    {
        label: "¿Quiénes somos?",
        items: [
            { label: "Historia", href: "/quienes-somos/historia" },
            { label: "Sobre nosotros", href: "/quienes-somos/sobre-nosotros" },
        ],
    },
    {
        label: "Programas y proyectos",
        items: [
            { label: "Desarrollo social", href: "/programas-y-proyectos/desarrollo-social" },
            { label: "Desarrollo económico", href: "/programas-y-proyectos/desarrollo-economico" },
            { label: "Otros proyectos", href: "/programas-y-proyectos/otros-proyectos" },
        ],
    },
];

const dropdownPanelClass =
    "dropdown-content z-50 mt-1 w-64 rounded-3xl border border-white/60 bg-white/95 p-3 shadow-[0_20px_60px_rgba(15,23,42,0.14)] backdrop-blur-xl";

const menuItemClass =
    "rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition duration-200 hover:bg-[#f5ec3f] hover:text-slate-950";

export default function Navbar() {
    return (
        <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 lg:px-6">
            <div className="overflow-visible rounded-b-[1.75rem] border border-white/70 bg-white/80 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl">
                <div className="h-1 w-full bg-linear-to-r from-[#2c439c] via-[#82c341] to-[#ee2e2b]" />
                <div className="navbar min-h-19 px-4 sm:px-6 lg:px-8">
                    <div className="navbar-start gap-3">
                        <div className="dropdown lg:hidden">
                            <label
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost btn-circle border border-slate-200 bg-white/80 text-slate-900 shadow-sm hover:border-[#f5ec3f] hover:bg-[#f5ec3f] hover:text-slate-950"
                            >
                                <Menu className="h-5 w-5" aria-hidden="true" />
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content z-50 mt-1 w-72 rounded-3xl border border-white/60 bg-white/95 p-3 shadow-[0_20px_60px_rgba(15,23,42,0.14)] backdrop-blur-xl">
                                <li>
                                    <details>
                                        <summary className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-[#f5ec3f] hover:text-slate-950">
                                            ¿Quiénes somos?
                                        </summary>
                                        <ul className="mt-2 space-y-1 pl-2">
                                            {primarySections[0].items.map((item) => (
                                                <li key={item.href}>
                                                    <Link className={menuItemClass} href={item.href}>
                                                        {item.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </details>
                                </li>
                                <li>
                                    <details>
                                        <summary className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-[#f5ec3f] hover:text-slate-950">
                                            Programas y proyectos
                                        </summary>
                                        <ul className="mt-2 space-y-1 pl-2">
                                            {primarySections[1].items.map((item) => (
                                                <li key={item.href}>
                                                    <Link className={menuItemClass} href={item.href}>
                                                        {item.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </details>
                                </li>
                                <li>
                                    <Link className={menuItemClass} href="/transparencia">
                                        Transparencia
                                    </Link>
                                </li>
                                <li className="pt-2">
                                    <Link
                                        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#f5ec3f] px-4 py-3 text-sm font-semibold text-slate-950 shadow-[0_10px_24px_rgba(245,236,63,0.35)] transition hover:-translate-y-0.5 hover:bg-[#ebe03f]"
                                        href="/donar"
                                    >
                                        <HeartHandshake className="h-4 w-4" aria-hidden="true" />
                                        Donar
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <Link href="/" className="flex items-center gap-3 rounded-full pr-2 transition-transform duration-200 hover:scale-[1.01]">
                            <Image
                                src="/logoviva.png"
                                alt="Logo de la Fundación Viva Juntos por la Niñez"
                                width={64}
                                height={64}
                                className="h-14 w-14 sm:h-16 sm:w-16"
                                priority
                            />
                            <div className="hidden sm:block leading-tight">
                                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-slate-500">
                                    Fundación Viva
                                </p>
                                <p className="text-sm font-semibold text-slate-900">
                                    Juntos por la Niñez
                                </p>
                            </div>
                        </Link>
                    </div>

                    <div className="navbar-center hidden lg:flex">
                        <ul className="flex items-center gap-2">
                            {primarySections.map((section) => (
                                <li key={section.label}>
                                    <div className="dropdown dropdown-hover dropdown-end">
                                        <button
                                            type="button"
                                            tabIndex={0}
                                            className="group inline-flex items-center gap-1 rounded-full px-4 py-2.5 text-[0.95rem] font-semibold text-slate-800 transition duration-200 hover:bg-[#f5ec3f] hover:text-slate-950 focus:bg-[#f5ec3f] focus:text-slate-950"
                                        >
                                            {section.label}
                                            <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" aria-hidden="true" />
                                        </button>
                                        <ul tabIndex={0} className={dropdownPanelClass}>
                                            {section.items.map((item) => (
                                                <li key={item.href}>
                                                    <Link className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition duration-200 hover:bg-[#f5ec3f] hover:text-slate-950" href={item.href}>
                                                        {item.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                            ))}
                            <li>
                                <Link
                                    className="inline-flex items-center rounded-full px-4 py-2.5 text-[0.95rem] font-semibold text-slate-800 transition duration-200 hover:bg-[#f5ec3f] hover:text-slate-950"
                                    href="/transparencia"
                                >
                                    Transparencia
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="navbar-end gap-3">
                        <Link
                            className="inline-flex h-11 min-h-0 items-center gap-2 rounded-full border-0 bg-[#f5ec3f] px-5 py-2 text-sm font-semibold text-slate-950 shadow-[0_8px_0_#c6ba18,0_14px_24px_rgba(0,0,0,0.12)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#f5ec3f]"
                            href="/donar"
                        >
                            <HeartHandshake className="h-4 w-4" aria-hidden="true" />
                            Donar
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}