import { useEffect, useState } from "react"
import LoggedInContainer from "../containers/LoggedInContainer"
import { makeAuthenticatedGETRequest } from "../utils/serverHelper";


function Library() {
    const [myPlayList, setMyPlayList] = useState("");

    useEffect(() => {
        const getData = async () => {
            const response = await makeAuthenticatedGETRequest("/playlist/get/me");
            setMyPlayList(response.data)
        }
        getData();
    }, [])
    return (
        <LoggedInContainer currActiveScreen={"library"}>
            <div className="text-white text-xl pt-8 ">
                My Playlist
            </div>
            <div className="py-5 grid gap-5 grid-cols-5 ">
                {myPlayList.map(item => {
                    return <Card key={JSON.stringify(item)} title={item.name} description="" imgUrl={item.thumbnail} />
                })}

            </div>
        </LoggedInContainer>
    )
}


const Card = ({ title, description, url }) => {
    return (
        <div className="bg-black bg-opacity-40 w-full p-4 rounded-lg cursor-pointer">
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

export default Library