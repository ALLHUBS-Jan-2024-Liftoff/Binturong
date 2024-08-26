import { HeaderFragment } from "./HeaderFragment"
import
    import { FooterFragment } from "./FooterFragment"


export const Layout2= () => {
    return (
        <div className="container">
            <HeaderFragment/>
            <main >
                <Outlet/>
            </main>
            <FooterFragment/>
        </div>
    )
}