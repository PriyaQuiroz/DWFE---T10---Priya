function Footer(props){
    console.log(props)
    return(
        <>
        <footer>
            <p>{props.termino[0].anio}</p>
            <p>{props.termino[1].nombre}</p>
            <p>Todos los derechos reservados.</p>
        </footer>
        </>
    )
}

export default Footer