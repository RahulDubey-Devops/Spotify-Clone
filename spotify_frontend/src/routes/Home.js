import { Icon } from "@iconify/react/dist/iconify.js";
import spotify_logo from "../assets/images/spotify_logo_white.svg";
import IconText from "../Component/shared/IconText";
function Home() {
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
                    </div>
                    <div className="pt-6">
                        <IconText iconName={"icon-park-solid:add"} displayText="Crete Playlist" />
                        <IconText iconName={"mdi:cards-heart"} displayText="Liked Songs" />
                    </div>
                </div>
                <div className="p-5">
                    <div
                        className="flex items-center justify-center w-2/5 px-2 py-1 space-x-3 text-sm font-semibold text-white border border-gray-100 rounded-full cursor-pointer hover:border-white transition"
                    >
                        <Icon icon="uil:globe" width="20" height="24" />
                        <span>English</span>
                    </div>
                </div>

            </div>
            {/* This will be right part */}
            <div className="h-full">

            </div>
        </div >
    )
}

export default Home;