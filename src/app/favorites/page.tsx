import cloudinary from "cloudinary";
import {ImageAPI} from "@/types";
import FavoriteList from "@/app/favorites/FavoriteList";
import UploadButton from "@/components/UploadButton";

export default async function FavoritePage() {
    const results = await cloudinary.v2.search.expression("tags=favorite").fields('tags').max_results(10)
        .execute() as { resources: ImageAPI[] };
    return (
        <section>
            <div className='flex justify-between'>
                <h1 className='text-4xl font-bold'>Favorites</h1>
                <UploadButton/>
            </div>
            <FavoriteList resources={results.resources}/>
        </section>
    );
}