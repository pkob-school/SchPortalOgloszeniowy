import { useState } from 'react';
import Ogloszenie from  "./components/Ogloszenie";
import Menu from "./components/Menu";
import './App.css';
import Galeria from './components/Gallery';



function App() {
  const [nowaNazwa, setNowaNazwa] = useState("");
  const [ogloszenia, setOgloszenia] = useState([
      {id: 1, nazwa: "laptop Dell", cena:3500, dostepny: true, kategoria: "komputer", opis: "Laptop gamingowy"},
      {id: 2, nazwa: "Mysz bezprzewodowa", cena:150, dostepny: true, kategoria: "akcesoria", opis: "Mysz komputerowa"},
      {id: 3, nazwa: "Monitor 27' cali", cena:1500, dostepny: true, kategoria: "monitory", opis: "Monitor o wielkosci 27 cali"},
      {id: 4, nazwa: "Monitor 28' cali CRT", cena:1700, dostepny: true, kategoria: "monitory", opis: "Monitor o wielkosci 28 cali uzywajacy technologii Cathode Ray Tube (CRT)"},
      {id: 5, nazwa: "podkladka pod mysz", cena:35, dostepny: false, kategoria: "akcesoria", opis: "Podkladka pod mysz komputerowa"},
      {id: 6, nazwa: "Mikrofon", cena:35, dostepny: false, kategoria: "akcesoria", opis: "Urzadzenie przechwytujace dzwiek dla komputera"},
      {id: 7, nazwa: "Glosnik", cena:35, dostepny: false, kategoria: "akcesoria", opis: "Urzadzenie wydajace dzwiek z komputera"},
      {id: 8, nazwa: "SSD", cena:35, dostepny: false, kategoria: "komponenty", opis: "Dysk Solid State Drive (SSD) uzywajacy elektronow aby przechowywac bity"},
    ]);
  const [szukanaFraza, setSzukanaFraza] = useState("")
  const filterNotice = ogloszenia.filter((ogloszenie)=>ogloszenie.nazwa.toLowerCase().includes(szukanaFraza.toLocaleLowerCase()));

  const dodajOglosznie = (e) => {
    e.preventDefault();

    if (nowaNazwa.trim() === ""){
      alert("brak nazwy produktu");
      return;
    }
    const nowyProdukt = {
      id: Date.now(),
      nazwa: nowaNazwa.trim(),
      cena:0,
      kategoria: "ogolne",
      dostepny:true, 
      opis: "nowe ogloszenie"
    }; 


    setOgloszenia((poprzednie) => [...poprzednie, nowyProdukt]);
    setNowaNazwa("");
  }


  return (
  <>
  <Menu/>
  <main>
    <h1>Portal ogloszeniowy</h1>
    <p>kupuj i sprzedawaj </p>

    <form onSubmit={dodajOglosznie}>
      <input type="text" placeholder="nazwa nowego oggloszenia" value={nowaNazwa} onChange={(e) => setNowaNazwa(e.target.value)}/>
      <button type="submit">dodaj ogloszenie</button>
    </form>

    <input type="text" placeholder="wpisz nazwe produktu" value={szukanaFraza} onChange={(e) => setSzukanaFraza(e.target.value)}/>
    <div className="lista-ogloszen">
      {filterNotice.map((ogloszenie)=>(
        <Ogloszenie key={ogloszenie.id} ogloszenie={ogloszenie}/>
      ))}
    </div>
  </main>
  <Galeria/>
  </>
  );
}

export default App

