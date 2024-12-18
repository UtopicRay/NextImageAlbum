import {Button} from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Folder} from "lucide-react";
import {AddToAlbum} from "@/hooks/use-actions";
import {useState} from "react";
import {ImageAPI} from "@/types";
import {toast} from "@/hooks/use-toast";

export default function AddToAlbumDialog({image}:{image:ImageAPI}) {
    const [folder,setFolder] = useState<string>("");
    const [open, setOpen] = useState<boolean>(false);
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
                <Button variant="ghost">
                    <Folder className='mr-4'/>
                    <span>Add to Album</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add to Album</DialogTitle>
                    <DialogDescription>
                        Type the image you want to move to a new album
                    </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-4 items-center gap-4 my-4">
                    <Label htmlFor="name" className="text-right">
                        Album
                    </Label>
                    <Input
                        id="album-name"
                        defaultValue=""
                        className="col-span-3"
                        onChange={(e) => setFolder(e.target.value)}
                    />
                </div>
                <DialogFooter>
                    <Button type="submit" onClick={async ()=> {
                        await AddToAlbum({image, folder})
                        setOpen(false);
                        toast({
                            description: "Successfully moved",
                        })
                    }}>Add to album</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}