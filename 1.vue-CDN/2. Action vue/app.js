const quotes = [
    {quote: "La vida es baella", author:"Pol Pichel Sanchez"},
    {quote: "La vida es baella", author:"Pol Pichel Sanchez"},
    {quote: "La vida es baella", author:"Pol Pichel Sanchez"}
]


const app = Vue.createApp({

    data() {
        return {
            quotes,
            newQuote: ""
        }
    },
    methods: {
        addQuote({ key }) {
            this.quotes.unshift({
            quote: this.newQuote
            })
        }
    },
})

app.mount('#myApp')