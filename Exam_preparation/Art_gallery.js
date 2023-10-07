class ArtGallery {
    constructor(creator) {
        this.creator = creator
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 }
        this.listOfArticles = []
        this.guests = []

    }

    addArticle(articleModel, articleName, quantity) {
        let currentArticle = this.listOfArticles.find(x => x.articleName === articleName)
        articleModel = articleModel.toLowerCase()
        if (!this.possibleArticles[articleModel]) {
            throw new Error("This article model is not included in this gallery!")
        } else if (currentArticle) {
            currentArticle.quantity += quantity

        } else {
            this.listOfArticles.push({
                articleModel,
                articleName,
                quantity
            })
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }

    inviteGuest(guestName, personality) {
        let guestExsists = this.guests.find(x => x.guestName === guestName)
        let points = 0;
        if (guestExsists) {
            throw new Error(`${guestName} has already been invited.`)
        }

        if (personality === 'Vip') {
            points = 500
        } else if (personality === 'Middle') {
            points = 250
        } else {
            points = 50
        }

        this.guests.push({
            guestName,
            points,
            purchaseArticle: 0
        })

        return `You have successfully invited ${guestName}!`
    }

    buyArticle(articleModel, articleName, guestName) {
        articleModel = articleModel.toLowerCase()
        let articleExists = this.listOfArticles.find(x => x.articleName === articleName && x.articleModel === articleModel)
        let guestExists = this.guests.find(x => x.guestName === guestName)
        if (!articleExists) {
            throw new Error("This article is not found.")
        }

        if (articleExists.quantity === 0) {
            return `The ${articleName} is not available.`
        }

        if (!guestExists) {
            return "This guest is not invited."
        }

        if (guestExists.points < this.possibleArticles[articleModel]) {
            return "You need to more points to purchase the article."
        }

        guestExists.points -= this.possibleArticles[articleModel]
        guestExists.purchaseArticle += 1
        articleExists.quantity -= 1

        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`
    }

    showGalleryInfo(criteria) {
        let result = '';
        if (criteria === 'article') {
            result += "Articles information:\n"
            this.listOfArticles.forEach(x => {
                result += `${x.articleModel} - ${x.articleName} - ${x.quantity}\n`
            })

        } else {
            result += "Guests information:\n"
            this.guests.forEach(x => {
                result += `${x.guestName} - ${x.purchaseArticle}\n`
            })

        }
        return result.trim()
    }
}


const artGallery = new ArtGallery('Curtis Mayfield');
console.log(artGallery.addArticle('picture', 'Mona Liza', 3));

console.log(artGallery.addArticle('Item', 'Ancient vase', 2));

console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));

console.log(artGallery.inviteGuest('John', 'Vip'));

console.log(artGallery.inviteGuest('Peter', 'Middle'));

console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));

console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));

console.log(artGallery.showGalleryInfo('article'));

console.log(artGallery.showGalleryInfo('guest'));
