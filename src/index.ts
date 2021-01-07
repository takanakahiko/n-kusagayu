import { number2kanji } from '@geolonia/japanese-numeral'
import { shareTwitterURL } from 'share-twitter'

function getRandomInt() {
    let max = 1
    for(var i =0; i < 20; i++){
        if(Math.random() < 0.15){
            max *= 10
        }
    }
    return Math.floor(Math.random() * Math.floor(max))
}

document.getElementById("tweet-button").addEventListener("click", e => {
    const n = getRandomInt()
    const kanji = number2kanji(n)
    const url = shareTwitterURL({
        text: `${kanji}草粥(${n}草粥)`,
        hashtags: "#nanakusagacha",
        url: 'https://takanakahiko.me/n-kusagayu',
    })
    window.open(url)
})
