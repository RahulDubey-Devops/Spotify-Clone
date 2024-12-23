import { useState } from "react";
import LoggedInContainer from "../containers/LoggedInContainer";
import { Icon } from "@iconify/react/dist/iconify.js";
function SearchPage() {
    const [isInputFocused, setIsInputFocused] = useState(false);
    return (
        <LoggedInContainer currActiveScreen="search">

            <div className="w-full py-6
             ">
                <div className={`w-1/2 p-3 text-sm rounded-full
                bg-gray-600 px-5 flex items-center text-white space-x-3 ${isInputFocused ? "border border-white" :""}`}>
                    <Icon icon="il:search" className="text-lg " />
                    <input
                        type="text"
                        placeholder="What do you want to listen to?"
                        className="w-full   bg-gray-600 focus:outline-none"
                        onFocus={() => {
                            setIsInputFocused(true);
                        }}
                        onBlur={()=>{
                            setIsInputFocused(false);
                        }}
                    />
                </div>

            </div>
        </LoggedInContainer>
    )
}
export default SearchPage;