import UploadButton from "@/components/UploadButton";
import ImagesGrid from "@/components/ImagesGrid";
import CloudinaryImage from "@/components/CloudinaryImage";
import {Suspense} from "react";
import {LoaderCircle} from "lucide-react";
import SearchComponent from "@/components/SearchComponent";
import {loadSearchImages} from "@/hooks/loadData";

export default async function  GalleryPage({searchParams}:{searchParams:Promise<{tag?:string}>}) {
    const tag=(await searchParams).tag
    const results = await loadSearchImages({tag})

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