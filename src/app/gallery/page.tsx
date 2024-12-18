import UploadButton from "@/components/UploadButton";
import cloudinary from "cloudinary";
import {ImageAPI} from "@/types";
import ImagesGrid from "@/components/ImagesGrid";
import CloudinaryImage from "@/components/CloudinaryImage";
import {Suspense} from "react";
import {LoaderCircle} from "lucide-react";
import SearchComponent from "@/components/SearchComponent";

export default async function  GalleryPage({searchParams: {tag}}:{searchParams:{tag?:string}}) {
    console.log(tag);
    const results = await cloudinary.v2.search.expression(`${tag?`tags=${tag}`:""}`).fields('tags').execute() as { resources: ImageAPI[] }

    return(
        <section>
            <div className='flex justify-between'>
                <h1 className='text-4xl font-bold'>Gallery</h1>
                <UploadButton/>
            </div>
           <SearchComponent/>
            <Suspense fallback={<LoaderCircle/>}>
                <ImagesGrid images={results.resources} getImage={(imageData) => {
                    return (
                        <CloudinaryImage key={imageData.public_id} imageData={imageData}></CloudinaryImage>
                    )
                }}>
                </ImagesGrid>
            </Suspense>
        </section>
    )
}