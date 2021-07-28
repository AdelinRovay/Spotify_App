var addToPlaying=document.getElementsByClassName("play-btn")
for(var i=0;i<addToPlaying.length;i++){
    var addButton=addToPlaying[i]
    addButton.addEventListener('click',playButtonClicked)
}

function playButtonClicked(event){
    addbutton=event.target
    var Title=addbutton.parentElement.getElementsByClassName('card-title')[0].innerText
    var Artist=addbutton.parentElement.getElementsByClassName('Artist')[0].innerText
    var Album=addbutton.parentElement.getElementsByClassName('album')[0].innerText
    var imageSrc=addbutton.parentElement.parentElement.getElementsByClassName('card-img-top')[0].src
    var playedItemNames=document.getElementsByClassName('played-card-title')
    for(var i=0;i<playedItemNames.length;i++){
        if(playedItemNames[i].innerText==Title){
            alert("Already in played queue, Continue Listening!");
            return;
        }
    }
    let playeditems=document.getElementsByClassName('played-items')[0]
    var playedRowfull=document.createElement('div')
    playedRowfull.classList.add("card p-2 m-3")
    var playedrowhtml=`<img src="${imageSrc}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="played-card-title">${Title}</h5>
      <p class="Artist">${Artist}</p>
      <p class="album">${Album}</p>
      <button type="button" class="btn btn-outline-success play-btn">Play</button>
    </div>`
    playedRowfull.innerHTML=playedrowhtml
    playeditems.append(playedRowfull)
}