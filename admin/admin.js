const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item => {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i => {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if (window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if (searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if (window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if (window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if (this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if (this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})

document.querySelectorAll('.side-menu a').forEach(item =>
	item.addEventListener("click", function(){
		const section = item.dataset.section
		const activeElemnt = document.querySelector('.active-section')
		activeElemnt.classList.remove('active-section')
		document.getElementById(section).classList.add('active-section')
	})
)

function renderCategory(){
	const localItems = localStorage.getItem('categories') || []

	if(localItems.length){
		const categories = JSON.parse(localStorage.getItem('categories'))
		const categoryList = document.querySelector('.category-list')
		categoryList.replaceChildren()

		for(const category of categories){
			const liElement = document.createElement('li')
			liElement.textContent = category
			categoryList.appendChild(liElement)
		}
	}
}
renderCategory()

    const formAddCategory = document.querySelector('.form-add-category button')
    formAddCategory.addEventListener('click', function(){
	const inputCategory = document.querySelector('.form-add-category_input')
	const title = inputCategory.value
	const localItems = localStorage.getItem('categories') || [] //чтение из лс

	if(title.trim()){
		if (!localItems.length){
			localItems.push(title)
			localStorage.setItem('categories', JSON.stringify(localItems))

			console.log("title.trim", title.trim);
			console.log("localItems.push(title)", localItems);
			console.log("localStorage.setItem", localStorage.setItem('categories',JSON.stringify(localItems)));
		}else{
			const categories = JSON.parse(localItems)

			console.log("categories хзхзхз");


			if(!categories.includes(title)){
				categories.push(title)	


				console.log("!categories.includes(title)", !categories.includes(title));
				console.log("categories.push(title)", categories.push(title));
			}
			localStorage.setItem('categories', JSON.stringify(categories)) //

		}	
	}
	inputCategory.value = ''

	console.log("категория создалась!", inputCategory.value);

	renderCategory()
}



)
	
  
