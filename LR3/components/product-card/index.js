export class ProductCardComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML() {
		return (
			`
				<div class="card" style="width: 300px;">
					<img class="card-img-top" src="https://i.pinimg.com/originals/c9/ea/65/c9ea654eb3a7398b1f702c758c1c4206.jpg" alt="картинка">
					<div class="card-body">
						<h5 class="card-title">Акция</h5>
						<p class="card-text">Вот тут информация об акции</p>
						<button class="btn btn-primary"">Нажми на меня</button>
					</div>
				</div>
			`
		)
	}
	
	render() {
		const html = this.getHTML()
		this.parent.insertAdjacentHTML('beforeend', html)
	}

	getHTML(data) {
		return (
			`
				<div class="card" style="width: 300px;">
					<img class="card-img-top" src="${data.src}" alt="картинка">
					<div class="card-body">
						<h5 class="card-title">${data.title}</h5>
						<p class="card-text">${data.text}</p>
						<button class="btn btn-primary" id="click-card-${data.id}" data-id="${data.id}">Нажми на меня</button>
					</div>
				</div>
			`
		)
	}
	
	render(data) {
		const html = this.getHTML(data)
		this.parent.insertAdjacentHTML('beforeend', html)
	}

	addListeners(data, listener) {
		document
			.getElementById(`click-card-${data.id}`)
			.addEventListener("click", listener)
	}
	
	render(data, listener) {
		const html = this.getHTML(data)
		this.parent.insertAdjacentHTML('beforeend', html)
		this.addListeners(data, listener)
	}

}