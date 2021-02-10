class PreviewPopup extends Popup {
    constructor(popupContainer) {
        super(popupContainer)
        this.image = this.popupContainer.querySelector('.popup__image')
    }
        open(link) {
        this.image.src = link;
        super.open();
    }
}