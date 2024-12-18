'use client'
import {CldImage} from "next-cloudinary";
import {Heart} from "lucide-react";
import {setAsFavorite} from "@/hooks/use-actions";
import {useState, useTransition} from "react";
import {useRouter} from "next/navigation";
import {ImageAPI} from "@/types";
import MenuImage from "@/components/MenuImage";


export default function CloudinaryImage({imageData,unHeart,atHome}:{imageData:ImageAPI,unHeart?:(resource:ImageAPI)=>void,atHome?:boolean}) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [transition, startTransition] = useTransition()
    const [isFavorited,setIsFavorited] = useState<boolean>(imageData.tags.includes("favorite"))
    const router = useRouter();
    return (
        <div className='relative rounded-lg w-full hover:scale-105 duration-200'>
            <CldImage className={`rounded-lg  ${atHome?"h-auto w-auto object-cover aspect-[3/4]":"h-auto max-w-full"}`} alt='image' src={imageData.public_id} width={400}
                      height={300}>
            </CldImage>
            <div className='absolute top-3 left-2'>
            <Heart className={`${isFavorited?'text-red-500 hover:text-blue-500':'text-blue-500 hover:text-red-500'}`}
                   fill={`${isFavorited ? 'red' : 'white'}`} onClick={() => {
                startTransition(async ()=>{
                    setIsFavorited(!isFavorited);
                    unHeart?.(imageData)
                    await setAsFavorite(imageData.public_id, isFavorited)
                    router.refresh()
                })
            }}/>
        </div>
            <MenuImage tags={imageData.tags} public_id={imageData.public_id} />
        </div>
    );
}