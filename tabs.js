function tab(e)
{
	console.log(e);

	var current = document.getElementsByClassName("active");
	
	for(var j=0;j<current.length;j++)
	{
		current[j].classList.remove("active");
	}

	e.classList.add("active");

	if(e.id === "tab_links")
	{
		Array.from(document.getElementsByClassName("class-home")).forEach((e) => {
			e.style.display = "none";
		});

		Array.from(document.getElementsByClassName("class-links")).forEach((e) => {
			e.style.display = "block";
		});
	}
	else if (e.id === "tab_home")
	{
		Array.from(document.getElementsByClassName("class-home")).forEach((e) => {
			e.style.display = "block";
		});

		Array.from(document.getElementsByClassName("class-links")).forEach((e) => {
			e.style.display = "none";
		});
	}
}

/*
window.onload = (e) => {
	var navBar = document.getElementById("nav_bar");
	var navLinks = document.getElementsByClassName("nav-button");

	console.log(navBar);
	console.log(navLinks);
		
	for(var i=0;i<navLinks.length;i++)
	{
		navLinks[i].addEventListener("click", () => {
			console.log(this);
			var current = navBar.getElementsByClassName("active");
			console.log(current);
			
			for(var j=0;j<current.length;j++)
			{
				current[j].classList.remove("active");
			}
			
			this.classList.add("active");
		});
	}
};*/