import { createContext } from "react";

const songContext = createContext({
    currentSong: null,
    setCurrentSong: (currentSong) => { },
    isPause: null,
    setIsPause: () => { },
    soundPlayed: null,
    setIsPlayed: () => { },
});

export default songContext;