import UploadButton from "@/components/UploadButton";
import ImagesGrid from "@/components/ImagesGrid";
import CloudinaryImage from "@/components/CloudinaryImage";
import {loadImagesByAlbum} from "@/hooks/loadData";

export default async function AlbumName({params,}:{params: Promise<{albumName:string}>})
{
    const albumName=(await params).albumName
    const images = await loadImagesByAlbum(albumName)
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