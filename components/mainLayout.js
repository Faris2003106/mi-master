import Footer from "./footer"
import Header from "./header"

export default function mainLayout (props) {
    return(
        <>
        <Header/>
            {props.children}
        <Footer/>
        </>
    )
}