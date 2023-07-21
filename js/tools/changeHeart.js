export default function changeHeartLink(heartElement) {
  const heartCopy = heartElement;
  const isLiked = heartCopy.classList.contains('liked');
  const likedSrc = 'utilities/heart-like.svg';
  const unlikedSrc = 'utilities/heart-dislike.svg';

  if (isLiked) {
    heartCopy.src = unlikedSrc;
    heartCopy.classList.remove('liked');
    heartCopy.classList.add('unliked');
  } else {
    heartCopy.src = likedSrc;
    heartCopy.classList.remove('unliked');
    heartCopy.classList.add('liked');
  }
}
