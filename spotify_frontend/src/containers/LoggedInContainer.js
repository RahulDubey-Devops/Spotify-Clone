import { Icon } from "@iconify/react/dist/iconify.js";
import { Howl } from "howler";
import spotify_logo from "../assets/images/spotify_logo_white.svg";
import IconText from "../Component/shared/IconText";
import TextWithHover from "../Component/shared/TextWithHover";
import { useLayoutEffect, useRef, useState } from "react";
import songContext from "../contexts/songContext";
import { useContext } from "react";
import CreatePlaylistModal from "../modals/CreatePlaylistModal";


function LoggedInContainer({ children, currActiveScreen }) {
    const [createPlayListModel, setCreatePlayListModel] = useState(false);
    const { currentSong, setCurrentSong, soundPlayed, setSoundPlayed, isPause, setIsPause } = useContext(songContext);
    const firstUpdate = useRef(true);
    useLayoutEffect(() => {
        // on first reder is will ony work and set it as false so useLR doesnot callgain and again on each render
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        if (!currentSong) {
            return;
        }
        changeSong(currentSong.track());
    }, [currentSong && currentSong.track])

    const playSound = () => {
        if (!soundPlayed) {
            return;
        }
        soundPlayed.play();
    };

    const changeSong = (songSrc) => {
        if (soundPlayed) {
            soundPlayed.stop();
        }

        let sound = new Howl({
            src: [songSrc],
            html5: true,
        })
        setSoundPlayed(sound);
        sound.play();
        setIsPause(false);
    }
    const pauseSound = () => {
        soundPlayed.pause();
    }
    const togglePlayPause = () => {
        if (isPause) {
            playSound(currentSong.track);
            setIsPlayed(false);
        }
        else {
            pauseSound();
            setIsPlayed(true);
        }
    }
    return (
        <div className="w-full h-full bg-app-black">
            {createPlayListModel &&
                <CreatePlaylistModal closeModal={setCreatePlayListModel(false)}/>}
            {/* This will be left part */}
            {/* ${currentSong ?"h-9/10":"h-9/10  */}
            <div className={` h-9/10 flex w-full bg-black`}>
                <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-10">
                    <div>
                        {/* This div is for logo */}
                        <div className="logoDiv p-6">
                            <img src={spotify_logo} alt="spotify_logo" width={125} />
                        </div>
                        <div className="py-5">
                            <IconText iconName={"oi:home"} displayText="Home"
                                active={currActiveScreen == "home"}
                                targetLink={"/home"} />
                            <IconText iconName={"material-symbols:search"} displayText="Search"
                                active={currActiveScreen === "search"}
                                targetLink={"/search"} />
                            <IconText iconName={"lineicons:books-2"} displayText="Library" active={currActiveScreen == "library"}
                            targetLink={"/library"} />
                            <IconText iconName={"material-symbols:library-music-sharp"}
                                active={currActiveScreen === "myMusic"}
                                displayText="My Music" />
                        </div>
                        <div className="pt-5">
                            <IconText iconName={"icon-park-solid:add"} displayText="Crete Playlist" active={currActiveScreen == "playlist"} />
                            <IconText iconName={"mdi:cards-heart"} displayText="Liked Songs" active={currActiveScreen == "likedSong"}
                            onClick={()=>{setCreatePlayListModel(true)}}
                            />
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

                        {children}
                    </div>
                </div>
            </div >
            {currentSong && (
                <div className="w-full h-1/10 bg-black opacity-30 text-white flex items-center px-4">
                    <div className="w-1/4 flex items-center">
                        <img src={currentSong.thumbnail} alt="current Song" className="h-14 w-14 rounded-full "></img>
                        <div className="pl-4">
                            <div className="text-sm text-white ">{currentSong.name}</div>
                            <div className="text-gray-500 text-xs cursor-pointer hover:underline">{currentSong.artist.firstName + " " + currentSong.artist.lastName}
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 flex justify-center hover:underline cursor-pointer h-full flex-col items-center ">
                        <div className="flex justify-between items-center
                    w-1/3 ">
                            {/* Control Part */}
                            <Icon icon="ph:shuffle-fill" fontSize={30} className="  hover:text-white cursor-pointer text-gray-500" />
                            <Icon icon="mdi:skip-previous-outline" fontSize={30} className="cursor-pointer text-gray-500 hover:text-white" />
                            <Icon icon={isPause ? "ic:baseline-play-circle" : "ic:baseline-pause-circle"} fontSize={50} className="cursor-pointer text-gray-500 hover:text-white"
                                onClick={togglePlayPause
                                }
                            />
                            <Icon icon="mdi:skip-next-outline" fontSize={30} className="cursor-pointer text-gray-500 hover:text-white" />
                            <Icon icon="ic:twotone-repeat" fontSize={30} className="cursor-pointer text-gray-500 hover:text-white" />
                        </div>
                        <div>
                            {/* Progress Bar */}
                        </div>
                    </div>
                    <div className="w-1/4 flex justify-end hover:underline cursor-pointer"></div>
                </div>

            )}
        </div>
    )
}





export default LoggedInContainer;