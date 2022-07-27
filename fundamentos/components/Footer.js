app.component('footer-banco', {
    props: {
        saldo: Number,
        textoFooter: {
            type: String,
            default: 'Footer'
        }
    },
    template:
        /*html*/`
        <div>
            <h3> {{textoFooter}} - saldo: {{saldo}}</h3>
        </div>
        `
})