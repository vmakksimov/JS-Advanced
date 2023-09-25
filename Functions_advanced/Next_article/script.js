function getArticleGenerator(articles){
    let content = document.getElementById('content')
    
    let newArticles = articles

    function generate(){
        if (newArticles.length > 0){
            let article = document.createElement('article')
            let newWord = newArticles.shift()
            article.textContent = newWord
            content.appendChild(article)
        }
    }

    return generate
}