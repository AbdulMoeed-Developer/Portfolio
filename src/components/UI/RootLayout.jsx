import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "../../utils/ScrollToTop";

export default function RootLayout(){
    return(
        <>
            <Navbar/>
            <ScrollToTop/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}