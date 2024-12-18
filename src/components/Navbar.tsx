import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center w-full px-6 py-4 border-b-white border-2">
            <Link href='/' className='flex gap-3 items-center'>
                <Avatar>
                    <AvatarImage src={'/logo_album.png'}/>
                    <AvatarFallback>Logo</AvatarFallback>
                </Avatar>
                NEXT AlBUM</Link>
    </nav>)
}