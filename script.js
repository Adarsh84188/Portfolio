var typed = new Typed('#element', {
      strings: ['Web developer', 'Fullstack Developer' , 'Frontend Specilist'],
      typeSpeed: 70,
      backspeed: 70,
      loop: true,
    });


    const navbartoggle = document.querySelector('.navbar-toggle');
    const navbarmenu = document.querySelector('.navbar-menu');

    navbartoggle.addEventListener('click', () =>{
      navbartoggle.classList.toggle('active');
      navbarmenu.classList.toggle('active');
    });
    
    function goToAbout() {
  window.location.href = "about.html";
}
