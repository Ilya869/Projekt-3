const api = new Api('https://nomoreparties.co/cohort12', 
  headers = {
    authorization: 'a9daa281-e1c4-4b7e-b76a-0c25d3ad6a8f',
    'Content-Type': 'application/json'
  } 
);

const placesList = document.querySelector('.places-list');
const cardList = new CardList(placesList, createCardFn);
const previewPop = new PreviewPopup(document.querySelector('.popup_preview-image'));
const submitNewPlace = document.querySelector('.popup__button_new-place');;
const formEditInfo = document.querySelector('.popup__form_edit-info');

const editPopup = new Popup(document.querySelector('.popup_edit'));
const buttonOpenInfo = document.querySelector('.user-info__edit');
const editInfoFormValidator = new FormValidator(document.querySelector('.popup__form_edit-info'));
const editInfo = new UserInfo(document.querySelector('.user-info__name'), document.querySelector('.user-info__job'));
const editInfoPopup = new EditInfoPopup(document.querySelector('.popup_edit'), document.querySelector('.popup__form_edit-info'), editInfo);

const buttonOpenAddPlace = document.querySelector('.user-info__button');
const addPlaceFormValidator = new FormValidator(document.querySelector('.popup__form_new-place'));
const addNewPlacePopup = new AddNewPlacePopup(document.querySelector('.popup_new-place'), document.querySelector('.popup__form_new-place'), cardList);
const formNewPlace = new Form(document.querySelector('.popup__form_new-place'), addPlaceFormValidator);

formEditInfo.addEventListener('submit',() => {
    event.preventDefault()
    api.patchInfoProfile(formEditInfo.elements.name.value, formEditInfo.elements.job.value)
    .then(() => {
      editInfo.updateUserInfo(formEditInfo.elements.name.value, formEditInfo.elements.job.value.value)
      editPopup.close()
    })
    .catch((err) => {
      console.log(err)
    })
  })

function createCardFn(name, link)  {
    return new Card(name, link, previewPop).create()
}

buttonOpenInfo.addEventListener('click', () => {
    formEditInfo.name.value = editInfo.name
    formEditInfo.job.value = editInfo.job
    editInfoFormValidator.clearErrors()
    editPopup.open()
})

buttonOpenAddPlace.addEventListener('click', () => {
    submitNewPlace.classList.add('popup__button_disable')
    addPlaceFormValidator.clearErrors()
    formNewPlace.res()
    addNewPlacePopup.open()
})

addNewPlacePopup.setEventListener()
editInfoPopup.setEventListener()
addPlaceFormValidator.setEventListener();
editInfoFormValidator.setEventListener();

api.getCards()
.then((result) => {
  cardList.render(result);
})
.catch((err) => {
  console.log(err);
});

api.getInfoProfile()
.then((result) => {
  editInfo.updateUserInfoFromServer(result)
})
.catch((err) => {
  console.log(err)
})