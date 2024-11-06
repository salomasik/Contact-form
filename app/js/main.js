const form = document.forms[0];
const messageEl = document.querySelector('.message-sent');




form.addEventListener('submit',(e)=>{
    e.preventDefault();
    messageEl.removeAttribute('hidden');
    setTimeout(()=>{messageEl.toggleAttribute('hidden');}, 5000);

})




