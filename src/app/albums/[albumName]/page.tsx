import cloudinary from "cloudinary";
import {ImageAPI} from "@/types";
import UploadButton from "@/components/UploadButton";
import ImagesGrid from "@/components/ImagesGrid";
import CloudinaryImage from "@/components/CloudinaryImage";

export default async function AlbumName({params: {albumName}}: { params: { albumName: string } })
{
    const images =await cloudinary.v2.api.resources_by_asset_folder(albumName,{fields:"tags"}) as {resources:ImageAPI[]};
    return (
        <section>
            <div className='flex justify-between'>
                <h1 className='text-4xl font-bold'>Album {albumName}</h1>
                <UploadButton/>
            </div>
            <ImagesGrid images={images.resources} getImage={(imageData) => {
                return (
                    <CloudinaryImage key={imageData.public_id} imageData={imageData}></CloudinaryImage>
                )
            }}>
            </ImagesGrid>
        </section>
    )
}