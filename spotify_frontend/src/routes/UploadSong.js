

import { Icon } from "@iconify/react/dist/iconify.js";
import spotify_logo from "../assets/images/spotify_logo_white.svg";
import IconText from "../Component/shared/IconText";
import TextWithHover from "../Component/shared/TextWithHover";
import TextInput from "../Component/shared/TextInput";

function UploadSong() {
    return (
        <div className="w-full h-full flex">
            {/* This will be left part */}
            <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-10">
                <div>
                    {/* This div is for logo */}
                    <div className="logoDiv p-6">
                        <img src={spotify_logo} alt="spotify_logo" width={125} />
                    </div>
                    <div className="py-5">
                        <IconText iconName={"oi:home"} displayText="Home" active />
                        <IconText iconName={"material-symbols:search"} displayText="Search" />
                        <IconText iconName={"lineicons:books-2"} displayText="Library" />
                        <IconText iconName={"material-symbols:library-music-sharp"} displayText="My Music" />
                    </div>
                    <div className="pt-5">
                        <IconText iconName={"icon-park-solid:add"} displayText="Crete Playlist" />
                        <IconText iconName={"mdi:cards-heart"} displayText="Liked Songs" />
                    </div>
                </div>
                <div className="px-5">
                    <div
                        className="flex items-center justify-center w-2/5 px-2 py-1 space-x-3 text-sm font-semibold text-white border border-gray-100 rounded-full cursor-pointer hover:border-white transition"
                    >
                        <Icon icon="uil:globe" width="20" height="24" />
                        <div className="ml-2 text-sm font-semibold">
                            English
                        </div>
                    </div>
                </div>

            </div>
            {/* This will be right part */}
            <div className="h-full w-4/5 bg-app-black overflow-auto">
                <div className="navbar flex w-full h-1/10 bg-black bg-opacity-30 items-center justify-end">
                    <div className="w-1/2 flex h-full" >
                        <div className="w-2/3 flex items-center justify-around">
                            <TextWithHover displayText={"Premium"} />
                            <TextWithHover displayText={"Support"} />
                            <TextWithHover displayText={"Downloads"} />
                            <div className="h-1/2 border-r border-white">

                            </div>
                        </div>
                        <div className="flex w-1/3 h-full items-center
                        justify-around">
                            <TextWithHover displayText={"Upload Song"} />
                            <div className="bg-white w-10 h-10 px-8 rounded-full flex items-center justify-center font-semibold cursor-pointer">
                                RD
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content p-8 pt-0 overflow-auto ">
                    <div className=" text-2xl fot-semibold mb-5 text-white">Upload Your Music</div>
                </div>
                <div className=" w-2/3 flex space-x-3">
                    <div className="w-1/2">
                        <TextInput label={"Name"} labelClassName={'text-white'}
                        placeholder={"Name"}
                        />
                    </div>
                    < div className="w-1/2">
                        <TextInput label={"Thumbnail"} placeholder={"Thumbnail"} labelClassName={'text-white'}/>
                    </div>
                </div>
            </div >
        </div>
    )
}



export default UploadSong;