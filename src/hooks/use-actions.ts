'use server'
import {revalidatePath} from "next/cache";
import {ImageAPI} from "@/types";
import cloudinaryAPI from "@/lib/cloudinaryAPI";

export async function setAsFavorite(public_id: string, isFavorite?: boolean) {
    if (isFavorite) {
        await cloudinaryAPI.api.update(public_id, {tags: ''})
    } else {
        await cloudinaryAPI.api.update(public_id, {tags: 'favorite'})
    }
    revalidatePath("/gallery");
}

export async function AddToAlbum({image, folder}:{image:ImageAPI,folder:string}) {
    await cloudinaryAPI.api.create_folder(folder);
    await cloudinaryAPI.api.update(image.public_id, { asset_folder:`${folder}`
}).then(result=>console.log(result));
}
export async function deleteImage(public_id:string): Promise<void> {
    await cloudinaryAPI.api.delete_resources([public_id]);
}

export async function deleteAlbum(folder: string) {
    const images = await cloudinaryAPI.api.resources_by_asset_folder(folder) as {
        resources: ImageAPI[]
    };
    if (images) {
        images.resources.forEach(async (image: ImageAPI) => {
            await cloudinaryAPI.api.update(image.public_id, { asset_folder:`/`}).then(results => {console.log(results);});
        })
    }
    await cloudinaryAPI.api.delete_folder(folder);
}