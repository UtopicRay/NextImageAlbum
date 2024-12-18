'use client'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Trash} from "lucide-react";
import {useState} from "react";
import {deleteAlbum} from "@/hooks/use-actions";
import {useRouter} from "next/navigation";
import {toast} from "@/hooks/use-toast";

export default function DeleteAlbumDialog({folder}: { folder: string }) {
    const [open, setOpen] = useState<boolean>(false);
    const router = useRouter();
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
                <Button>
                    <Trash></Trash> Delete
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] flex flex-col gap-7">
                <DialogHeader>
                    <DialogTitle>Delete Album</DialogTitle>
                    <DialogDescription>
                        Are you sure you want to delete this album?
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button type="submit" onClick={async () => {
                        await deleteAlbum(folder)
                        setOpen(false);
                        toast({
                            description: "Successfully deleted album",
                        })
                        setTimeout(() => {
                            router.refresh()
                        }, 2000)
                    }}>Delete Album</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}