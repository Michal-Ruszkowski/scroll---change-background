function findPos(obj){
	let curleft = curtop = 0;
    if (obj.offsetParent) {
		curleft = obj.offsetLeft;
		curtop = obj.offsetTop;
		while (obj = obj.offsetParent) {
			curleft += obj.offsetLeft
			curtop += obj.offsetTop
		}
    }
    return [curleft,curtop];
}

document.addEventListener("scroll",  function(){
	const winH = window.innerHeight;
	const oldBg= document.getElementsByClassName("oldBg");
	for (i=0; i<oldBg.length; i++){
		const positionSection = findPos(oldBg[i]);
		if(positionSection[1]<=scrollY+winH*0.5 && scrollY<=positionSection[1]+oldBg[i].offsetHeight-winH*0.5){
			oldBg[i].classList.add("newBg");
		}else{
			oldBg[i].classList.remove("newBg");
		}
	}
})
