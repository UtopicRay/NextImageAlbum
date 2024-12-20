import FavoriteList from "@/app/favorites/FavoriteList";
import UploadButton from "@/components/UploadButton";
import {loadFavorites} from "@/hooks/loadData";

export default async function FavoritePage() {
    const results = await  loadFavorites({});
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