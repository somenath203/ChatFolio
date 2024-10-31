import Link from "next/link";
import { ImGithub } from "react-icons/im";


const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-center text-white bg-slate-800">

        <div className="w-11/12 flex items-center justify-between mt-8">

            <p className="text-green-100 text-3xl font-bold tracking-wider">ChatFolio</p>

            <Link href='https://github.com/somenath203/ChatFolio' target="_blank">

              <ImGithub className="size-8 text-green-100" />

            </Link>

        </div>

    </div>
  )
}

export default Navbar;