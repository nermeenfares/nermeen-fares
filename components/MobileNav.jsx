"use client";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
const links = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Resume", path: "/resume" },
  { name: "Work", path: "/work" },
  { name: "Contact", path: "/contact" },
];
const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
      {/* logo */}
      <div className="mt-32 mb-40 text-center text-2xl ">
      <Link href="/">
        <h1 className="text-4xl font-semibold">
          Nermeen <span className="text-accent-hover">.</span>
        </h1>
      </Link>
      </div>
      {/* nav */}
        <nav className="flex flex-col  justify-center items-center gap-8">
          {links.map((link,index)=>{
            return <Link key={index} href={link.path} className={`${link.path===pathname && "text-accent-hover border-accent-hover border-b-2 border-accent"} capitalize text-xl  hover:text-accent-hover transition-all`} >
            {link.name}
            </Link>
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
