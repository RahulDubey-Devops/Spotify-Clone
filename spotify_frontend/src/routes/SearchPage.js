import { useState } from "react";
import LoggedInContainer from "../containers/LoggedInContainer";
import { Icon } from "@iconify/react/dist/iconify.js";
import SingleSongCard from "../Component/shared/SingleSongCard"
import { makeAuthenticatedGETRequest } from "../utils/serverHelper";
function SearchPage() {
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [songData, setSongData] = useState([]);
    const SearchSong = async () => {
        //This fun will callth search api:
        const response = await makeAuthenticatedGETRequest("/song/get/songname" + searchText);

        setSongData(response.data);

        setSearchText("");
    }
    return (
        <LoggedInContainer currActiveScreen="search">

            <div className="w-full py-6
             ">
                <div className={`w-1/2 p-3 text-sm rounded-full
                bg-gray-600 px-5 flex items-center text-white space-x-3 ${isInputFocused ? "border border-white" : ""}`}>
                    <Icon icon="il:search" className="text-lg " />
                    <input
                        type="text"
                        placeholder="What do you want to listen to?"
                        className="w-full   bg-gray-600 focus:outline-none"
                        onFocus={() => {
                            setIsInputFocused(true);
                        }}
                        onBlur={() => {
                            setIsInputFocused(false);
                        }}
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                searchText();
                            }
                        }}
                    />
                </div>
                { songData.length > 0 ? 
                    <div className="pt-10 space-y-3 ">
                        <div className="text-white">

                            Showing search results for <span className="font-bold">{SearchSong}</span>
                        </div>
                        {
                            songData.map(item => {
                                return <SingleSongCard info={item} key={JSON.stringify(item)} playSound={() => { }} />
                            })
                        }
                    </div>

                    : <div className=" pt-10 text-white ">  Nothing to Show here...</div>
                }
            </div>
        </LoggedInContainer>
    )
}
export default SearchPage;