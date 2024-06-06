document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
  
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const target = button.dataset.target;
        const isActive = button.classList.contains('active');
  
        //if (window.innerWidth < 768) {
        //  button.classList.toggle('active');
        //  document.getElementById(target).classList.toggle('active');
        //} else {
          tabButtons.forEach(btn => btn.classList.remove('active'));
          tabContents.forEach(content => content.classList.remove('active'));
  
          if (!isActive) {
            button.classList.add('active');
            document.getElementById(target).classList.add('active');
          }
        //}
      });
    });
  
    window.addEventListener('resize', () => {
      console.log('resize seen-', window.innerWidth)
      if (window.innerWidth >= 768) {
        const activeButton = document.querySelector('.tab-button.active');
        
        //var mobileView = document.getElementsByClassName('mobile-view');
        //console.log('mobileView', mobileView)
        //mobileView.style.display = "none";


        var desktopView = document.getElementsByClassName('desktop-view');
        console.log('desktopView', desktopView)
        desktopView.style.display = "none";

        if (activeButton) {
          const target = activeButton.dataset.target;
          tabContents.forEach(content => content.classList.remove('active'));
          document.getElementById(target).classList.add('active');
        }
      } else {
        tabContents.forEach(content => content.classList.remove('active'));
      }
    });
  });
  

//document.addEventListener('DOMContentLoaded', () => {
//    const tabButtons = document.querySelectorAll('.tab-button');
//    const tabContents = document.querySelectorAll('.tab-content');
  
//    tabButtons.forEach(button => {
//      button.addEventListener('click', () => {
//        const target = button.dataset.target;
//        const isActive = button.classList.contains('active');
  
//        if (window.innerWidth < 768) {
//          button.classList.toggle('active');
//          document.getElementById(target).classList.toggle('active');
//        } else {
//          tabButtons.forEach(btn => btn.classList.remove('active'));
//          tabContents.forEach(content => content.classList.remove('active'));
  
//          if (!isActive) {
//            button.classList.add('active');
//            document.getElementById(target).classList.add('active');
//          }
//        }
//      });
//    });
  
//    window.addEventListener('resize', () => {
//      if (window.innerWidth >= 768) {
//        const activeButton = document.querySelector('.tab-button.active');
//        if (activeButton) {
//          const target = activeButton.dataset.target;
//          tabContents.forEach(content => content.classList.remove('active'));
//          document.getElementById(target).classList.add('active');
//        }
//      } else {
//        tabContents.forEach(content => content.classList.remove('active'));
//      }
//    });
//  });
  