import UploadButton from "@/components/UploadButton";
import {Folder} from "@/types";
import AlbumCard from "@/app/albums/AlbumCard";
import {loadAlbums} from "@/hooks/loadData";


export default async function AlbumPage() {
    const {folders} = await loadAlbums()
    return (
        <section>
            <div className='flex justify-between'>
                <h1 className='text-4xl font-bold'>Albums</h1>
                <UploadButton/>
            </div>
            {folders.length > 0 ? (
                <div className='grid grid-cols-3 gap-4'>
                    {folders.map((folder: Folder) => (
                        <AlbumCard key={folder.path} name={folder.name}></AlbumCard>
                    ))}
                </div>
            ) : (
                <div className='mt-4'>
                    <h2 className='text-4xl'>No albums yet</h2>
                </div>
            )}
        </section>
    )
}