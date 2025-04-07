import { state, URL } from "../URL/createObject.js"
import { SearchContent, addSubscribe, removeSubscribe, userSubscriber, putComment, addRateToVideo } from "../api/ReExportAPI.js"
import { container, setNewUrl} from "../features/ReExportFeatures.js"
import { markinHistoryVideo } from '../Marking/reExportMarking.js'
import {moreBtn, shortLength, dateTime, changeTextContentAndAddClasslist, shortLength, formatDuration, fromViewToShortView } from "../untils/reExportUntils.js"
import { addMarkingComent } from "./AnyVideoFunc.js"
import { infinityScrollSearch } from "../infinityScrollInProfile.js"



export function listnerToInput(){
    const inputCont= document.querySelector(".Comment_input_block_tag input")
    
    const button = document.querySelector(".Comment_input_block_under_apply")
    inputCont.addEventListener("input", (e)=>{

        if(e.target.value === ''){
            button.classList.remove("sendButton")
            return
        }
        button.classList.add("sendButton")
        
    })
    return {button:button, input:inputCont}
}
export function ListnersToSendComment(id, channelId){
    const elements = listnerToInput()
    elements.button.onclick = async ()=>{
        if(!state.Autorization){
             window.location.href = URL.logInURL;
            return
        }
        if(elements.input.value === ''){
            return
        }
        const responseComment = await putComment(elements.input.value, id, channelId)
        

        addMarkingComent(responseComment.data)
        elements.input.value = ''
    }
}
export function buttonLoadMoreFnc(dateRequests, state, countSubs){
    let countClick = 0
    const buttonShowMore = document.querySelector(".showMoreDescription")

    buttonShowMore.onclick = ()=>{
        countClick += 1
        if(countClick === 1){
            buttonShowMore.textContent = 'Show less'
            
            moreBtn(dateRequests, state, countSubs)
        }else if(countClick === 2){
            document.querySelector(".containerShowMore").remove()
            shortLength('.Main_container_blockInfo_description_link', 100)
            buttonShowMore.textContent = '...more'
            countClick = 0
        }
    }
}

function SearchListner(){
    const input = document.querySelector(".search input")
    const buttonSearch = document.querySelector(".glass")
    buttonSearch.onclick = ()=>{
        if(input.value === '')return
        getContentAndAddMarking(input.value)
        setNewUrl(`/Search/:${input.value}/`)
    }
    window.addEventListener("keydown", (e)=>{
        if(e.key !== 'Enter' || input.value === '' )return 
        getContentAndAddMarking(input.value)
        setNewUrl(`/Search/:${input.value}/`)
    })
    
}
SearchListner()

export async function getContentAndAddMarking(value){
    
   
    container.innerHTML = ''
    container.insertAdjacentHTML('beforeend', `<div class="ContainerVideoSearch mT50p w80Procc" ></div>`)

    const triggerContainer = document.querySelector(".ContainerVideoSearch")

    triggerContainer.insertAdjacentHTML('beforeend', `<div class="InnerContainerVideoSearch">`)
    triggerContainer.insertAdjacentHTML("beforeend", `<div class="TrigerSearch"></div>`)

    const contVideo = document.querySelector(".InnerContainerVideoSearch")
    const videos =  await SearchContent(value)
        
    videos.data.items.forEach(el=>{
        el.snippet.liveBroadcastContent === 'none' ? contVideo.insertAdjacentHTML('beforeend', markinHistoryVideo(el.snippet.thumbnails.high.url, el.snippet.title,el.snippet.channelTitle, fromViewToShortView(el.statistics.viewCount), el.snippet.description, el.id, dateTime(el.snippet.publishedAt), formatDuration(el.contentDetails.duration))) : false
    })
    container.className = 'Main_container dF jcC'
    contVideo.classList.add("dF", "fdC", "gap15P")
   
    infinityScrollSearch(value)
    
}


export async function ListnersSubscribe(ChannelId){
    const button = document.querySelector(".leftSide_subscribe_button button")
    let countClick = 0
    console.log(await userSubscriber(ChannelId))
    if(await userSubscriber(ChannelId)){
        changeTextContentAndAddClasslist(button, 'Subscribed', 'subscribed', 0 )
        countClick = 1
    }
    button.onclick = ()=>{
        if(countClick === 0){
            changeTextContentAndAddClasslist(button, 'Subscribed', 'subscribed', 0 )
            addSubscribe(ChannelId)
            countClick += 1

        }else if(countClick === 1){
            changeTextContentAndAddClasslist(button, 'Subscribe', 'subscribed', 1 )
            removeSubscribe(ChannelId)
            countClick = 0
        }
    }
}

