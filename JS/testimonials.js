class Testimoni {
    constructor(review, image) {
    this._review = review
    this._image = image
}

get review() {
    return this._review
}

get image() {
    return this._image
}

get html(){
    return `<div class="testimoni">
        <img src="${this._image}" class="profile" />
        <p class="review">"${this._review}"</p>
        <p class="author">-${this._author}"</p>
    </div>`
 }
}

