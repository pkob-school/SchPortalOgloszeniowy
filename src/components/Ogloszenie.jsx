function Ogloszenie({ogloszenie}) {
    const pokazSzczegol = () => {
        alert(`Produkt: ${ogloszenie.nazwa} Cena: ${ogloszenie.cena} Opis: ${ogloszenie.opis}`);
    }

    return(
        <article className="karta">
            <h2>{ogloszenie.nazwa}</h2>
            <p>Cena: {ogloszenie.cena}PLN</p>
            <p>Kategoria: {ogloszenie.kategoria}</p>
            {ogloszenie.dostepny ? (<div color="green">Dostepny</div>) : (<div color="red">Niedostepny</div>)}
            <p><sub>{ogloszenie.opis}</sub></p>
            <button onClick={pokazSzczegol}>szczegoly</button>
        </article>
    )
}

export default Ogloszenie;