"use strict"
import { once } from "process"
import { URL } from "../URL/createObject.js"
import { markingProfile } from "../Marking/Marking.js"
import { TIMEOUT } from "dns"
import { dataSubscribe } from "../api/PostToToken.js"
// gaming
import { container, setNewUrl } from "../features/ReExportFeatures.js";
import { GetContentGaming } from "../api/AllApiRequest.js";
import { dateTime, fromViewToShortView, formatDuration, addClassList, removeClassList, changeInnerHTML, selectElements } from "../untils/reExportUntils.js";
import { shortVideoMarking, markingTab, makeMarkingVideo, iconGaming, iconNews, iconSports, iconCourses, iconFashion } from "../Marking/reExportMarking.js";
import { TakeTrending } from "../api/AllApiRequest.js"

let glass_adaptation = document.getElementById("glass_adaptation")
let adaptation = document.getElementById("adaptation")
let img_adaptation = document.getElementById("img_adaptation")
const burger = document.querySelector(".burger")
export const aside = document.querySelector("aside")
const backdrop = document.querySelector(".backdrop")
const subscriberContainer = document.querySelector(".sing_int svg")
const SingButton = document.querySelector(".SignIn_element")



burger.addEventListener('click', () => {
    if (window.innerWidth > 1200) {
        return
    }

    aside.classList.toggle("wow")
    aside.classList.add("block")
    if (aside.classList.contains("wow")) {
        backdrop.style.display = 'block'
    } else {
        backdrop.style.display = 'none'

    }
})
backdrop.onclick = () => {
    aside.classList.remove("wow")
    aside.classList.remove("block")

    backdrop.style.display = 'none'
}


glass_adaptation.addEventListener("click", (e) => {


    adaptation.style.display = "flex";
    glass_adaptation.style.display = "none"
})

img_adaptation.addEventListener("click", () => {
    adaptation.style.display = "none";
    glass_adaptation.style.display = "flex"
})
const functionLogin = (e) => {
    e.preventDefault()
    window.location.href = URL.logInURL;
}
subscriberContainer.onclick = functionLogin
SingButton.onclick = functionLogin


export function themeChange(block, oldMark) {
    block.querySelector(".dark_theme")?.addEventListener("click", () => {
        document.documentElement.classList.add("black");
        document.documentElement.classList.remove("white");
        localStorage.setItem('theme', 'black');
        block.innerHTML = oldMark
        block.classList.remove("block")
    }, { once: true });
    block.querySelector(".back")?.addEventListener("click", () => {
        block.innerHTML = oldMark
        block.classList.remove("block")
    })

    block.querySelector(".light_theme")?.addEventListener("click", () => {
        document.documentElement.classList.add("white");
        document.documentElement.classList.remove("black");
        localStorage.setItem('theme', 'white');
        block.innerHTML = oldMark
        block.classList.remove("block")

    }, { once: true });
}
export function loadSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.removeAttribute('class')
        document.documentElement.classList.toggle(savedTheme);
    } else {
        document.documentElement.removeAttribute('class')
        document.documentElement.classList.add('white');
    }
}


const show_All_Hide_All = document.querySelector(".aside_bottom_Show_All_Hide_All")
const show_All = document.querySelector(".show_All")
const hide_All = document.querySelector(".hide_All")

export function aside_bottom_Show_All_Hide_All() {
    show_All_Hide_All.style.display = "block"
    console.log("1")
}

export function show_All_Display_block() {
    show_All.style.display = "flex"


}
function show_All_none_Hide_All_none() {
    show_All.style.display = "none"
    show_All_Hide_All.style.display = "none"

}

function showLessSub() {
    const asideLess = document.querySelector(".aside_SignIn")
    asideLess.classList.add("hideSub")
    show_All.style.display = "none"
    console.log(123)

}



show_All.onclick = show_All_none_Hide_All_none()


const aside_SignIn_buttonMore_2 = document.getElementsByClassName("aside_SignIn_buttonMore_2")

hide_All.onclick = () => {
    // show_All_none_Hide_All_none()

    const dataSubscribeSet = new Set(dataSubscribe);

    const blockListSing = document.querySelectorAll(".block_list_sing_int_subscription_title");
    blockListSing.forEach((el) => {
        if (dataSubscribeSet.has(el.textContent)) {
            el.parentElement.remove();
        }
    });


};


const show_All_Subscriptions = document.getElementById("show_All_Subscriptions") // Основной блок пдписок

const img_subscriptions = document.getElementById("img_subscriptions") //фоторафия подписки

const name_Subscriptions = document.getElementById("name_Subscriptions")//Название канала

const number_of_Subscriptions = document.getElementById("number_of_Subscriptions") //количество подписок

const channel_description = document.getElementById("channel_description") // Описание канала


// TAB

function tabContainerBlock() {
    removeClassList(container, "grid")
    addClassList(container, "block")
}
function changeInnerMarkingTab(nameTab, iconTab) {
    changeInnerHTML(container, '')
    changeInnerHTML(container, markingTab(nameTab, iconTab))
}
async function fillingContentTab(func) {
    const gamingContainer = selectElements(container, ".Container-video-gaming")
    const shortsContainer = selectElements(container, ".shorts-video-conteiner")
    const videos = await func();
    console.log(videos);


    videos.data.items.forEach(el => {
        if (el.snippet.liveBroadcastContent !== 'none') return
        let durationVideo = formatDuration(el.contentDetails.duration)

        if (Number(durationVideo[0]) === 0) {
            shortsContainer.insertAdjacentHTML("beforeend", shortVideoMarking(el.snippet.thumbnails.standard.url, el.snippet.title, el.statistics.viewCount, el.id))
        } else {
            gamingContainer.insertAdjacentHTML("beforeend", makeMarkingVideo(el.snippet.thumbnails.high.url, el.snippet.thumbnails.default.url, el.snippet.title, el.snippet.channelTitle, fromViewToShortView(el.statistics.viewCount), dateTime(el.snippet.publishedAt), durationVideo, el.id))
        }

    })
}

export async function clickGaming() {
    setNewUrl("/Gaming")
    tabContainerBlock()
    changeInnerMarkingTab("Gaming", iconGaming)
    fillingContentTab(() => TakeTrending(20))
}

export async function clickNews() {
    setNewUrl("/News")
    tabContainerBlock()
    changeInnerMarkingTab("News", iconNews)
    let textNews = document.getElementById("txtTab")
    textNews.style.fontSize = "50px"
    fillingContentTab(() => TakeTrending(25))
}
export async function clickSports() {
    setNewUrl("/Sports")
    tabContainerBlock()
    changeInnerMarkingTab("Sports", iconSports)
    fillingContentTab(() => TakeTrending(17))
}
export async function clickCourses() {
    setNewUrl("/Courses")
    tabContainerBlock()
    changeInnerMarkingTab("Courses", iconCourses)
    fillingContentTab(() => TakeTrending(24))
}
export async function clickFashion() {
    setNewUrl("/Fashion")
    tabContainerBlock()
    changeInnerMarkingTab("Fashion", iconFashion)
    fillingContentTab(() => TakeTrending(26));
}
