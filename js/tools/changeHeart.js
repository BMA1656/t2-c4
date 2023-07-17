export function changeHeartLink(heartElement) {
    const isLiked = heartElement.classList.contains("liked");
    const likedSrc = "utilities/heart-like.svg";
    const unlikedSrc = "utilities/heart-dislike.svg";

    if (isLiked) {
        heartElement.src = unlikedSrc;
        heartElement.classList.remove("liked");
        heartElement.classList.add("unliked");
    } else {
        heartElement.src = likedSrc;
        heartElement.classList.remove("unliked");
        heartElement.classList.add("liked");
    }
}
