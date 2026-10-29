function TarjetaInfo(){
    return(
        <>
        <section className="tarjeta-info">
            <h2>{titulo}</h2>
            <div>{children}</div>
        </section>

        </>
    )
}

export default TarjetaInfo