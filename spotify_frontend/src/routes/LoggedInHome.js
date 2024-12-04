import { Icon } from "@iconify/react/dist/iconify.js";
import spotify_logo from "../assets/images/spotify_logo_white.svg";
import IconText from "../Component/shared/IconText";
import TextWithHover from "../Component/shared/TextWithHover";

const focusCardData = [{
    title: "Peaceful Piano",
    description: "Relex and indulge with beautifull piano.",
    url: "https://images.unsplash.com/photo-1470019693664-1d202d2c0907?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{ title: "Deep Focus", description: "Keep Calm and Focus.", url: "https://images.unsplash.com/photo-1453748866136-b1dd97284f49?q=80&w=2018&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", },
{ title: "Instrumental Study", description: "Focus with soft study music in the background", url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
{ title: "Focus Flow", description: "Up tempo instrumental hip hop beats. ", url: "https://images.unsplash.com/photo-1443188631128-a1b6b1c5c207?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
{ title: "Beats to think to", description: "Focus with deep techno and teach house", url: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];
function LoggedInHome() {
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

                    <PlayListView titlText={"Focus"} cardsData={focusCardData} />

                    <PlayListView titlText={"Spotify Playlist"} cardsData={focusCardData} />

                    <PlayListView titlText={"Sound of India"} cardsData={focusCardData} />
                </div>
            </div>
        </div >
    )
}

const PlayListView = ({ titlText, cardsData }) => {
    return (
        <div className="text-white mt-8">
            <div className="text-2xl font-semibold mb-5">{titlText}</div>
            <div className="w-full flex justify-between space-x-4">
                {
                    cardsData.map(item => {
                        return <Card title={item.title} description={item.description} url={item.url} />
                    })
                }
            </div>
        </div>
    )
}

const Card = ({ title, description, url }) => {
    return (
        <div className="bg-black bg-opacity-40 w-1/5 p-4 rounded-lg">
            <div className="pb-4 pt-2">
                <img className="w-full rounded-md " src={url} alt="Image"></img>
            </div>
            <div className="text-white  font-semibold py-3">
                {title}
            </div>
            <div className="text-gray-500 text-sm">
                {description}
            </div>
        </div>
    )
}


export default LoggedInHome;