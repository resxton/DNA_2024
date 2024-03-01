import {ProductCardComponent} from "../../components/product-card/index.js";
import {ProductPage} from "../product/index.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }
    
    get pageRoot() {
        return document.getElementById('main-page')
    }
        
    getHTML() {
        return (
            `
                <div id="main-page" class="d-flex flex-wrap"><div/>
            `
        )
    }
        
    getData() {
        return [
            {
                id: 1,
                src: "../../images/shiba.jpeg",
                title: "Сиба-Ину",
                text: "Лучшая порода в мире!"
            },
            {
                id: 2,
                src: "../../images/korgi.jpeg",
                title: "Корги",
                text: "Помойте пузико"
            },
            {
                id: 3,
                src: "../../images/chihuahua.webp",
                title: "Чихуа-хуа",
                text: "Наденьте намордник"
            },
        ]
    }

    clickCard(e) {
        const cardId = e.target.dataset.id
        const data = this.getData()
    
        const productPage = new ProductPage(this.parent)
        productPage.render(data[cardId - 1])
    }
        
    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        
        const data = this.getData()
        data.forEach((item) => {    
            const productCard = new ProductCardComponent(this.pageRoot)
            productCard.render(item, this.clickCard.bind(this))
        })
    }
}