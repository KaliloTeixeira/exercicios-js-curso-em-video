var now = new Date()
console.log(`Agora são ${now.getHours()}h${now.getMinutes()}m`)
if(now.getHours()<=12){
    console.log('Bom Dia!')
}else if (now.getHours()<=18){
    console.log('Boa Tarde!')
}else{
    console.log('Boa Noite!')
}
    