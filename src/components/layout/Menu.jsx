import React from "react";
import { Link } from "@mui/material";

export default function Menu({ translate }) {
    // const router = useRouter()

    const menus = translate("menu", { returnObjects: true });

    return (
        <>
            <ul className="navigation clearfix">
                {menus.map((menu, index) => {
                    return (
                        <li key={index} className="dropdown"><Link href={menu.href != undefined ? menu.href : "/"}>{menu.titulo}</Link>
                            <ul>
                                {menu.subMenu.map((subMenu, i) => {
                                    return (
                                        <li key={i}><Link href={subMenu.href}>{subMenu.titulo}</Link></li>
                                    );
                                })}
                            </ul>
                        </li>
                    );
                })}
            </ul >

        </>
    )
}
