import UploadButton from "@/components/UploadButton";
import EditPanel from "@/app/edit/EditPanel";

export default async function EditPage({searchParams: {publicId}}: {
    searchParams: {
        publicId: string,
    }
}) {
    return (
        <section>
            <div className='flex justify-between'>
                <h1 className='text-4xl font-bold'>Edit Image/{publicId}</h1>
                <UploadButton/>
            </div>
            <EditPanel public_id={publicId}/>
        </section>
    )
}