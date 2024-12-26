'use server'
import {ImageAPI} from "@/types";
import PhotoApi from "@/lib/PhotoApi";


export async function loadAlbums() {
    return await PhotoApi.api.root_folders();
}

export async function loadImagesByAlbum(albumName: string) {
    return await PhotoApi.api.resources_by_asset_folder(albumName, {fields: "tags"}) as { resources: ImageAPI[] };
}

export async function loadFavorites({max_results}: { max_results?: number }) {
    if (max_results) {
        return await PhotoApi.search.expression("tags=favorite").fields('tags').sort_by('created_at', 'desc').max_results(max_results).execute() as {
            resources: ImageAPI[]
        };
    }
    return await PhotoApi.search.expression("tags=favorite").fields('tags').sort_by('created_at', 'desc').execute() as {
        resources: ImageAPI[]
    };
}

export async function loadSearchImages({tag, max_result}: { tag?: string, max_result?: number }) {
    if (max_result) {
        return await PhotoApi.search.expression(`${tag ? `tags=${tag}` : ""}`).fields('tags').sort_by('created_at', 'desc').max_results(max_result).execute() as {
            resources: ImageAPI[]
        }
    }
    return await PhotoApi.search.expression(`${tag ? `tags=${tag}` : ""}`).fields('tags').sort_by('created_at', 'desc').execute() as {
        resources: ImageAPI[]
    }
}
