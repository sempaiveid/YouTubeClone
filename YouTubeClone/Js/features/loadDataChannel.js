import { state } from "../URL/createObject.js"
import { InfoAboutChannel } from "../Marking/reExportMarking.js"

import axios from 'axios'


export async function channelData(accessToken) {
    console.log(accessToken)
    const response = await axios.get("https://www.googleapis.com/youtube/v3/channels", {
        headers: { 'Authorization': `Bearer ${accessToken}` },
        params: {
            part: "snippet,statistics,brandingSettings,contentDetails",
            mine: true
        }
    })
    return response
}
const body = document.body
export function moreBtn(){
    document.querySelector(".more_info span").onclick = ()=>{
        body.insertAdjacentHTML("afterbegin", InfoAboutChannel(state.infoChannel.subscriberCount, state.infoChannel.videoCount, state.infoChannel.viewCount, state.infoChannel.dateCreateAccount))
        body.classList.add("ovhHidden")
        closeInfoAccount()
    }
}
function closeInfoAccount(){
    const backdrop = document.querySelector(".backdropInfo")
    function close(e){

        if(e.target === e.currentTarget){
            backdrop.remove()
            body.classList.remove("ovhHidden")
            return
        }

    }
    document.querySelector(".closeMoreInfoBtn").onclick = close
    backdrop.onclick = close
}