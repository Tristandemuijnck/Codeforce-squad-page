function carrousel(deCarrousel) {
  const groupTarget = 5;
  var groupCount = 0;

  const groups = deCarrousel.children;
  const naarLinks = 1;
  const naarRechts = -1;

  const group1 = ["Tristan", "Fouad", "Chris", "Amir", "Siem", "Oliver"];
  const group2 = ["tristan", "tristan", "tristan", "tristan", "tristan"];
  const group3 = ["chris", "chris", "chris", "chris", "chris"];
  const group4 = ["amir", "amir", "amir"];
  const group5 = ["fouad", "fouad", "fouad"];

  function iniCarrousel() {
    for (let i = 0; i < groups.length; i++) {
      setIndex(groups[i], i + 1);
      groups[i].querySelector("img").addEventListener("click", klikOpFoto);
      groups[i]
        .querySelector(".group-button")
        .addEventListener("click", function () {
          knopje(groups[i]);
        });
    }
  }

  document
    .querySelector(".group-section > button:first-of-type")
    .addEventListener("click", function () {
      draaiGroup(naarLinks);
    });

  document
    .querySelector(".group-section > button:last-of-type")
    .addEventListener("click", function () {
      draaiGroup(naarRechts);
    });

  function knopje(hetKnopje) {
    groupNaam = hetKnopje.querySelector("button").value;
    // console.log(groupNaam);

    // Per groep display none of block

    let nameNav = document.querySelector(".name-nav");
    nameNav.style.setProperty("display", "block");

    let richtingButtonLinks = document.querySelector(".group-section > button:first-of-type");
    richtingButtonLinks.style.setProperty("right", "calc(50% + 13rem)");

    let richtingButtonRechts = document.querySelector(".group-section > button:last-of-type");
    richtingButtonRechts.style.setProperty("left", "calc(50% + -7rem)");

    // Group 1
    if (groupNaam == "group1") {
      document.getElementById("group1").style.display = "block";
      document.getElementById("group2").style.display = "none";
      document.getElementById("group3").style.display = "none";
      document.getElementById("group4").style.display = "none";
      document.getElementById("group5").style.display = "none";
      
      if ( document.getElementById("group1").childElementCount == 0 ){
        for (var i = 0; i < group1.length; i++) {
          const ul = document.getElementById("group1");
          const li = document.createElement("li");
          li.appendChild(document.createTextNode(group1[i]));
          ul.appendChild(li);
        }
      } else {}
    }

    // Group 2
    if (groupNaam == "group2") {
      document.getElementById("group1").style.display = "none";
      document.getElementById("group2").style.display = "block";
      document.getElementById("group3").style.display = "none";
      document.getElementById("group4").style.display = "none";
      document.getElementById("group5").style.display = "none";

      if ( document.getElementById("group2").childElementCount == 0 ){
        for (var i = 0; i < group2.length; i++) {
          const ul = document.getElementById("group2");
          const li = document.createElement("li");
          li.appendChild(document.createTextNode(group2[i]));
          ul.appendChild(li);
        }
      } else {}
    }

    // Group 3
    if (groupNaam == "group3") {
      document.getElementById("group1").style.display = "none";
      document.getElementById("group2").style.display = "none";
      document.getElementById("group3").style.display = "block";
      document.getElementById("group4").style.display = "none";
      document.getElementById("group5").style.display = "none";

      if ( document.getElementById("group3").childElementCount == 0 ){
        for (var i = 0; i < group3.length; i++) {
          const ul = document.getElementById("group3");
          const li = document.createElement("li");
          li.appendChild(document.createTextNode(group3[i]));
          ul.appendChild(li);
        }
      } else {}
    }

    // Group 4
    if (groupNaam == "group4") {
      document.getElementById("group1").style.display = "none";
      document.getElementById("group2").style.display = "none";
      document.getElementById("group3").style.display = "none";
      document.getElementById("group4").style.display = "block";
      document.getElementById("group5").style.display = "none";

      if ( document.getElementById("group4").childElementCount == 0 ){
        for (var i = 0; i < group4.length; i++) {
          const ul = document.getElementById("group4");
          const li = document.createElement("li");
          li.appendChild(document.createTextNode(group4[i]));
          ul.appendChild(li);
        }
        
      } else {}
    }

    // Group 5
    if (groupNaam == "group5") {
      document.getElementById("group1").style.display = "none";
      document.getElementById("group2").style.display = "none";
      document.getElementById("group3").style.display = "none";
      document.getElementById("group4").style.display = "none";
      document.getElementById("group5").style.display = "block";

      if ( document.getElementById("group5").childElementCount == 0 ){
        for (var i = 0; i < group5.length; i++) {
          const ul = document.getElementById("group5");
          const li = document.createElement("li");
          li.appendChild(document.createTextNode(group5[i]));
          ul.appendChild(li);
        }
      } else {}
    }
  }

  function klikOpFoto() {
    let theGroup = this.closest("[data-index]");
    let newNumber = parseInt(theGroup.getAttribute("data-index"));

    let nameNav = document.querySelector(".name-nav");
    nameNav.style.setProperty("display", "none");

    let richtingButtonLinks = document.querySelector(".group-section > button:first-of-type");
    richtingButtonLinks.style.setProperty("right", "calc(50% + 5rem)");

    let richtingButtonRechts = document.querySelector(".group-section > button:last-of-type");
    richtingButtonRechts.style.setProperty("left", "calc(50% + 5rem)");

    if (newNumber != 1) {
      let aantalGroups = groups.length;
      let aantalStappen = newNumber - 1;
      let richting = naarRechts;

      if (newNumber - 1 > Math.ceil(aantalGroups / 2)) {
        richting = naarLinks;
        aantalStappen = aantalGroups - aantalStappen;
      }

      draaiGroup(richting);

      if (aantalStappen > 1) {
        let teller = 1;
        var draaien = setInterval(function () {
          draaiGroup(richting);
          teller++;
          if (teller === aantalStappen) {
            clearInterval(draaien);
          }
        }, 75);
      }
    }
  }

  function draaiGroup(richting) {
    let carrousel = document.querySelector(".group-section");
    let huidigeBasisHoek = parseInt(
      getComputedStyle(carrousel).getPropertyValue("--carrouselHoek")
    );
    let nieuweBasisHoek = huidigeBasisHoek + richting;
    carrousel.style.setProperty("--carrouselHoek", nieuweBasisHoek);

    let nameNav = document.querySelector(".name-nav");
    nameNav.style.setProperty("display", "none");

    let richtingButtonLinks = document.querySelector(".group-section > button:first-of-type");
    richtingButtonLinks.style.setProperty("right", "calc(50% + 5rem)");

    let richtingButtonRechts = document.querySelector(".group-section > button:last-of-type");
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

  function setIndex(group, index) {
    group.setAttribute("data-index", index);
  }

  function getGroupsTarget() {
    return groupTarget;
  }

  function getGroupsCount() {
    return groupCount;
  }

  carrousel.getGroupsTarget = getGroupsTarget;
  carrousel.getGroupsCount = getGroupsCount;

  iniCarrousel();
}

window.addEventListener("load", function () {
  carrousel(document.querySelector("#group-section ul"));
});


// const btn = document.querySelector('group-button');
// btn.onclick = Counter;

document.querySelector('.links').addEventListener('click', function() {
  Counter();
});

document.querySelector('.rechts').addEventListener('click', function() {
  Counter();
});

var clickors = 0;
const clickorsLimit = 20;

function Counter() {
    clickors += 1;
    console.log(clickors);
    
    if (clickors == clickorsLimit) {
      alert("Ben jij een cookieclicker");
      alert("Daaaaag");
      window.open("https://orteil.dashnet.org/cookieclicker/");
    }
}