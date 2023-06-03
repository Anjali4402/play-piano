// it will play music
const playMusic = (key)=>{
    let audio = new Audio(`./piano-keys/${key}.mp3`);
    audio.play();
}

// when user click on piano button using mouse
$('.key').click(function(){
    const currentlyClicked = $(this).attr('key_data')
    playMusic(currentlyClicked)
})

// when user click on piano button using keyboard
$(document).keydown(function(event){
    checkKey(event.key);
})

const checkKey = (keys)=>{
    $.each($('.key'), function(key,val){
        if(val.textContent === keys){
            // console.log('true')
            // const setval = val.attributes.key_data.value;
            const setval = $(this).attr('key_data');
            playMusic(setval)
        }
    })
}



