'use client'
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useState} from "react";
import {useRouter} from "next/navigation";

export default function SearchComponent() {
    const [searchTag, setSearchTag] = useState<string>('');
    const router = useRouter();

    function handleClick(e: { preventDefault: () => void; }) {
        e.preventDefault();
        if (searchTag != '') {
            router.replace(`/gallery?tag=${encodeURIComponent(searchTag)}`);
        }else{
            router.replace('/gallery');
        }
    }

    return (
        <form onSubmit={handleClick}>
            <Label htmlFor='tag'>Search by tag</Label>
            <div className='flex items-center gap-x-2'>
                <Input id="tag"
                       defaultValue=""
                       className="col-span-3"
                       onChange={(e) => setSearchTag(e.target.value)}
                ></Input>
                <Button type='submit'>Search</Button>
            </div>
        </form>
    )
}