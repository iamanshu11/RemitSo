// Custom Scripts for Pelican Template //

// $(".filter-button").click(function () {
//   var value = $(this).attr('data-filter');

//   if (value == "all") {
//     $('.filter').show('1000');
//   }
//   else {
//     $(".filter").not('.' + value).hide('3000');
//     $('.filter').filter('.' + value).show('3000');

//   }
// });

// if ($(".filter-button").removeClass("active")) {
//   $(this).removeClass("active");
// }
// $(this).addClass("active");

// const buttons = document.querySelectorAll('.filter-button');

// buttons.forEach(button => {
//   button.addEventListener('click', () => {
//     // Remove active class from all buttons
//     buttons.forEach(btn => btn.classList.remove('active'));

//     // Add active class to the clicked button
//     button.classList.add('active');
//   });
// });


$(document).ready(function() {
    // Show all items and set 'All' button as active on page load
    $('.filter-blog').show();
    $('.filter-button-blog').removeClass('active');
    $('.filter-button-blog[data-filter="all"]').addClass('active');

    $(".filter-button-blog").click(function() {
        var value = $(this).attr('data-filter');
        
        // Manage active class on buttons
        $('.filter-button-blog').removeClass('active');
        $(this).addClass('active');

        if (value == "all") {
            $('.filter-blog').show('1000');
        } else {
            $(".filter-blog").not('.' + value).hide('3000');
            $('.filter-blog').filter('.' + value).show('3000');
        }
    });
});

  


// ================Header JS  =============================

document.addEventListener('DOMContentLoaded', () => {
    // Select elements
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navbar = document.querySelector('#navbar');
    const dropdownLinks = document.querySelectorAll('.navbar .dropdown > a');

    // Toggle mobile nav
    mobileNavToggle.addEventListener('click', () => {
        navbar.classList.toggle('navbar-mobile');
        mobileNavToggle.classList.toggle('bx-menu');
        mobileNavToggle.classList.toggle('bx-x');
    });

    // Toggle dropdown in mobile nav
    dropdownLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (navbar.classList.contains('navbar-mobile')) {
                e.preventDefault();

                // Toggle the dropdown-active class on the parent <li>
                const parentLi = link.parentNode;
                const subMenu = parentLi.querySelector('ul');

                // Close any other open dropdowns in mobile view
                document.querySelectorAll('.dropdown-active').forEach(activeDropdown => {
                    if (activeDropdown !== parentLi) {
                        activeDropdown.classList.remove('dropdown-active');
                    }
                });

                // Toggle the current dropdown
                parentLi.classList.toggle('dropdown-active');

                // Ensure sub-menu visibility
                if (subMenu) {
                    subMenu.style.display = parentLi.classList.contains('dropdown-active') ? 'block' : 'none';
                }
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const filterCarousel = document.querySelector('.filter-carousel');
    
    // Ensure overflow behavior is applied for desktop
    if (filterCarousel) {
        if (window.innerWidth >= 768) {
            // Add horizontal scroll manually if desktop doesn't auto-scroll
            filterCarousel.style.overflowX = "auto";
        }
    }

    // Optional: Automatically scroll to the first button on page load (if desired)
    filterCarousel.scrollLeft = 0;
});

document.addEventListener("DOMContentLoaded", function () {
  // Asia Section
  const showMoreBtnAsia = document.getElementById("showMoreBtnAsia");
  const showLessBtnAsia = document.getElementById("showLessBtnAsia");
  const asiaColumns = document.querySelectorAll(".filter.asia .flag-column");

  asiaColumns.forEach((column) => {
      const flags = column.querySelectorAll(".flag-item");
      flags.forEach((flag, index) => {
          if (index >= 3) {
              flag.classList.add("hidden-flag");
          }
      });
  });

  showMoreBtnAsia.addEventListener("click", function () {
      const hiddenFlags = document.querySelectorAll(".filter.asia .hidden-flag");
      hiddenFlags.forEach((flag) => {
          flag.classList.remove("hidden-flag");
      });
      showMoreBtnAsia.style.display = "none";
      showLessBtnAsia.style.display = "inline-block";
  });

  showLessBtnAsia.addEventListener("click", function () {
      asiaColumns.forEach((column) => {
          const flags = column.querySelectorAll(".flag-item");
          flags.forEach((flag, index) => {
              if (index >= 3) {
                  flag.classList.add("hidden-flag");
              }
          });
      });
      showLessBtnAsia.style.display = "none";
      showMoreBtnAsia.style.display = "inline-block";
  });

  // Europe Section
  const showMoreBtnEurope = document.getElementById("showMoreBtnEurope");
  const showLessBtnEurope = document.getElementById("showLessBtnEurope");
  const europeColumns = document.querySelectorAll(".filter.europe .flag-column");

  europeColumns.forEach((column) => {
      const flags = column.querySelectorAll(".flag-item");
      flags.forEach((flag, index) => {
          if (index >= 3) {
              flag.classList.add("hidden-flag");
          }
      });
  });

  showMoreBtnEurope.addEventListener("click", function () {
      const hiddenFlags = document.querySelectorAll(".filter.europe .hidden-flag");
      hiddenFlags.forEach((flag) => {
          flag.classList.remove("hidden-flag");
      });
      showMoreBtnEurope.style.display = "none";
      showLessBtnEurope.style.display = "inline-block";
  });

  showLessBtnEurope.addEventListener("click", function () {
      europeColumns.forEach((column) => {
          const flags = column.querySelectorAll(".flag-item");
          flags.forEach((flag, index) => {
              if (index >= 3) {
                  flag.classList.add("hidden-flag");
              }
          });
      });
      showLessBtnEurope.style.display = "none";
      showMoreBtnEurope.style.display = "inline-block";
  });

  // North America Section
  const showMoreBtnNorthAmerica = document.getElementById("showMoreBtnNorthAmerica");
  const showLessBtnNorthAmerica = document.getElementById("showLessBtnNorthAmerica");
  const northAmericaColumns = document.querySelectorAll(".filter.north-america .flag-column");

  northAmericaColumns.forEach((column) => {
      const flags = column.querySelectorAll(".flag-item");
      flags.forEach((flag, index) => {
          if (index >= 3) {
              flag.classList.add("hidden-flag");
          }
      });
  });

  showMoreBtnNorthAmerica.addEventListener("click", function () {
      const hiddenFlags = document.querySelectorAll(".filter.north-america .hidden-flag");
      hiddenFlags.forEach((flag) => {
          flag.classList.remove("hidden-flag");
      });
      showMoreBtnNorthAmerica.style.display = "none";
      showLessBtnNorthAmerica.style.display = "inline-block";
  });

  showLessBtnNorthAmerica.addEventListener("click", function () {
      northAmericaColumns.forEach((column) => {
          const flags = column.querySelectorAll(".flag-item");
          flags.forEach((flag, index) => {
              if (index >= 3) {
                  flag.classList.add("hidden-flag");
              }
          });
      });
      showLessBtnNorthAmerica.style.display = "none";
      showMoreBtnNorthAmerica.style.display = "inline-block";
  });

  // South America Section
  const showMoreBtnSouthAmerica = document.getElementById("showMoreBtnSouthAmerica");
  const showLessBtnSouthAmerica = document.getElementById("showLessBtnSouthAmerica");
  const southAmericaColumns = document.querySelectorAll(".filter.south-america .flag-column");

  southAmericaColumns.forEach((column) => {
      const flags = column.querySelectorAll(".flag-item");
      flags.forEach((flag, index) => {
          if (index >= 3) {
              flag.classList.add("hidden-flag");
          }
      });
  });

  showMoreBtnSouthAmerica.addEventListener("click", function () {
      const hiddenFlags = document.querySelectorAll(".filter.south-america .hidden-flag");
      hiddenFlags.forEach((flag) => {
          flag.classList.remove("hidden-flag");
      });
      showMoreBtnSouthAmerica.style.display = "none";
      showLessBtnSouthAmerica.style.display = "inline-block";
  });

  showLessBtnSouthAmerica.addEventListener("click", function () {
      southAmericaColumns.forEach((column) => {
          const flags = column.querySelectorAll(".flag-item");
          flags.forEach((flag, index) => {
              if (index >= 3) {
                  flag.classList.add("hidden-flag");
              }
          });
      });
      showLessBtnSouthAmerica.style.display = "none";
      showMoreBtnSouthAmerica.style.display = "inline-block";
  });

  // Australia Section
  const showMoreBtnAustralia = document.getElementById("showMoreBtnAustralia");
  const showLessBtnAustralia = document.getElementById("showLessBtnAustralia");
  const australiaColumns = document.querySelectorAll(".filter.australia .flag-column");

  australiaColumns.forEach((column) => {
      const flags = column.querySelectorAll(".flag-item");
      flags.forEach((flag, index) => {
          if (index >= 3) {
              flag.classList.add("hidden-flag");
          }
      });
  });

  showMoreBtnAustralia.addEventListener("click", function () {
      const hiddenFlags = document.querySelectorAll(".filter.australia .hidden-flag");
      hiddenFlags.forEach((flag) => {
          flag.classList.remove("hidden-flag");
      });
      showMoreBtnAustralia.style.display = "none";
      showLessBtnAustralia.style.display = "inline-block";
  });

  showLessBtnAustralia.addEventListener("click", function () {
      australiaColumns.forEach((column) => {
          const flags = column.querySelectorAll(".flag-item");
          flags.forEach((flag, index) => {
              if (index >= 3) {
                  flag.classList.add("hidden-flag");
              }
          });
      });
      showLessBtnAustralia.style.display = "none";
      showMoreBtnAustralia.style.display = "inline-block";
  });

  // Africa Section
  const showMoreBtnAfrica = document.getElementById("showMoreBtnAfrica");
  const showLessBtnAfrica = document.getElementById("showLessBtnAfrica");
  const africaColumns = document.querySelectorAll(".filter.africa .flag-column");

  africaColumns.forEach((column) => {
      const flags = column.querySelectorAll(".flag-item");
      flags.forEach((flag, index) => {
          if (index >= 3) {
              flag.classList.add("hidden-flag");
          }
      });
  });

  showMoreBtnAfrica.addEventListener("click", function () {
      const hiddenFlags = document.querySelectorAll(".filter.africa .hidden-flag");
      hiddenFlags.forEach((flag) => {
          flag.classList.remove("hidden-flag");
      });
      showMoreBtnAfrica.style.display = "none";
      showLessBtnAfrica.style.display = "inline-block";
  });

  showLessBtnAfrica.addEventListener("click", function () {
      africaColumns.forEach((column) => {
          const flags = column.querySelectorAll(".flag-item");
          flags.forEach((flag, index) => {
              if (index >= 3) {
                  flag.classList.add("hidden-flag");
              }
          });
      });
      showLessBtnAfrica.style.display = "none";
      showMoreBtnAfrica.style.display = "inline-block";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Africa Section
  const showMoreBtnAfrica = document.getElementById("showMoreBtnAfrica");
  const showLessBtnAfrica = document.getElementById("showLessBtnAfrica");
  const africaColumns = document.querySelectorAll(".filter.africa .flag-column");

  // Initially hide all flags in the second column
  africaColumns.forEach((column) => {
      const flags = column.querySelectorAll(".flag-item");
      flags.forEach((flag, index) => {
          if (index >= 3) {  // Hide all flags after the 6th one
              flag.classList.add("hidden-flag");
          }
      });
  });

  // Show More button click event
  showMoreBtnAfrica.addEventListener("click", function () {
      const hiddenFlags = document.querySelectorAll(".filter.africa .hidden-flag");
      hiddenFlags.forEach((flag) => {
          flag.classList.remove("hidden-flag");
      });
      showMoreBtnAfrica.style.display = "none";  // Hide Show More button
      showLessBtnAfrica.style.display = "inline-block";  // Show Show Less button
  });

  // Show Less button click event
  showLessBtnAfrica.addEventListener("click", function () {
      africaColumns.forEach((column) => {
          const flags = column.querySelectorAll(".flag-item");
          flags.forEach((flag, index) => {
              if (index >= 3) {  // Hide flags after the 6th one
                  flag.classList.add("hidden-flag");
              }
          });
      });
      showLessBtnAfrica.style.display = "none";  // Hide Show Less button
      showMoreBtnAfrica.style.display = "inline-block";  // Show Show More button
  });
});


// ******************** Filter  ****************************
$(document).ready(function () {
  function showActiveContent() {
      // Get the active filter button
      var activeFilter = $('.filter-button.active').data('filter');

      // Hide all sections initially
      $('.filter').hide();

      // Show only the active section
      $('.filter.' + activeFilter).show();
  }

  // Show active content on page load
  showActiveContent();

  // Handle filter button clicks
  $(".filter-button").click(function () {
      var value = $(this).data('filter');

      // Toggle visibility of the content based on the selected filter
      $(".filter").hide();
      $('.filter.' + value).show();

      // Remove 'active' class from all buttons and add to the clicked one
      $(".filter-button").removeClass("active");
      $(this).addClass("active");
  });
});



// ******************** Pricing Dropdown ****************************
$(document).ready(function () {
    // Function to show content based on the selected filter with unique names
    function updatePricingTableDisplay() {
        // Get the value of the selected country from unique dropdown
        var selectedFilter = $('.country-select-unique').val();

        // Hide all filterable bodies with unique class
        $('.pricing-content-filter').hide();

        // Show the filter that matches the selected value
        $('.' + selectedFilter).show();
    }

    // Update the display on page load with the unique function
    updatePricingTableDisplay();

    // Handle changes in the dropdown with unique class
    $('.country-select-unique').change(updatePricingTableDisplay);
});




$('.slide-down-to-sec').click(function() {
    $('html, body').animate({
        scrollTop: $('section').next().offset().top
    }, 1000);
});




jQuery(function ($) {
    "use strict";
    $('.carousel-test').owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: false,
      navText: ["<i class='bi bi-arrow-left'></i>", "<i class='bi bi-arrow-right'></i>"],
      autoplay: true,
      autoplayTimeout: 3000,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    })

    $('.carousel-slide-for').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn', 
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('.carousel-pricing').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        navText: ["<i class='bi bi-arrow-left'></i>", "<i class='bi bi-arrow-right'></i>"],
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          900: {
            items: 1
          },
          1000: {
            items: 2
          }
        }
      })
    
    
    

    $(document).ready(function() {

        var sync1 = $("#sync1");
        var sync2 = $("#sync2");
        var slidesPerPage = 5; 
        var syncedSecondary = true;
    
        sync1.owlCarousel({
            items: 1,
            slideSpeed: 2000,
            nav: false,
            autoplay: true, 
            dots: true,
            loop: true,
            responsiveRefreshRate: 200,
            navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
        }).on('changed.owl.carousel', syncPosition);
    
        sync2
            .on('initialized.owl.carousel', function() {
                sync2.find(".owl-item").eq(0).addClass("current");
            })
            .owlCarousel({
                items: slidesPerPage,
                dots: false,
                nav: false,
                smartSpeed: 200,
                slideSpeed: 500,
                slideBy: 1, 
                responsiveRefreshRate: 100
            }).on('changed.owl.carousel', syncPosition2);
    
        function syncPosition(el) {

            var count = el.item.count - 1;
            var current = Math.round(el.item.index - (el.item.count / 2) - .5);
    
            if (current < 0) {
                current = count;
            }
            if (current > count) {
                current = 0;
            }
    
    
            sync2
                .find(".owl-item")
                .removeClass("current")
                .eq(current)
                .addClass("current");
            var onscreen = sync2.find('.owl-item.active').length - 1;
            var start = sync2.find('.owl-item.active').first().index();
            var end = sync2.find('.owl-item.active').last().index();
    
            if (current > end) {
                sync2.data('owl.carousel').to(current, 100, true);
            }
            if (current < start) {
                sync2.data('owl.carousel').to(current - onscreen, 100, true);
            }
        }
    
        function syncPosition2(el) {
            if (syncedSecondary) {
                var number = el.item.index;
                sync1.data('owl.carousel').to(number, 100, true);
            }
        }
    
        sync2.on("click", ".owl-item", function(e) {
            e.preventDefault();
            var number = $(this).index();
            sync1.data('owl.carousel').to(number, 300, true);
        });
    });


    /*-----------------------------------
    ----------- Scroll To Top -----------
    ------------------------------------*/

    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 1000) {
          $('#back-top').fadeIn();
      } else {
          $('#back-top').fadeOut();
      }
    });
    // scroll body to 0px on click
    $('#back-top').on('click', function () {
      $('#back-top').tooltip('hide');
      $('body,html').animate({
          scrollTop: 0
      }, 1500);
      return false;
    });


   

/* faq accordion */
$(document).ready(function () {
    // Add minus icon for collapse element which
    // is open by default
    $(".collapse.show").each(function () {
        $(this).prev(".card-header").find(".bx")
            .addClass("bx-minus").removeClass("bx-plus");
    });
    // Toggle plus minus icon on show hide
    // of collapse element
    $(".collapse").on('show.bs.collapse', function () {
        $(this).prev(".card-header").find(".bx")
            .removeClass("bx-plus").addClass("bx-minus");
    }).on('hide.bs.collapse', function () {
        $(this).prev(".card-header").find(".bx")
            .removeClass("bx-minus").addClass("bx-plus");
    });
});



/*----- Preloader ----- */

    $(window).on('load', function() {
  		setTimeout(function() {
        $('#loading').fadeOut('slow', function() {
        });
      }, 3000);
    });





    // -------------------------  New Homepage JS  ----------------------------------------------------------------

    var app = {};

    app.tabs = (function () {
        var module = {};

        module.init = function () {

            var $tabs = $('.tabs');
            var $tabList = $('.tabs__list');
            var $tabItem = $('.tabs__item');
            var $tabItemActive = $('.tabs__item--active');
            var $tabLink = $('.tabs__link');

            var width = $(window).width();

            var tabSwitcher = function () {
                // On tab link click
                $tabLink.on('click', function (e) {
                    var currentAttrValue = jQuery(this).attr('href');

                    // Show/Hide Tabs
                    $('.tabs ' + currentAttrValue).addClass('tabs__area--active').siblings().removeClass('tabs__area--active')

                    // Change/remove current tab to active
                    $(this).parent('li').addClass('tabs__item--active').siblings().removeClass('tabs__item--active');

                    e.preventDefault();
                });
            }

            var tabToggle = function () {
                $tabItem.on('click', function (e) {
                    $(this).parent($tabList).toggleClass('tabs__list--open');
                });
            }

            var tabController = function () {
                tabToggle();
            }

            $(window).resize(function () {
                var width = $(window).width();
                if ($(window).width() != width) {
                    width = $(window).width();
                    tabController();
                }
            });

            tabController();
            tabSwitcher();

        };
        return module;
    })();

    app.tabs.init();

});


jQuery(document).ready(function ($) {
    let mediaWidth = $("[media-block]").outerWidth();
    let sidebarWidth = $("[sidebar-block]").outerWidth();
    let mediaLength = $("[media-width]").length;
    let mediaMain = mediaWidth * mediaLength;
    let sidebarMain = sidebarWidth * mediaLength;
    $("[media-width]").css("width", mediaWidth + "px");
    $("[sidebar-width]").css("width", sidebarWidth + "px");
    $("[media-block]").css("width", mediaMain + "px");
    $("[sidebar-block]").css("width", sidebarMain + "px");
    let count = 0;
    let active = 1;
    $("[button-logo]").on("click", function () {
      let current = $(this).attr("sldr-data");
      let currentCount = current.charAt(current.length - 1);
      active = parseInt(currentCount);
      count = parseInt(currentCount) - 1;
      productSlide(count, active);
    });
    function productSlide(count, active) {
      $("[media-block]").css(
        "transform",
        "translateX(-" + mediaWidth * count + "px)"
      );
      $("[sidebar-block]").css(
        "transform",
        "translateX(-" + sidebarWidth * count + "px)"
      );
      $("[sldr-data]").removeClass("active");
      $('[sldr-data="slide__' + active + '"]').addClass("active");
    }
    setInterval(function () {
      if (count > mediaLength - 2) {
        count = 0;
        active = 1;
      } else {
        count++;
        active++;
      }
      productSlide(count, active);
    }, 6000);
  });
  

$(document).ready(function () {
  $('.carousel3').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  })
});

function openPopup() {
  document.getElementById('calendar-iframe').src = 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ22sKmIs-4ZefmqZ_aGlS1kC30i3QB-UZ-Sj6S7X0BROHg8RcmuyvNhexpVXHGbuY5iIhFflwC7?gv=true';
  document.getElementById('popup-overlay').style.display = 'flex';
}

function closePopup() {
  document.getElementById('popup-overlay').style.display = 'none';
  document.getElementById('calendar-iframe').src = '';  
}


//Detect browser's user agent and add to HTML attribute.
var doc = document.documentElement;
doc.setAttribute('data-useragent', navigator.userAgent);

document.addEventListener('DOMContentLoaded', function () {
    const bodyElement = document.body;
    const lightModeButton = document.getElementById('light-mode');
    const darkModeButton = document.getElementById('dark-mode');

    // Function to apply dark mode
    function toggleDarkMode(shouldAdd) {
        bodyElement.classList.toggle('dark-mode', shouldAdd);
    }

    // Event listeners for the buttons
    lightModeButton.addEventListener('click', function () {
        toggleDarkMode(false);
    });

    darkModeButton.addEventListener('click', function () {
        toggleDarkMode(true);
    });

    // Optionally save to localStorage and check it on load
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        toggleDarkMode(true);
    }
});

// Listen for system theme changes (optional)
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    toggleDarkMode(event.matches);
});


document.addEventListener('DOMContentLoaded', function() {
    const toggleCheckbox = document.getElementById('theme-toggle');
    const sections = document.querySelectorAll('.theme');
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    toggleCheckbox.checked = prefersDarkMode; // Set checkbox based on system preference

    toggleCheckbox.addEventListener('change', function() {
        if (this.checked) {
            sections.forEach(section => {
                section.classList.remove('light');
                section.classList.add('dark');
            });
        } else {
            sections.forEach(section => {
                section.classList.remove('dark');
                section.classList.add('light');
            });
        }
    });

    // Apply initial theme based on the system preference
    if (prefersDarkMode) {
        sections.forEach(section => {
            section.classList.add('dark');
        });
    } else {
        sections.forEach(section => {
            section.classList.add('light');
        });
    }
});
