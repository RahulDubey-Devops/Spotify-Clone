import { useContext } from "react";
import songContext from "../../contexts/songContext"
const SingleSongCard = ({info,playSound}) => {
    const {currentSong,setCurrentSong}=useContext(songContext);

    return (

        <div className="flex hover:bg-gray-400 hover:opacity-20 p-2 rounded-sm" onClick={()=> {
           setCurrentSong(info);
        }}>
            <div className="w-12 h-12 bg-cover bg-center "
                style={{
                    backgroundImage: `url("${info.thumbnail}")`
                }}  >

            </div>
            <div className="flex w-full ">
                <div className="text-white flex-col pl-4 w-5/6justify-center ">
                    <div className="cursor-pointer hover:underline ">{info.name}</div>
                    <div className="text-xs text-gray-400 cursor-pointer hover:underline ">{info.artist.firstName + " "+info.artist.lastName}</div>
                </div>
                <div className="w-1/6 flex items-center justify-center text-gray-400 text-sm"> 
                3:44
                </div>
                {/* <div className="text-gray-400 flex items-center justify-center pl-3 text-lg">...</div> */}
            </div>
        </div>

    )
}
export default SingleSongCard;