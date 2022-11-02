# Squadpage

<img width="1438" alt="Screenshot 2022-09-23 at 14 16 08" src="https://user-images.githubusercontent.com/64197688/191962151-88fb907a-e7d2-49ec-9984-73286c124815.png">

## :pencil2: Beschrijving

Dit is de repository van de squadpage. Ontwerp en maak met je squad een squadpagina met HTML, CSS en Javascript.

## :mag: Kenmerken

:page_facing_up: HTML

Voor de layout maak ik gebruik van: 

`<main>`
`<section>`
`<nav>`
  
  
:art: CSS

Een belangrijk deel van de css is de carousel:

```
.group-section {
  width: 100%;
  float: left;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(238,174,202);
  background: linear-gradient(49deg, rgba(238,174,202,1) 6%, rgba(135,241,233,1) 100%);
  user-select: none;
  --carrouselChromeHeight: 22.95em;
  --carrouselStraal: calc(var(--groupSize) * 2.2875);
  --carrouselHoek: 0;
  --groupSize: 14em;
  height: 100%;
}

.group-section > ul{
  display: block;
  max-width: none;
  height: 100%;
  margin: 0;
  padding: 0;
  perspective-origin: center calc(-100vh + (var(--groupSize) * 1.644821428571429) + var(--carrouselChromeHeight));
  perspective: calc(var(--carrouselStraal) * 2);
  transform-style: preserve-3d;
}

.group-section li{
  --grouphoek:calc( (var(--carrouselHoek) + var(--GroupBasisHoek)) * 72deg );
  position: absolute;
  display: block;
  width: var(--groupSize);
  padding: 0;
  left: calc(50% - var(--groupSize) / 2);
  bottom: 25%;
  border: none;
  transform: translateZ(calc( var(--carrouselStraal) * -1 )) rotateY(calc( var(--grouphoek) * -1 )) translateZ(var(--carrouselStraal)) rotateY(var(--grouphoek));
  transition: var(--basis-tijd) cubic-bezier(0.365, 1.09, 0.845, 1.065);
  scale: 0.9;
}
```
:loop: JavaScript

Een belangrijke functie in de JavaScript is de functie voor het draaien van de carousel:

```
function draaiGroup(richting) {
    let carrousel = document.querySelector(".group-section");
    let huidigeBasisHoek = parseInt(
      getComputedStyle(carrousel).getPropertyValue("--carrouselHoek")
    );
    let nieuweBasisHoek = huidigeBasisHoek + richting;
    carrousel.style.setProperty("--carrouselHoek", nieuweBasisHoek);

    let nameNav = document.querySelector(".name-nav");
    nameNav.style.setProperty("display", "none");

    let richtingButtonLinks = document.querySelector(
      ".group-section > button:first-of-type"
    );
    richtingButtonLinks.style.setProperty("right", "calc(50% + 5rem)");

    let richtingButtonRechts = document.querySelector(
      ".group-section > button:last-of-type"
    );
    richtingButtonRechts.style.setProperty("left", "calc(50% + 5rem)");

    for (let i = 0; i < groups.length; i++) {
      let newIndex = parseInt(groups[i].getAttribute("data-index")) + richting;
      if (newIndex < 1) {
        newIndex = groups.length;
      } else if (newIndex > groups.length) {
        newIndex = 1;
      }
      setIndex(groups[i], newIndex);
    }
  }
```

## 🔴 Live versie

De live versie van dit project is hier te vinden:

https://codeforce.student.fdnd.nl/

## Bronnen

Deze website en de inspiratie voor het carrousel idee is voortgekomen uit een workshop van Sanne 't Hooft.

https://sinds1971.nl/ & https://sinds1971.nl/bj3/index.html (carrousel)
