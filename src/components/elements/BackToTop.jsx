import { Link } from "@mui/material";

export default function BackToTop({ scroll }) {

    return (
        <>
            {scroll && (
                <Link className="scroll-to-top scroll-to-target d-block" href="#top">
                    <i className="fas fa-angle-up"></i>
                </Link> 
            )}
        </>
    )
}
