export type ImageAPI={
    public_id: string,
    tags: string[],
}
export type Folder = {
    name: string,
    path: string,
}
export type TransformOption = undefined | 'generate-fill' | "crop" | "grayscale" | "pixelate" | ""