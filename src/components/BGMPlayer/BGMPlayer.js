// BGM resources
import FindRoom from './BGM/FindRoom.mp3'
import HowToPlay from './BGM/HowToPlay.mp3'
import Knucklebones from './BGM/Knucklebones.mp3'

// BGM Context
import { BackgroundMusicContext } from "../../App"

// React
import { useState, useEffect, useRef, useContext } from "react"

const BMGPlayer = (props) => {
    // Context
    const BGMContext = useContext(BackgroundMusicContext)

    // Background Music Status
    const audioRef = useRef(null)
    const [audio, setAudio]  = useState(null)
    
    useEffect(() => {
        switch(BGMContext.BGM) {
            case "Home": setAudio(Knucklebones); break;
            case "FindRoom": setAudio(FindRoom); break;
            case "HowToPlay": setAudio(HowToPlay); break;
            case "Knucklebones": setAudio(Knucklebones); break;
            default: setAudio(null); break;
        }
    }, [BGMContext.BGM]);

    useEffect(() => {
        function handleClickOutside(event) {
            if (audioRef.current && !audioRef.current.contains(event.target)) {
                audioRef.current.play();
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [audioRef]);

    useEffect(() => {
        if (audio === null) return;
        audioRef.current.pause()
        audioRef.current.load()
        audioRef.current.play()
    }, [audio]);

    return (             
    <audio ref={audioRef} loop>
        <source src={audio} type="audio/mp3" />
        Your browser does not support the audio element.
    </audio> );
}
 
export default BMGPlayer;