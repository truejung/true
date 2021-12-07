/*햄버거 모양*/ 
const toggleBtn = document.querySelector('.navbar_toggleBtn');

/*햄버거 클릭시 메뉴창*/
const menu = document.querySelector('.first_nav');


/*클릭 이벤트*/
toggleBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
        toggleBtn.classList.toggle('active');
        
});


