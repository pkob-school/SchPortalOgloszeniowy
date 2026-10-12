function Ogloszenie({ogloszenie}) {
    return(
        <article className="karta">
            <h2>{ogloszenie.nazwa}</h2>
            <p>Cena: {ogloszenie.cena}PLN</p>
            <p>Kategoria: {ogloszenie.kategoria}</p>
            {ogloszenie.dostepny ? (<div color="green">Dostepny</div>) : (<div color="red">Niedostepny</div>)}
            <p><sub>{ogloszenie.opis}</sub></p>
        </article>
    )
}

export default Ogloszenie;