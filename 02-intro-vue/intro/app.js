const { createApp, ref} = Vue

const app = createApp({
    // template: `
    // <h1>{{ message }}</h1>
    // <p>Autor {{autor}}</p>
    // `,

    setup(){
        const message = ref("I'm Batman");
        const autor = ref("Bruce wayne")

        const changeName = () =>{
            message.value = "Hola, soy Goku";
            autor.value = "Kakaroto"
        }

        return {
            message,
            autor,
            changeName,
        }
    }
})

app.mount('#myApp')