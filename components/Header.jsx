import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white ">
    <div className="container mx-auto flex justify-between items-center">
    {/* //da el logo */}
        <Link href={"/"}>
            <h1 className="text-3xl font-bold">
                Nermeen <span className="text-accent-hover text-3xl font-bold">.</span>
            </h1>
        </Link>
        {/* desktop navvvvbaarrrrrrrrrrrrr */}
        <div className="hidden xl:flex items-center gap-8">
        <Nav/>
        <Link href={"/contact"}>
        <Button className="bg-accent-hover hover:bg-accent">
        Hire me
        </Button>
        </Link>
        </div>
{/* mobile navv */}
<div className="xl:hidden">
<MobileNav/>
</div>
</div>
</header>
  );
}

export default Header;
