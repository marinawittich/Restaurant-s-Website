function countDowntimer (){
    const endOfOffer = new Date('December 4, 2023 13:00');
    const now = new Date();
    const diff = endOfOffer - now;

    const msInSecond = 1000;
    const msInMinutes = 60*1000;
    const msInHours = 60*60*1000;
    const msInDay = 24*60*60*1000;

    const displayDays = Math.floor(diff/msInDay);
    document.querySelector('#days').textContent = displayDays;

    const displayHours = Math.floor((diff%msInDay)/msInHours);
    document.querySelector('#hours').textContent = displayHours;
 
    const displayMinutes = Math.floor((diff%msInHours)/msInMinutes);
    document.querySelector('#minutes').textContent = displayMinutes;

    const displaySeconds = Math.floor((diff%msInMinutes)/msInSecond);
    document.querySelector('#seconds').textContent = displaySeconds;

    if(diff <=0){
        document.querySelector('#days').textContent = 0;
        document.querySelector('#hours').textContent = 0;
        document.querySelector('#minutes').textContent = 0;
        document.querySelector('#seconds').textContent = 0;
        clearInterval(timerID);
        offerEnded ();
    }

}
let timerID = setInterval(countDowntimer, 1000);
countDowntimer();

function offerEnded (){
    const heading = document.querySelector('h2');
    heading.textContent = 'Promotion is ended 🥹';
    heading.classList.add('change');
}

//animation

gsap.from("#image", { scrollTrigger: {
    trigger:"#image",
    toggleActions: "restart restart restart restart"}, 
 duration:2, delay:1, opacity:0})

 gsap.from(".about", { scrollTrigger: {
    trigger:".about",
    toggleActions: "restart restart restart restart"}, 
 y:150, duration:2, delay:1, opacity:0})

gsap.from(".menu-container", { scrollTrigger: {
    trigger:".menu-container",
    toggleActions: "restart restart restart restart"}, 
 scale:1.2, duration:2, delay:2, opacity:0})

 gsap.from(".position-image", { scrollTrigger: {
    trigger:".position-image",
    toggleActions: "restart restart restart restart"}, 
 y:150, duration:2, delay:1, opacity:0})

 gsap.from(".accordion-item", { scrollTrigger: {
    trigger:".accordion-item",
    toggleActions: "restart restart restart restart"}, 
 stagger:1, duration:2, delay:1, opacity:0})

 gsap.from(".testimonials", { scrollTrigger: {
    trigger:".testimonials",
    toggleActions: "restart restart restart restart"}, 
 stagger:1, duration:2, delay:1, opacity:0})

 
