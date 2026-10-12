import { useState } from 'react';
import Ogloszenie from  "./components/Ogloszenie";
import './App.css';




const ogloszenia = [
  {id: 1, nazwa: "laptop Dell", cena:3500, dostepny: true, kategoria: "komputer", opis: "Laptop gamingowy"},
  {id: 2, nazwa: "Mysz bezprzewodowa", cena:150, dostepny: true, kategoria: "akcesoria", opis: "Mysz komputerowa"},
  {id: 3, nazwa: "Monitor 27' cali", cena:1500, dostepny: true, kategoria: "monitory", opis: "Monitor o wielkosci 27 cali"},
  {id: 4, nazwa: "Monitor 28' cali CRT", cena:1700, dostepny: true, kategoria: "monitory", opis: "Monitor o wielkosci 28 cali uzywajacy technologii Cathode Ray Tube (CRT)"},
  {id: 5, nazwa: "podkladka pod mysz", cena:35, dostepny: false, kategoria: "akcesoria", opis: "Podkladka pod mysz komputerowa"},
  {id: 6, nazwa: "Mikrofon", cena:35, dostepny: false, kategoria: "akcesoria", opis: "Urzadzenie przechwytujace dzwiek dla komputera"},
  {id: 7, nazwa: "Glosnik", cena:35, dostepny: false, kategoria: "akcesoria", opis: "Urzadzenie wydajace dzwiek z komputera"},
  {id: 8, nazwa: "SSD", cena:35, dostepny: false, kategoria: "komponenty", opis: "Dysk Solid State Drive (SSD) uzywajacy elektronow aby przechowywac bity"},
];


function App() {
  const [count, setCount] = useState(0)

  return (
   <main>
    <h1>Portal ogloszeniowy</h1>
    <p>kupuj i sprzedawaj </p>

    <p>Ilosc produktow: {ogloszenia.length}</p>
    <div className="lista-ogloszen">
      {ogloszenia.map((ogloszenie)=>(
        <Ogloszenie key={ogloszenie.id} ogloszenie={ogloszenie}/>
      ))}
    </div>
   </main>
  );
}

export default App
