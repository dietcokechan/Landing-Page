//global variables
const sections = document.querySelectorAll("section");
const navList = document.getElementById("nav-list");

//add links to navigation bar dynamically
for(let i = 0; i < sections.length; i++)
{
  //get data nav attribute
  var dataNav = sections[i].getAttribute("data-nav");
  
  //create new link element
  var li = document.createElement("li");
  
  //append text to li
  li.innerText = `${dataNav}`;
  
  //create anchor element and append to li
  var a = document.createElement("a");
  li.appendChild(a);
  
  //set href using id attribute
  var id = sections[i].getAttribute("id");
  a.href = `#${id}`;
  
  //append li to ul
  navList.appendChild(li);

  //scroll to section using event listener for anchor element
  li.addEventListener("click", (e) =>
  {
    //prevent jumping to section
    e.preventDefault();
    sections[i].scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
  });
};

function isIntersecting(section)
{
  const sectionRect = section.getBoundingClientRect().top;
  return (sectionRect >= 0 && sectionRect < 300);
};

window.addEventListener("scroll", () =>
{
  //loop to remove/add active class
  for(let section of sections)
  {
    //is intersecting
    if(isIntersecting(section))
    {
      section.classList.add("active-class");
    }
    else
    {
      section.classList.remove("active-class");
    };
  };
});