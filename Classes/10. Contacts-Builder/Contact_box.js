
class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName
        this.lastName = lastName
        this.phone = phone
        this.email = email
        this._online = false

    }

    get online () {
		return this._online
	}

	set online (v) {
		this._online = v

		if (this.divTitle) {
			this.divTitle.className = this._online ? 'title online' : 'title'
		}
	}



    render(id) {

        this.article = document.createElement('article')
        this.divTitle = document.createElement('div')
        this.divInfo = document.createElement('div')
        this.spanPhone = document.createElement('span')
        this.spanEmail = document.createElement('span')
        this.button = document.createElement('button')
        this.button.innerHTML = '&#8505'

        

        this.divTitle.className = this._online ? 'title online' : 'title'
        this.divInfo.className = 'info'
        this.divInfo.style.display = 'none'
        this.spanPhone.innerHTML = this.phone
        this.spanEmail.innerHTML = this.email
        this.divTitle.innerHTML = `${this.firstName} ${this.lastName}`
        this.divTitle.appendChild(this.button)
        this.divInfo.appendChild(this.spanEmail)
        this.divInfo.appendChild(this.spanPhone)
        this.article.appendChild(this.divTitle)
        this.article.appendChild(this.divInfo)



        document.getElementById(id).appendChild(this.article)

        this.button.addEventListener('click', (e) => {
            let divInfo = e.target.parentElement.parentElement.children[1]
            if (divInfo.style.display === 'none') {
                divInfo.style.display = 'block'
            } else {
                divInfo.style.display = 'none'
            }
        })



    }


}





let a = new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com")
let b = new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg")
let c = new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")


a._online = true
a.render('main')
b.render('main')
c.render('main')
