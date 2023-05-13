//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

function strip (word) {
    let regex = new RegExp('^(a |the |an )', 'i')
    return word.replace(regex, '').trim()
}
touristSpots.sort((a, b) => (strip(a) > strip(b)) ? 1 : -1)
document.querySelector('#bands').innerHTML = 
    touristSpots.map(item => `<li>${item}</li>`).join('')
