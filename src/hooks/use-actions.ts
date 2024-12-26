'use server'
import {revalidatePath} from "next/cache";
import {ImageAPI} from "@/types";
import PhotoApi from "@/lib/PhotoApi";

export async function setAsFavorite(public_id: string, isFavorite?: boolean) {
    if (isFavorite) {
        await PhotoApi.api.update(public_id, {tags: ''})
    } else {
        await PhotoApi.api.update(public_id, {tags: 'favorite'})
    }
    revalidatePath("/gallery");
}

export async function AddToAlbum({image, folder}:{image:ImageAPI,folder:string}) {
    await PhotoApi.api.create_folder(folder);
    await PhotoApi.api.update(image.public_id, { asset_folder:`${folder}`
}).then(result=>console.log(result));
}
export async function deleteImage(public_id:string): Promise<void> {
    await PhotoApi.api.delete_resources([public_id]);
}

export async function deleteAlbum(folder: string) {
    const images = await PhotoApi.api.resources_by_asset_folder(folder) as {
        resources: ImageAPI[]
    };
    if (images) {
        images.resources.forEach(async (image: ImageAPI) => {
            await PhotoApi.api.update(image.public_id, { asset_folder:`/`}).then(results => {console.log(results);});
        })
    }
    await PhotoApi.api.delete_folder(folder);
}