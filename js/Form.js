class Form {
    constructor(form, exValid) {
        this.form = form
        this.exValid = exValid
    }

    res() {
        this.form.reset()
    }
}