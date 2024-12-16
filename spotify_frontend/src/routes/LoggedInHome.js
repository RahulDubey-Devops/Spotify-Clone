import { Icon } from "@iconify/react/dist/iconify.js";
import { Howl } from "howler";
import spotify_logo from "../assets/images/spotify_logo_white.svg";
import IconText from "../Component/shared/IconText";
import TextWithHover from "../Component/shared/TextWithHover";
import { useState } from "react";
import LoggedInContainer from "../containers/LoggedInContainer";

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


const LoggedInHome = () => {
    return(
    <LoggedInContainer>

        <PlayListView titlText={"Focus"} cardsData={focusCardData} />

        <PlayListView titlText={"Spotify Playlist"} cardsData={focusCardData} />

        <PlayListView titlText={"Sound of India"} cardsData={focusCardData} />
    </LoggedInContainer>
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