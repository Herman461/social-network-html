const iconMenu = document.querySelector(".menu__icon");

if (iconMenu) {
	const menuBody = document.querySelector(".menu__body");
	iconMenu.addEventListener("click", e => {
		document.body.classList.toggle("_lock");
		iconMenu.classList.toggle("_active");
		menuBody.classList.toggle("_active");
	})
}

if (isMobile.any()) {
	let menuParents = document.querySelectorAll(".menu-page__parent .menu-page__link");
	for (let index = 0; index < menuParents.length; index++) {
		const menuParent = menuParents[index];
		menuParent.addEventListener("click", function(e) {
			e.preventDefault();
			menuParent.parentElement.classList.toggle('_active');
			
		});
	}
} else {
	let menuParents = document.querySelectorAll(".menu-page__parent");
	// const submenuItems = document.querySelectorAll('.submenu-page__item');

	for (let index = 0; index < menuParents.length; index++) {
		const menuParent = menuParents[index];
		// const submenuNumber = parseInt(menuParent.getAttribute("data-item"));
		// const submenuItem = submenuItems[submenuNumber];
		menuParent.addEventListener("mouseenter", e => {
			menuParent.classList.add('_active');
		})
		menuParent.addEventListener("mouseleave", e => {
			menuParent.classList.remove('_active');
		})
	}
}

const menuPageBurger = document.querySelector(".menu-page__burger");
const menuPageBody = document.querySelector(".menu-page__body");

menuPageBurger.addEventListener("click", function (e) {
	menuPageBurger.classList.toggle('_active');
	_slideToggle(menuPageBody);
});


let searchTitle = document.querySelector(".search-page__title");
let categoriesSearch = document.querySelector(".categories-search");

searchTitle.addEventListener("click", function (e) {
	searchTitle.classList.toggle("_active");
	_slideToggle(categoriesSearch);
});

let checkboxCategories = document.querySelectorAll(".categories-search__checkbox");

for (let index = 0; index < checkboxCategories.length; index++) {
	const checkboxCategory = checkboxCategories[index];
	checkboxCategory.addEventListener("change", function (e) {
		checkboxCategory.classList.toggle("_active");

		let checkboxActiveCategories = document.querySelectorAll(".categories-search__checkbox._active");

		if (checkboxActiveCategories.length > 0) {
			searchTitle.classList.add("_categories");
			let searchQuantity = document.querySelector(".search-page__quantity");
			searchQuantity.innerHTML = searchQuantity.getAttribute("data-text") + " " + checkboxActiveCategories.length;
		} else {
			searchTitle.classList.remove("_categories");
		}
	});

}