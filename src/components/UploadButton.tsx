"use client"
import {Button} from "@/components/ui/button";
import {Upload} from "lucide-react";
import {CldUploadButton} from "next-cloudinary";
import {useRouter} from "next/navigation";

export default function UploadButton(){
    const router = useRouter()
    return(
            <Button asChild>
                    <CldUploadButton className='flex gap-2 items-center' uploadPreset={`ymik0prr`}
                    onSuccess={()=>{
                        setTimeout(()=> {
                            router.refresh()
                            console.log('refresh')
                        },3000)
                    }}>
                        <Upload/>
                        <p>Upload</p>
                    </CldUploadButton>
            </Button>
    )
}