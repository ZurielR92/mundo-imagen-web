import styles from './Header.module.scss'


const innerWidth = (typeof window === 'undefined') ? 0 : window.innerWidth;
const esDispositivoMovil = () => innerWidth <= 1048;


const initEvents = (grid:any, contenedorSubCategorias:any) => {

    if(!esDispositivoMovil()) {
        document.querySelector('.subcategoria.default')?.classList.add( `${ styles.activo }` )
    }


    document.querySelectorAll('#menu .categorias span').forEach(elemento => {
        elemento.addEventListener('mouseenter',(e)=>{
            if(!esDispositivoMovil()){
                document.querySelectorAll('#menu .subcategoria').forEach(categoria=>{
                    categoria.classList.remove(`${styles.activo}`);
                    if((categoria as HTMLElement).dataset.categoria == (e.target as HTMLElement).dataset.categoria){
                        categoria.classList.add(`${styles.activo}`);
                    }
                });
            }
        });
    });

    document.querySelectorAll('#menu .categorias span').forEach((elemento) => {
        elemento.addEventListener('click', (e) => {
            if(esDispositivoMovil()){
                contenedorSubCategorias.current?.classList.add(`${styles.activo}`)
                document.querySelectorAll('#menu .subcategoria').forEach((categoria)=> {
                    categoria.classList.remove(`${styles.activo}`)
                    if((categoria as HTMLElement).dataset.categoria == (e.target as HTMLElement).dataset.categoria){
                        
                        categoria.classList.add(`${styles.activo}`);
                    }
                })
            }
        })
    })

    document.querySelectorAll('#grid .contenedor-subcategorias .btn-regresar').forEach((boton)=>{
        boton.addEventListener('click',(e)=>{
            contenedorSubCategorias.current?.classList.remove(`${styles.activo}`)
        })
    })
}


const logic = {
    initEvents,
};

export default logic;