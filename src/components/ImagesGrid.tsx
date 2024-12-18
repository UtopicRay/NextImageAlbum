import {ImageAPI} from "@/types";
import {ReactNode} from "react";

export default function ImagesGrid({images, getImage}: {
    images: ImageAPI[],
    getImage: (imageData: ImageAPI) => ReactNode
}) {
    const MAX_COLUMN = 4;

    function getColumns(column: number) {
        return images.filter(
            (resource, index) => index % MAX_COLUMN === column
        )
    }

    return (
        <div className='grid grid-cols-4 gap-4'>
            {
                [
                    getColumns(0),
                    getColumns(1),
                    getColumns(2),
                    getColumns(3)
                ].map((column, index) => (
                    <div key={index} className='flex flex-col gap-3'>
                        {column.map((result) => (
                            getImage(result)
                        ))}
                    </div>))
            }
        </div>
    )
}