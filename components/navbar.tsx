import Container from "@/components/container";
import Link from "next/link";
import MainNav from "@/components/ui/main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "@/components/navbar-actions";

export const revalidate = 0 ;
const Navbar = async () =>{
    const categoriees = await getCategories();
    return(
        <div className="border-b">
            <Container>
               <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
                    <Link href={'/'} className="ml-4 flex lg:ml-0 gap-x-2">
                    <p className="font-bold text-xl">RestroBar</p>
                </Link>
                    <MainNav data={categoriees}/>
                   <NavbarActions/>
               </div>
            </Container>
        </div>
    );
}
export default Navbar;