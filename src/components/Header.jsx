function Header(props){
    console.log(props)
    return(
        <>
        <header>
            <h1>{props.hea[0].titulo}</h1>
            <p>{props.hea[1].subtitulo}</p>
        </header>
        </>
    )
}

export default Header