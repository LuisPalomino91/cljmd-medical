import React from "react";
import { Link } from "@mui/material";

export default function Menu({ translate }) {
    // const router = useRouter()

    const menus = translate("menu", { returnObjects: true });

    return (
        <>
            <ul className="navigation clearfix">
                {menus.map((menu) => {
                    return (
                        <li className="dropdown"><Link href={menu.href != undefined ? menu.href : "/"}>{menu.titulo}</Link>
                            <ul>
                                {menu.subMenu.map((subMenu) => {
                                    return (
                                        <li><Link href={subMenu.href}>{subMenu.titulo}</Link></li>
                                    );
                                })}
                            </ul>
                        </li>
                    );
                })}
                {/*<li className="dropdown"><Link href="/">Conocenos</Link>
                    <ul>
                        <li><Link href="/nosotros">¿Quienes somos?</Link></li>
                        <li><Link href="/testimonios">Testimonios</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="/">Servicios</Link>
                    <ul>
                        <li><Link href="/general">Consulta General</Link></li>
                        <li><Link href="/diabetes">Diabetes</Link></li>
                        <li><Link href="/hipertension">Hipertension</Link></li>
                        <li><Link href="/nutricion">Nutricion</Link></li>
                    </ul>
                </li>
                <li><Link href="/">Promociones</Link></li>
                <li><Link href="/contacto">Contactanos</Link></li>*/}
            </ul >

        </>
    )
}
