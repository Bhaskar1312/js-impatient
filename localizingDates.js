
const newYearsEve = new Date(1999, 11, 31)
console.log(new Intl.DateTimeFormat('en').format(newYearsEve))
console.log(new Intl.DateTimeFormat('de').format(newYearsEve))
console.log(new Intl.DateTimeFormat('en',{year:'numeric', month: 'short', day: 'numeric'}).format(newYearsEve))

console.log(new Intl.RelativeTimeFormat('en', {numeric: 'auto'}).format(-1, "day")) // yesterday
console.log(new Intl.RelativeTimeFormat('fr', {numeric: 'auto'}).format(-10, "day")) // il y a 10 jours:
console.log(new Intl.RelativeTimeFormat('de', {numeric: 'auto'}).format(-1, "day")) //gestern