export class ProductComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(data) {
		return (
			`
				<div class="card mb-3" style="width: 540px;">
					<div class="row g-0">
						<div class="col-md-4">
							<img src="${data.src}" class="img-fluid" alt="картинка">
						</div>
						<div class="col-md-8">
							<div class="card-body">
								<h5 class="card-title">${data.title}</h5>
								<p class="card-text">${data.text}</p>
								<button class="btn btn-primary" id="showAccordionBtn">Купить</button>
								<div class="accordion mt-3" id="accordionExample" style="display: none;">
									<div class="accordion-item">
										<h2 class="accordion-header" id="headingOne">
											<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
												Стоимость корма
											</button>
										</h2>
										<div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
											<div class="accordion-body">
												Средняя стоимость корма составляет 3584$ за кг.
											</div>
										</div>
									</div>
									<div class="accordion-item">
										<h2 class="accordion-header" id="headingOne">
											<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
												Стоимость ветеринара
											</button>
										</h2>
										<div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
											<div class="accordion-body">
												Средняя стоимость похода в ветклинику составляет 9324924$ за 1 раз.
											</div>
										</div>
									</div>
									<div class="accordion-item">
										<h2 class="accordion-header" id="headingOne">
											<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
												Прогулки
											</button>
										</h2>
										<div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
											<div class="accordion-body">
												Гулять с собакой надо минимум 78 раз в день.
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			`
		);
	}
	

    render(data) {
        const html = this.getHTML(data);
        this.parent.insertAdjacentHTML('beforeend', html);

        const showAccordionBtn = document.getElementById('showAccordionBtn');
        showAccordionBtn.addEventListener('click', () => {
            this.showAccordion();
        });
    }

    showAccordion() {
        const accordion = document.getElementById('accordionExample');
        
        // Check if the accordion is currently visible
        const isAccordionVisible = accordion.style.display !== 'none';

        // Toggle the visibility of the accordion
        accordion.style.display = isAccordionVisible ? 'none' : 'block';
    }
}
