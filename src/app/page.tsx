import {Tabs, TabsContent,} from "@/components/ui/tabs"
import {ScrollArea, ScrollBar} from '@/components/ui/scroll-area'
import {Separator} from "@/components/ui/separator";
import UploadButton from "@/components/UploadButton";
import cloudinary from "cloudinary";
import {Folder, ImageAPI} from "@/types";
import AlbumCard from "@/app/albums/AlbumCard";
import ScrollBarFavorites from "@/components/ScrollBarFavorites";
import {loadAlbums} from "@/hooks/loadData";

export default  async function Home() {
  const favorites = await cloudinary.v2.search.fields('tags').sort_by('created_at', 'desc').max_results(5)
      .execute() as { resources: ImageAPI[] };
  const {folders} = await loadAlbums()
  return (
      <div className="col-span-3 lg:col-span-4 lg:border-l w-full">
        <div className="h-full px-4 py-6 lg:px-8">
          <Tabs defaultValue="music" className="h-full space-y-6">
            <div className='flex justify-between'>
              <h1 className='text-4xl font-bold'>Home</h1>
              <UploadButton/>
            </div>
            <TabsContent
                value="music"
                className="border-none p-0 outline-none"
            >
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Recients Images
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    View the recents images
                  </p>
                </div>
              </div>
              <Separator className="my-4"/>
              <ScrollBarFavorites favorites={favorites.resources}/>
              <div className="mt-6 space-y-1">
                <h2 className="text-2xl font-semibold tracking-tight">
                  Access to your Albums
                </h2>
                <p className="text-sm text-muted-foreground">
                  See quickly some albums.
                </p>
              </div>
              <Separator className="my-4"/>
              <div className="relative">
                <ScrollArea>
                  {folders.length>0 ? (
                      <div className="flex space-x-4 pb-4">
                        {
                          folders.map((folder: Folder) => (
                              <AlbumCard key={folder.path} name={folder.name}/>
                          ))
                        }
                      </div>) : (
                      <div className='mt-4'>
                        <h2 className='text-4xl'>No albums yet</h2>
                      </div>
                  )}
                  <ScrollBar orientation="horizontal"/>
                </ScrollArea>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
  );
}
