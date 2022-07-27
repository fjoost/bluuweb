const app = Vue.createApp({
    data() {
        return {
            banco: "BCI",
            cuenta: "Corriente",
            rut: "1946198-k",
            saldo: 0,
            estado: true,
            link: "https://youtube.com/bluuweb",
            servicios: ["Transferencias", "Inversiones", "Pagos", "Giros"],
            desactivar: false,
        }
    },
    methods: {
        agregarSaldo() {
            this.saldo = this.saldo + 100;
            this.desactivar = false
        },
        disminuirSaldo() {
            if(this.saldo === 0){
                alert('Tu monto es $0, has llegado al final')
                this.desactivar = true
                return
            }
            this.saldo = this.saldo -100;
        }
    },
    computed: {
        colorCantidad() {
            return this.saldo > 100 ? 'text-success' : 'text-danger'
        }
    }
    
});