class CardList {
    constructor(domElement, createCardFn) {
        this.domElement = domElement;
        this.createCard = createCardFn; 
    }
    addCard(name, link) {
       this.domElement.appendChild(this.createCard(name, link));
    }

    render(result) {
        result.forEach(item => {
            this.addCard(item.name, item.link);
        });
    }
}