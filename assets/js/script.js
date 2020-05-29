class Quotesforlife
{
    constructor(i)
    {
        this.i = i
    }

    next()
    {   
        if(this.i !== 1642)
        {
            this.i += 1
            this.fetchQuotes()
        }
    }

    back()
    {
        if(this.i !== 0)
        {
            this.i -= 1
            this.fetchQuotes()
        }
    }

    async fetchQuotes()
    {
        const res = await fetch('https://type.fit/api/quotes')
        const quotes = await res.json()
        this.displayPost(quotes)
    }

    displayPost(quotes)
    {
        const post = document.querySelector('.post')
        post.innerHTML = `<p>${quotes[this.i].text}</p>`
    }

    async shareOntwitter(){
        const res = await fetch('https://type.fit/api/quotes')
        const quotes = await res.json()
        var url = `https://twitter.com/intent/tweet?text=${quotes[this.i].text}`
        window.open(url)
        return false;
     }
}




const q = new Quotesforlife(0)

// document.querySelector('.post').addEventListener('load',e => q.fetchQuotes())
window.addEventListener('load',e => q.fetchQuotes())

document.getElementById('myid').addEventListener('click', e => q.next())

document.getElementById('myid1').addEventListener('click', e => q.back())

document.getElementById('share').addEventListener('click', () => q.shareOntwitter())