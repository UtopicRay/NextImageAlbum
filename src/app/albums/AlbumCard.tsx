import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";
import DeleteAlbumDialog from "@/app/albums/DeleteAlbumDialog";

export default function AlbumCard({name}:{name: string}) {
    return (
        <Card className="max-w-[350px]">
            <CardHeader>
                <CardTitle className='capitalize'>{name}</CardTitle>
                <CardDescription>See the all images on {name} folder.</CardDescription>
            </CardHeader>
            <CardContent>
            </CardContent>
            <CardFooter className="flex justify-between">
               <Link href={`/albums/${encodeURIComponent(name)}`}>
                   <Button>View Album</Button>
               </Link>
                <div className='flex gap-2'>
                   <DeleteAlbumDialog folder={name}></DeleteAlbumDialog>
                </div>
            </CardFooter>
        </Card>
    )
}