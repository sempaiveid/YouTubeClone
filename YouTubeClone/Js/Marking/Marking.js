import { fromViewToShortView } from "../untils/ViewToViewLikeToLike.js";
import { fromLikeToShortLike } from "../untils/ViewToViewLikeToLike.js";
import { parseISO, format } from "date-fns";

export function markingProfile(
    backgorundProfile,
    profileImg,
    customUrl,
    subscribers,
    countVideos,
    titleChannel
) {
    return `
                       <div class="container_channel dF aiC fdC">
                    <div class="Main_container_Header">
                        <img src="${backgorundProfile}" alt="">
                     </div>
                    <div class="Header_channel_info dF">
                        <div class="Header_channel_info_img">
                            <img src="${profileImg}" alt="">
                        </div>
                        <div class="Header_channel_info_chaneel dF fdC jcC">
                            <h1>${titleChannel}</h1>
                            <p class="chaneel_info dF"><span>${customUrl}</span>•<span>${subscribers} subscribers</span>•<span>${countVideos} videos</span></p>
                            <p class="more_info">More about this channel <span>...more</span></p>
                        </div>
                    </div>
                    <div class="container_channel_navigation dF ">
                        <div class="container_channel_navigation_item borderBottom">Home</div>
                        <div class="container_channel_navigation_item">Videos</div>
                        <div class="container_channel_navigation_item">Shorts</div>
                    </div>
                    <div class="line"></div>
                     <div class="Header_Main_container_video">
                     <div class="Header_Main_container_video_main">
                        <h1>For You</h1>
                         <div class="ForYou_Container_leftArrow">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="">
                                    <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill="#0F0F0F"></path>
                                </svg>
                         </div>
                        <div class="ForYou_Container_rightArrow">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="" style="transform: rotate(180deg)">
                                <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill="#0F0F0F"></path>
                            </svg>
                        </div>
                        <div class="ForYou_Container_video dF">
                                 
                        </div>
                    </div>
                    <div class="line"></div>
                    <div class="Shorts_container">
                        <div class="Shorts_container_title dF aiC">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="red" width="24" height="24" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                                <path class="svgShorts" d="m19.45,3.88c1.12,1.82.48,4.15-1.42,5.22l-1.32.74.94.41c1.36.58,2.27,1.85,2.35,3.27.08,1.43-.68,2.77-1.97,3.49l-8,4.47c-1.91,1.06-4.35.46-5.48-1.35-1.12-1.82-.48-4.15,1.42-5.22l1.33-.74-.94-.41c-1.36-.58-2.27-1.85-2.35-3.27-.08-1.43.68-2.77,1.97-3.49l8-4.47c1.91-1.06,4.35-.46,5.48,1.35Z" fill="#f03"></path>
                                <path d="m10,15l5-3-5-3v6Z" fill="#fff"></path>
                            </svg>
                            Shorts
                        </div>
                            <div class="Shorts_Container_leftArrow">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="">
                                <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill="#0F0F0F"></path>
                            </svg>
                        </div>

                        <div class="Shorts_Container_rightArrow">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="" style="transform: rotate(180deg)">вв
                                <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill="#0F0F0F"></path>
                            </svg>
                        </div>                  
                        <div class="Shorts_video_container dF">
                               
                        </div>
                       
                    </div>
                    </div>
                </div>
    `;
}

export function InfoAboutChannel(
    countSubscribe,
    countVideo,
    countViews,
    accountCreat
) {
  const dateString = accountCreat;
  const parsedDate = parseISO(dateString);
  const formattedDate = format(parsedDate, "MMM d, yyyy");
  return `
   <div class="backdropInfo dF aiC jcC">
        <div class="block_info dF jcC aiC fdC">
            <div class="block_info_header dF jcsB aiC">
                <h1>About</h1>
                <svg class="closeMoreInfoBtn" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true"><path d="m12.71 12 8.15 8.15-.71.71L12 12.71l-8.15 8.15-.71-.71L11.29 12 3.15 3.85l.71-.71L12 11.29l8.15-8.15.71.71L12.71 12z"></path></svg>
            </div>
            <div class="block_info_main dF fdC jcC">
                <h1>Channel details</h1>
                    <div class="subscriber dF">
                        <div class="subscriber_svg">
                                               <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true"><path d="M11.72 11.93C13.58 11.59 15 9.96 15 8c0-2.21-1.79-4-4-4S7 5.79 7 8c0 1.96 1.42 3.59 3.28 3.93C4.77 12.21 2 15.76 2 20h18c0-4.24-2.77-7.79-8.28-8.07zM8 8c0-1.65 1.35-3 3-3s3 1.35 3 3-1.35 3-3 3-3-1.35-3-3zm3 4.9c5.33 0 7.56 2.99 7.94 6.1H3.06c.38-3.11 2.61-6.1 7.94-6.1zm5.68-1.46-.48-.88C17.31 9.95 18 8.77 18 7.5s-.69-2.45-1.81-3.06l.49-.88C18.11 4.36 19 5.87 19 7.5c0 1.64-.89 3.14-2.32 3.94zm2.07 1.69-.5-.87c1.7-.98 2.75-2.8 2.75-4.76s-1.05-3.78-2.75-4.76l.5-.87C20.75 3.03 22 5.19 22 7.5s-1.24 4.47-3.25 5.63z"></path></svg>

                        </div>
                        <div class="subscriber_text dF aiC">
                            ${countSubscribe} subscribers
                        </div>
                    </div>
                    <div class="block_info_main_video dF">
                        <div class="block_info_main_video_svg">
                           <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" ><path d="m10 8 6 4-6 4V8zm11-5v18H3V3h18zm-1 1H4v16h16V4z"></path></svg>
                        </div>
                          <div class="block_info_main_video_text dF aiC">
                            ${countVideo} videos
                        </div>
                    </div>
                     <div class="block_info_main_view dF">
                        <div class="block_info_main_video_view">
                           <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true"><path d="M22 6v7h-1V7.6l-8.5 7.6-4-4-5.6 5.6-.7-.7 6.4-6.4 4 4L20.2 7H15V6h7z"></path></svg>
                        </div>
                          <div class="block_info_main_view_text dF aiC">
                            ${fromViewToShortView(countViews)}
                        </div>
                    </div>
                    <div class="block_info_main_dateCreated dF">
                        <div class="block_info_main_video_dateCreated">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true"><path d="M13 17h-2v-6h2v6zm0-10h-2v2h2V7zm-1-4c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"></path></svg>
                        </div>
                          <div class="block_info_main_dateCreated_text dF aiC">
                            Joined ${formattedDate}
                        </div>
                    </div>
            </div>
        </div>
    </div>
    `;
}
export function markingTranding() {
    return `
        <div class="container_Tranding">
            <div class="box_Tranding dF fdC">
                <div class="icon_title_Tranding dF aiC">
                    <img class ="iconSports" src ="https://www.youtube.com/img/trending/avatar/trending_animated.webp">
                    <h3 id="txtTitle" style="margin-left: 10px;">Tranding</h3>
                </div>
                <hr>
            </div>
            <div class="box_video_Tranding">
                <div class="txtg">Пропоноване</div>
                <div class="container_video_trending dF fdC"></div>
            </div>
        </div>
    `;
}
export function markingShowMore(dateRequests, dataProfile, countSubs) {
    return `
    <div class="containerShowMore">
      <div class="TranscriptVideo dF fdC">
            <h1>Transcript</h1>
            <p>Follow along using the transcript</p>
            <button>Show transcript</button>
        </div>
        <div class="Main_container_blockInfo_description_channel dF">
                <div class="description_channel_img">
                <img src="${dataProfile}" alt="">
             </div>
            <div class="description_channel_container">
                <div class="description_channel_container_title">${dateRequests[0].snippet.channelTitle
        }</div>
                <div class="description_channel_container_subscribers">${fromLikeToShortLike(
            countSubs
        )} subscribers</div>
            </div>
        </div>
        <div class="containerShowMore_aboutChannel dF">
            <div class="containerShowMore_aboutChannel_videos dF aiC jcsB">
                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true"><path d="m10 8 6 4-6 4V8zm11-5v18H3V3h18zm-1 1H4v16h16V4z"></path></svg>
                <span>Videos</span>
            </div>
            <div class="containerShowMore_aboutChannel_About dF aiC jcsB">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true"><path d="M4 20h14v1H3V6h1v14zM6 3v15h15V3H6zm2.02 14c.36-2.13 1.93-4.1 5.48-4.1s5.12 1.97 5.48 4.1H8.02zM11 8.5a2.5 2.5 0 015 0 2.5 2.5 0 01-5 0zm3.21 3.43A3.507 3.507 0 0017 8.5C17 6.57 15.43 5 13.5 5S10 6.57 10 8.5c0 1.69 1.2 3.1 2.79 3.43-3.48.26-5.4 2.42-5.78 5.07H7V4h13v13h-.01c-.38-2.65-2.31-4.81-5.78-5.07z"></path></svg>
                <span>About</span>
            </div>
        </div>
    </div>
    `;
}
export function marcinSubscriben(img_profile, title_profile) {
    return `
    <div class="block_list_sing_int_subscription dF aiC ">
        <div class="block_list_sing_int_subscription_contain">
        <img class="block_list_sing_int_subscription_img" src="${img_profile}" alt="">
        </div>
            <div class="block_list_sing_int_subscription_title">${title_profile}</div>
    </div>`;
}

export function markibngSubContainer() {

}
export function markingTab(tabName, iconTab) {
    return `
        <div class="boxtxtGaming" style=" display: flex" >
                         <div  class="iconTxtGaming">
                         ${iconTab()}
                            <b id="txtTab">${tabName}</b>
                        </div>
                    </div>
                   <div class = "iconTxtGaming">
                 <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 24 24">
                     <path d="M 15.886719 1 C 14.974131 1 14.077693 1.2286385 13.287109 1.65625 L 5.5664062 5.7207031 L 5.5664062 5.71875 C 3.7637541 6.6652034 2.6367187 8.5322799 2.6367188 10.566406 C 2.6367188 11.911504 3.2225585 13.082394 4.046875 14.046875 C 3.2161002 15.0216 2.6367187 16.195885 2.6367188 17.521484 C 2.6367188 20.532674 5.1018215 23 8.1132812 23 C 9.0303925 23 9.9287625 22.773103 10.716797 22.341797 L 18.292969 18.353516 L 18.259766 18.369141 C 20.151702 17.459981 21.363281 15.531898 21.363281 13.433594 C 21.363281 12.088496 20.777441 10.917606 19.953125 9.953125 C 20.783897 8.9783946 21.363281 7.8041153 21.363281 6.4785156 C 21.363281 3.4673258 18.898179 1 15.886719 1 z M 15.886719 3 C 17.813259 3 19.363281 4.5517054 19.363281 6.4785156 C 19.363281 7.5499776 18.888956 8.5222239 18.080078 9.1777344 L 17.121094 9.9550781 L 18.080078 10.732422 C 18.871608 11.373406 19.363281 12.344494 19.363281 13.433594 C 19.363281 14.75529 18.584642 15.993566 17.392578 16.566406 L 17.376953 16.574219 L 9.7636719 20.583984 L 9.7578125 20.587891 C 9.2778524 20.850605 8.6961702 21 8.1132812 21 C 6.1867412 21 4.6367188 19.448295 4.6367188 17.521484 C 4.6367188 16.450022 5.1110438 15.477776 5.9199219 14.822266 L 6.8789062 14.044922 L 5.9199219 13.267578 C 5.1283915 12.626594 4.6367188 11.655506 4.6367188 10.566406 C 4.6367188 9.266533 5.3427459 8.095781 6.4960938 7.4902344 L 6.4980469 7.4902344 L 14.232422 3.4179688 L 14.238281 3.4140625 C 14.729251 3.1482632 15.309951 3 15.886719 3 z M 10 9 L 10 15 L 15 12 L 10 9 z"></path>
                 </svg>
                  <span class="txtg">    Shorts </span>
                  </div>
                    <div class="shorts-video-conteiner" ></div>
                    <br>
                    <div class="txtg"> Пропоноване</div>
                    <div class="Container-video-gaming grid"></div>
                    `;
}
export function iconGaming() {
    return `
    <img class ="iconSports" src ="//yt3.googleusercontent.com/GFc_A-blEltrFJDdN_Hhq7wMxATv1u1LWHF87HZ7duVPBYWfwjeL-mZ8cV2_2hiQfFiHIdM-IXI=s72-c-c0x00ffffff-no-rwa">
    `;
}
export function iconNews() {
    return ``;
}
export function iconSports() {
    return `
  <img class ="iconSports" src ="https://www.theartofcoachingvolleyball.com/wp-content/uploads/2018/01/Premium-Icon-Square.png" alt= "iconSports">
    `;
}
export function iconCourses() {
    return `
  <img class ="iconSports" src ="https://media.evingo.com.br/skin/frontend/smartwave/default/images/logo_small_po_inverted.png" alt= "iconCourses">
    `;
}
export function iconFashion() {
    return `
  <img class ="iconSports" src ="//yt3.googleusercontent.com/vgDRIrGv4eFbfcyTiubRSwkhzk8zCaHArieUu4H0DijHaWiNF0kr9dJygRu3X2TquIckGXrktg=s72-c-c0x00ffffff-no-rwa" alt= "iconCourses">
    `;
}

export function markinHistoryVideo(
    videoImg,
    videoName,
    chanelName,
    countViews,
    overview,
    id,
    date,
    duration
) {
  return `
<div idvideo=${id} class="container-video chooseVideo" style="display: flex;">
     <div class="video-img-conteiner H100 w36P">
            <img src="${videoImg}" alt="">
            <span class="Container_video_preview_duration">${duration}</span>
        </div>
    <div class="overview">
        <span class="nameVideo">${videoName}</span>
        <div class="Container_video_statistic dF aiC m0">
            <span class="count-views fS14">${countViews}</span>•<span class="Container_video_statistics_date ">${date}</span>
        </div>
        <div class="chanel-info dF aiC gap10 mT10p">
            <span class="imgProfile"><img src="${videoImg}"></span>
            <span class="name-chanel nameChannelSelect">${chanelName}</span>
        </div>
    <p class="overview-video mT10p">${overview}</p>
    </div>
</div>
`;
}
