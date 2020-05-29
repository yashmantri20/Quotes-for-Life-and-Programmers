class Quotesforprogrammer
{
    constructor(i)
    {
        this.i = i
    }

    next()
    {   
        if(this.i !== 43)
        {
            this.i += 1
            this.fetchQuotes()
        }
    }

    back()
    {
        if(this.i !== 1)
        {
            this.i -= 1
            this.fetchQuotes()
        }
    }

    async fetchQuotes()
    {
        const res = await fetch('https://programming-quotes-api.herokuapp.com/quotes/lang/en')
        const quotes = await res.json()
        this.displayPost(quotes)
    }

    displayPost(quotes)
    {
        const post = document.querySelector('.post')
        post.innerHTML = `<p>${quotes[this.i].en}</p>`
    }

    async shareOntwitter(){
        const res = await fetch('https://programming-quotes-api.herokuapp.com/quotes/lang/en')
        const quotes = await res.json()
        var url = `https://twitter.com/intent/tweet?text=${quotes[this.i].text}`
        window.open(url)
        return false;
     }
}




const q = new Quotesforprogrammer(1)

// document.querySelector('.post').addEventListener('load',e => q.fetchQuotes())
window.addEventListener('load',e => q.fetchQuotes())

document.getElementById('myid').addEventListener('click', e => q.next())

document.getElementById('myid1').addEventListener('click', e => q.back())

document.getElementById('share').addEventListener('click', () => q.shareOntwitter())