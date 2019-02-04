function animateMenu(x)
{
  toggleMenu(x);
  $("main").on("click", function()
  {
    toggleMenu(x);
    $("main").off("click");
  });
}

function toggleMenu(x)
{
  /* animates the bars to form an x */
  x.classList.toggle("change");
  /*blurs the background when the menu opens */
  $("body").toggleClass("menuIsOpen");
  /* pulls the menu from the left of the screen */
  $(".menu").toggleClass("menu_show");
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction()
{
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
    {
        document.getElementById("toTop").style.display = "block";
    }
    else
    {
        document.getElementById("toTop").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction()
{
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

$(document).ready( function()
{
  var height = $("body").height();
  $(".menu").height(height - 120);

  var options = document.getElementsByClassName("menu_item_with_options");
  var content = document.getElementsByClassName("side_menu");
  for (var i = 0; i < options.length; i++)
  {
    options[i].addEventListener("mouseenter", function()
    {
      for (var j = 0; j < content.length; j++)
      {
        content[j].style.display = "block";
        content[j].addEventListener("mouseleave", function()
        {
          for (var k = 0; k < content.length; k++)
          {
            content[k].style.display = "none";
          }
        });
      }
    });
    options[i].addEventListener("mouseleave", function()
    {
      for (var j = 0; j < content.length; j++)
      {
        content[j].addEventListener("mouseenter", function()
        {
          for (var j = 0; j < content.length; j++)
          {
            content[j].style.display = "block";
          }
        });
        content[j].addEventListener("mouseleave", function()
        {
          for (var j = 0; j < content.length; j++)
          {
            content[j].style.display = "none";
          }
        });
        content[j].style.display = "none";

      }
    });
  }
});
