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
import {useState} from "react";
import {ImageAPI} from "@/types";
import {Trash} from "lucide-react";
import {deleteImage} from "@/hooks/use-actions";
import {useRouter} from "next/navigation";
import {toast} from "@/hooks/use-toast";

export default function DeleteDialog({image}: { image: ImageAPI }) {
    const [open, setOpen] = useState<boolean>(false);
    const router = useRouter();

   async function handleClick(){
       await deleteImage(image.public_id)
       setOpen(false)
       toast({
           description: "Successfully deleted image",
       })
       setTimeout(()=> {
           router.refresh()
       },2000)
   }
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger className='w-full'>
                <Button variant="ghost" className='flex justify-start w-full'>
                    <Trash className='mr-4'></Trash>
                    <span>Delete</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] flex flex-col gap-7">
                <DialogHeader>
                    <DialogTitle>Delete Image</DialogTitle>
                    <DialogDescription>
                        Are you sure you want to delete this image?
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button type="submit" onClick={() => setOpen(false)}>Cancel</Button>
                    <Button type="submit" onClick={handleClick}> <Trash></Trash>
                        <span>Delete</span></Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
