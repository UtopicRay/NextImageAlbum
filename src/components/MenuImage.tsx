import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {Menu, Pencil} from "lucide-react";
import AddToAlbumDialog from "@/components/AddToAlbumDialog";
import {ImageAPI} from "@/types";
import Link from "next/link";
import DeleteDialog from "@/components/DeleteDialog";

export default function MenuImage(image: ImageAPI) {
    return (
        <div className='absolute top-3 right-2 '>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" className='w-8'>
                        <Menu/>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem asChild>
                        <AddToAlbumDialog image={image}/>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Button variant="ghost" className='w-full'>
                            <Link href={`/edit?publicId=${image.public_id}`} className='w-full flex gap-6 justify-between items-center'>
                                <Pencil className='ml-2'></Pencil>
                                <span className='text-left w-full'>Edit</span>
                            </Link>
                        </Button>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <DeleteDialog image={image}/>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}