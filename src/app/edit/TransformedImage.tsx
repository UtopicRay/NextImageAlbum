'use client'
import {CldImage} from "next-cloudinary";
import {TransformOption} from "@/types";

export default function TransformedImage({transformation,public_id}:{transformation:TransformOption,public_id:string}){
    return (
        <div className='flex flex-col gap-y-3 bg-gray-700 rounded-lg items-center p-4'>
            <h3>Result Image</h3>
            {transformation == 'generate-fill' && (
                <CldImage alt='result_image' className='rounded-lg' src={public_id} width='300' height='400'
                          fillBackground/>
            )}
            {transformation == 'grayscale' && (
                <CldImage alt='result_image' className='rounded-lg' src={public_id} width='300' height='400'
                          grayscale/>
            )}
            {transformation == 'pixelate' && (
                <CldImage alt='result_image' className='rounded-lg' src={public_id} width='300' height='400'
                          pixelate={true}/>
            )}
            {transformation == 'crop' && (
                <CldImage alt='result_image' className='rounded-lg' src={public_id} width='300' height='400'
                          crop='fill'/>
            )}
        </div>
    )
}