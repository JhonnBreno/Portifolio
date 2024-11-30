const bar = document.getElementById('bar');
const sidebar = document.getElementById('sidebar');

bar.addEventListener('click', ()=>{
    sidebar.classList.toggle('hidden')
    sidebar.classList.toggle('visible')
});
closeBtn.addEventListener('click', () =>{
    sidebar.classList.toggle('hidden')
    sidebar.classList.toggle('visible')
})
AOS.init();
