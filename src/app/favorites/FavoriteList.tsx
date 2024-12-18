'use client'
import CloudinaryImage from "@/components/CloudinaryImage";
import {ImageAPI} from "@/types";
import {useState} from "react";
import ImagesGrid from "@/components/ImagesGrid";

export default function FavoriteList({resources}: { resources: ImageAPI[] }) {
    const [resourceList, setResourceList] = useState<ImageAPI[]>(resources);
    return (
        <ImagesGrid images={resourceList} getImage={
            (imageData) => {
                return (
                    <CloudinaryImage key={imageData.public_id} imageData={imageData}
                                     unHeart={(unHeartResource: ImageAPI) => {
                                         setResourceList((currentResources) =>
                                             currentResources.filter(
                                                 (resource) => resource.public_id !== unHeartResource.public_id
                                             )
                                         );
                                     }}
                    />
                )
            }
        }>
        </ImagesGrid>
    );
}