document.getElementById("btn-1").onclick = function() {
    let openPage = document.querySelector('.subscribed')
    let box = document.querySelector('.container')
    openPage.style.display = 'flex'
    openPage.style.background = '#fcff49'
    // openPage.style.filter = 'brightness(1)'
    box.style.zIndex = '1'
    // openPage.style.filter = 'blur(1px)'
}

document.getElementById("last-btn").onclick = function() {
    let openPage = document.querySelector('.subscribed')
    openPage.style.display = 'flex'
    body.style.background = ''
}

document.getElementById('x-mark').onclick = function(){
    let closePage = document.querySelector('.subscribed')
    closePage.style.display = 'none'
}

// ------- Like Button Function ----------

document.querySelector('.like-btn-1').onclick = function(){
    let liked = document.querySelector('.liked-1')
    liked.style.display = 'inline'

    let likeBtn1 = document.querySelector('.like-btn-1')
    likeBtn1.style.display = 'none'
}
document.querySelector('.like-btn-2').onclick = function(){
    let liked = document.querySelector('.liked-2')
    liked.style.display = 'inline'

    let likeBtn1 = document.querySelector('.like-btn-2')
    likeBtn1.style.display = 'none'
}
document.querySelector('.like-btn-3').onclick = function(){
    let liked = document.querySelector('.liked-3')
    liked.style.display = 'inline'

    let likeBtn1 = document.querySelector('.like-btn-3')
    likeBtn1.style.display = 'none'
}


document.querySelector('.reply-btn-1').onclick = function(){
    
    let reply = document.querySelector('.reply')
    if (reply.style.display === 'flex')
        reply.style.display = 'none'
    else
        reply.style.display = 'flex'
}

document.querySelector('.reply-btn-2').onclick = function(){
    
    let reply2 = document.querySelector('.reply-2nd')
    if (reply2.style.display === 'block')
        reply2.style.display = 'none'
    else
        reply2.style.display = 'block'
}
document.querySelector('.reply-btn-3').onclick = function(){
    
    let reply2 = document.querySelector('.reply-3rd')
    if (reply2.style.display === 'block')
        reply2.style.display = 'none'
    else
        reply2.style.display = 'block'
}