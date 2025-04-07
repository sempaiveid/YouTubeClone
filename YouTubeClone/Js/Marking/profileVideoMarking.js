import { fromViewToShortView } from "../untils/ViewToViewLikeToLike.js"
import { dateTime } from "../untils/HelpsFunction.js"
export function forYouVideoMarking(prewievVideo, durationVideo, titleVideo, countWiev, dateV, id) {
     
    const result = dateTime(dateV)
    return `
            <div class="video_box chooseVideoProfile" idVideo="${id}">
        <div class="Container_video_preview">
            <img src="${prewievVideo}" alt="">
            <span class="Container_video_preview_duration">${durationVideo}</span>
        </div>
         <div class="Container_video_title nameChannelSelect">${titleVideo}</div>
        <div class="Container_video_statistic dF">
            <div class="Container_video_statistic_veiw">${fromViewToShortView(countWiev)}</div>
            •
            <div class="Container_video_statistic_date">${result}</div>
        </div>
    </div>`
}
export function shortVideoMarking(previevVideo, titleVideo, countWiev, id) {
    return `

         <div class="Shorts_video_item" idVideo="${id}">
        <div class="Shorts_video_item_preview">
            <img src="${previevVideo}" alt="">
        </div>
         <div class="Shorts_video_item_info">
            <div class="Shorts_video_item_info_title">${titleVideo}</div>
            <div class="Shorts_container_statistic">${fromViewToShortView(countWiev)}</div>
        </div>
    </div>
    `
}