import { number2kanji } from '@geolonia/japanese-numeral'
import { shareTwitterURL } from 'share-twitter'

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

document.getElementById("tweet-button").addEventListener("click", e => {
    const url = shareTwitterURL({
        text: `${number2kanji(getRandomInt(9999999999999999))}草粥`,
        url: 'https://takanakahiko.me/n-kusagayu',
    })
    window.open(url);
})

