'use server'
import cloudinary from "cloudinary";
import {ImageAPI} from "@/types";

const cloudinaryAPI =cloudinary.v2

export async function loadAlbums() {
    return await cloudinaryAPI.api.root_folders();
}

export async function loadImagesByAlbum(albumName: string) {
    return await cloudinaryAPI.api.resources_by_asset_folder(albumName, {fields: "tags"}) as { resources: ImageAPI[] };
}

export async function loadFavorites({max_results}: { max_results?: number }) {
    if (max_results) {
        return await cloudinaryAPI.search.expression("tags=favorite").fields('tags').sort_by('created_at', 'desc').max_results(max_results).execute() as {
            resources: ImageAPI[]
        };
    }
    return await cloudinaryAPI.search.expression("tags=favorite").fields('tags').sort_by('created_at', 'desc').execute() as {
        resources: ImageAPI[]
    };
}

export async function loadSearchImages({tag, max_result}: { tag?: string, max_result?: number }) {
    if (max_result) {
        return await cloudinaryAPI.search.expression(`${tag ? `tags=${tag}` : ""}`).fields('tags').sort_by('created_at', 'desc').max_results(max_result).execute() as {
            resources: ImageAPI[]
        }
    }
    return await cloudinaryAPI.search.expression(`${tag ? `tags=${tag}` : ""}`).fields('tags').sort_by('created_at', 'desc').execute() as {
        resources: ImageAPI[]
    }
}
