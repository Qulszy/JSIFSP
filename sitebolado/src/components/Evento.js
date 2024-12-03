const Ev = () => {
    const handleMeuEvento = () => {
        console.log('ativou o evento')
    }
    return(
        <div>
            <button onClick={handleMeuEvento}>botão</button>
        </div>
    )
}

export default Ev