'use client'
import {Button} from "@/components/ui/button";
import {CldImage} from "next-cloudinary";
import {Suspense, useState} from "react";
import {TransformOption} from "@/types";
import TransformedImage from "@/app/edit/TransformedImage";

export default function EditPanel({public_id}: { public_id: string }) {
    const [transformation, setTransformation] = useState<TransformOption>();
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex flex-row w-full gap-4'>
                <Button variant='ghost' className='text-lg font-bold' onClick={() => setTransformation(undefined)}>Clear
                    All</Button>
                <Button variant='default' className='text-lg font-bold'
                        onClick={() => setTransformation('generate-fill')}>
                    Generate Fill
                </Button>

                <Button variant='default' className='text-lg font-bold' onClick={() => setTransformation('crop')}>
                    Crop the image
                </Button>
                <Button variant='default' className='text-lg font-bold' onClick={() => setTransformation('grayscale')}>
                    Convert to gray
                </Button>
                <Button variant='default' className='text-lg font-bold' onClick={() => setTransformation('pixelate')}>
                    Make Pixelate
                </Button>
            </div>
            <div className='flex gap-16 justify-center items-center'>
                <div className='flex flex-col gap-y-3 bg-gray-700 p-4 rounded-lg justify-center items-center'>
                    <h3>Original Image</h3>
                    <CldImage alt='orignal_image' className='rounded-lg' src={public_id} width='300' height='300'
                              sizes='100vw'/>
                </div>
                <Suspense fallback={<p>isLoading</p>}>
                    {transformation != undefined && <TransformedImage transformation={transformation} public_id={public_id}/>}
                </Suspense>
                </div>
        </div>
    )
}