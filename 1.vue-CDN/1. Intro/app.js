const app = Vue.createApp({
    // template:`
    //     <h1> Hola Mundo </h1>
    //     <p> {{ true ? 'Activo' : 'Inactivo' }} <p>
    // `

    data() {
        return {
            message: "Hola Mundo Pol"
        }
    },

    methods: {
        ChangeQuote( event ) {
            console.log("Hola Button", event)
            this.message = "Hola Var Change"
            this.capitalzize()
        },
        capitalzize() {
            this.message = this.message.toUpperCase()
        }
    }, 
})

app.mount('#myApp')