// Vi begynner først med å hente alle knappene fra HTML siden.
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

// const navnForVariabel = document.querySelector('#IDNAVN')
// sier at vi vil gi navnForVariabel en verdi som er document.querySelector('#IDNAVN')
// document betyr at den ser igjennom hele dokumentet
// og så legger vi på innebygde javascript funksjonen .querySelector(),
// som gjør at den ser igjennom document etter det som er inne i ().
// her ser vi etter en id, og skriver '#IDNAVN' inne i (), hvor IDNAVN er det som er skrevet inne i elementet i HTML.

// Deretter gjør vi det samme med alle tekstene vi skal vise
const displayYourChoice = document.querySelector('#yourChoice');
const displayComputerChoice = document.querySelector('#computerChoice');
const displayResults = document.querySelector('#results');

// Vi lager en yourChoice variabel med bruk av let istedenfor const.
// let brukes når du vil endre verdien inne i for eksempel yourChoice lengre nede i koden
// const tillater ikke at du endrer det
let yourChoice;

// Så skriver vi valgene vi ønsker at programmet skal velge mellom, inne i det som kalles et array
// vi skiller alle verdiene inne i arrayet vet bruk av et komma.
// Seinere henter vi ut de verdiene, med å skrive choices[TALL FRA 0-2]
// her det da 'rock' 0, 'paper' 1, 'scissors' 2.
const choices = ['rock', 'paper', 'scissors'];

// Vi skriver deretter funksjonen som gjør at noe skjer når vi henter den fram.
// function funksjonsNavn() {kode}
// er oppsette på å skrive en funksjon
// Det må ha () etter navnet, ellers vil den ikke fungere.
function selectRock() {
  // Her endrer den verdien i yourChoice, til å være 'rock'
  yourChoice = 'rock';

  // og så henter den fram en funksjon vi skriver lengre nede i koden.
  computerChoice();
}

// Så lager vi en eventListener, på det vi har definert lengre opp i koden.
// Her velger vi da at rockButton skal ha en addEventListener()
// som ser etter et 'click', altså at noen trykker på elementet
// og deretter skriver vi hvilken funksjon vi vil kjøre, og her er det funksjonen vi skrev over, bare uten () etter selectRock
rockButton.addEventListener('click', selectRock);

// Vi gjentar det samme for paper og scissors, med å endre navnene
function selectPaper() {
  yourChoice = 'paper';
  computerChoice();
}

paperButton.addEventListener('click', selectPaper);

function selectScissors() {
  yourChoice = 'scissors';
  computerChoice();
}

scissorsButton.addEventListener('click', selectScissors);

// Så skriver vi funksjonen som vi vil skal skje etter vi har trykke på en av knappene.
function computerChoice() {
  // vi legger til at vi vil ha et tilfeldig tall mellom 0 og 2, inne i array valget som er choices[HER]
  // Math.random() skriver et tilfelig tall mellom 0 og 0.9999. Her ganger vi den versien med 3, som gjør at vi får et tall mellom 0 og 2.9999
  // Math.floor gjør at verdiene går ned til nærmeste hele tall. 0.2263 blir da 0, 2.951981 blir da 2 osv.
  // Deretter lagrer vi den verdien i computerNumber
  let computerNumber = choices[Math.floor(Math.random() * 3)];
  // Nå har computerNumber en verdi av enten 'rock', 'paper' eller 'scissors'

  // Her velger vi da først den variabelen vi definerte lengre oppe, som for eksempel displayYourChoice element,
  // og vil at innholdet (.innerHTML) skal være verdien i yourChoice.
  displayYourChoice.innerHTML = yourChoice;
  displayComputerChoice.innerHTML = computerNumber;
  // Da endrer den det som er inne i p elementet på HTML siden, til det som er i yourChoice

  // til slutt sjekker vi hvem som vinner med bruk av en if else statement
  // her går den da først til if og sjekker om det som er inne i () stemmer
  // her sjekker vi om verdien i yourChoice er akkurat det samme (===) som versiden til computerNumber.
  // Deretter gjør den det som kommer inne i {} rett etter ()

  if (yourChoice === computerNumber) {
    displayResults.innerHTML = 'Its a draw!';

    // hvis den ikke stemmer, så går den videre til else if. Her sjekker den da forskjellge verdier, for å se om du vinner.
    // Her må begge tingene på hver side av && stemme, for at den skal gjøre det som er i {} rett etter
  } else if (computerNumber === 'rock' && yourChoice === 'paper') {
    displayResults.innerHTML = 'You win!';
  } else if (computerNumber === 'paper' && yourChoice === 'scissors') {
    displayResults.innerHTML = 'You win!';
  } else if (computerNumber === 'scissors' && yourChoice === 'rock') {
    displayResults.innerHTML = 'You win!';

    // Hvis ingenting over stemmer, så går den automatisk ned til det som er i else statement, som er da at du taper runden.
  } else {
    displayResults.innerHTML = 'You lose!';
  }
}

// Da var du ferdig!
