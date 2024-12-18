import {ScrollArea, ScrollBar} from "@/components/ui/scroll-area";
import {ImageAPI} from "@/types";
import CloudinaryImage from "@/components/CloudinaryImage";

export default function ScrollBarFavorites({favorites}: { favorites: ImageAPI[] }) {
    return (
        <div className="relative">
            <ScrollArea>
                <div className="flex space-x-4 pb-4">
                    {favorites.map(favorites => (
                        <CloudinaryImage imageData={favorites} key={favorites.public_id} atHome={true}/>
                    ))}
                </div>
                <ScrollBar orientation="horizontal"/>
            </ScrollArea>
        </div>)
}
