import { number2kanji } from '@geolonia/japanese-numeral'
import { shareTwitterURL } from 'share-twitter'

function getRandomInt() {
    let max = 1
    for(var i =0; i < 10; i++){
        if(Math.random() < 0.15){
            max *= 10
        }
    }
    return Math.floor(Math.random() * Math.floor(max))
}

document.getElementById("tweet-button").addEventListener("click", e => {
    const n = getRandomInt()
    const kanji = n==0 ? "零 -ZERO- " : number2kanji(n)
    let text = `${kanji}草粥(${n}草粥)`
    if( Math.random() < 0.03) {
        text = `あ ほ く さ 粥`
    }
    if( Math.random() < 0.03) {
        text = `浅草粥`
    }
    if( Math.random() < 0.03) {
        text = `みちくさ粥`
    }
    if( Math.random() < 0.03) {
        text = `たまゆら粥`
    }
    if( Math.random() < 0.03) {
        text = `700,000,000,000,000,000,000,000 (セブンハンドレッドセクスティリオン)草粥`
    }
    if( Math.random() < 0.03) {
        text = `JAXA粥`
    }
    const url = shareTwitterURL({
        text: text,
        hashtags: "nanakusagacha",
        url: 'https://takanakahiko.me/n-kusagayu',
    })
    window.open(url)
})
