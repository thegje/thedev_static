function toggleDarkMode() {
    document.getElementsByTagName("html")[0].classList.toggle("dark")
    // Save the current state to localStorage
    if (document.getElementsByTagName("html")[0].classList.contains('dark')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
}

// Function to set the initial state based on localStorage
function setInitialState() {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.getElementsByTagName("html")[0].classList.add("dark")
    }
}

// Call setInitialState when the page loads
document.addEventListener('DOMContentLoaded', setInitialState);

// Example: Toggle dark mode when a button is clicked
const darkModeToggle = document.getElementById('toggle-dark');
darkModeToggle.addEventListener('click', toggleDarkMode);

document.addEventListener('DOMContentLoaded', function() {
    function smoothScroll(event) {
        event.preventDefault();
        
        const targetId = event.currentTarget.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    }

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(function(link) {
        link.addEventListener('click', smoothScroll);
    }); 

    const hamburger = document.querySelector('.hamburger');
    const header = document.querySelector('header');
    const menuItems = document.querySelectorAll('.menu-item');
    const logo = document.querySelector(".logo");
    const main = document.querySelector("main");

    logo.addEventListener('click', function() { 
        hamburger.click(); 
    });

    main.addEventListener('click', function() { 
        if(header.classList.contains("active")){
            hamburger.click(); 
        };
    });

    function toggleMenu() {
        const menuItems = document.querySelectorAll('.menu-item'); 
      
        if (!header.classList.contains("active")) {
          menuItems.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('dropped');
            }, index * 60);
          });
        } else {
            // Hide menu items in reverse order
            [...menuItems].reverse().forEach((item, index) => {
              setTimeout(() => {
                item.classList.remove('dropped');
              }, index * 60);
            });
        }
      }

    hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
        if(header.classList.contains("active")){
            setTimeout(function(){
                header.classList.remove("active");
            },180)
        }else{
            header.classList.add("active");
        }
        this.classList.toggle('change');
        menuItems.forEach(item => {
            item.classList.toggle('show');
        });
    });
    document.querySelectorAll('.accordion-header').forEach(button => {
        button.addEventListener('click', () => {
            const accordionContent = button.nextElementSibling;
            
            button.classList.toggle('active');
            
            if (button.classList.contains('active')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = 0;
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const circleButton = document.getElementById('circleButton');
    
    circleButton.addEventListener('click', function() {
      this.classList.toggle('active');
    });   

}); 