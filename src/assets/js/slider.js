const config = {
	type: 'carousel',
	perView: 4,
	breakpoints:{
		800:{
			perView:3,
		}
	}
}
new Glide('.glide', config).mount();
