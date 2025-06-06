# MILITARY WEBSHOP

Üdvözlünk a **MILITARY WEBSHOP Co.** oldalán – az online célállomásod a kiváló minőségű katonai felszerelésekért, taktikai eszközökért és túlélő felszerelésekért. Legyél akár aktív szolgálatban lévő katona, tartalékos, túlélő-rajongó vagy egyszerűen csak szereted a strapabíró felszereléseket – nálunk mindent megtalálsz.

---

## UML + Leírás

Ez egy egyszerű **Military Webshop**, amely **HTML**, **CSS (Bootstrap)** és **JavaScript** felhasználásával készült. A webshop lehetővé teszi a felhasználók számára, hogy katonai jellegű termékeket böngésszenek, sorrendbe rendezzék őket ár alapján, hozzáadják azokat a kosárhoz, és megtekinthessék a kosarukat — mindezt háttér nélküli működéssel.

## Funkciók

• **Termékek böngészése**: Különböző katonai jellegű termékek megjelenítése.
• **Termékek rendezése**: A termékek ár szerinti növekvő vagy csökkenő rendezése.
• **Kosárhoz adás**: Kiválasztott termékek hozzáadása a kosárhoz.
• **Kosárkezelés**: A kosár tartalmának és a teljes ár megtekintése.
• **Kosár ürítése**: Az összes termék eltávolítása a kosárból.

## Kategóriák

• Ruha fajták
• Tartozékok (Kulacs, Távcső)
• Kések
• Ételek
• Járművek
• BlackMarket (Fegyverek, lőszer, fegyver tartozékok, tank, Minecraft kard szett, vizipisztoly)

## Oldal felépítése

• Minden kategóriából 10db termék
• Szűrése lehetőség
• Kezdő képernyőn véletlenszerű legális termékek közül 10 db mint felkapott
• BlackMarket esetnél egész weboldal sötét színre vált, felugró ablak mint figyelmeztetés
• Kosárban | + | - | törlés lehetőség, összeg számlálás
• Vissza az oldal tetejére

---

## Drótváz

![Click me](https://github.com/5t3x/Military-Webshop/issues/2#issue-3062619942)

---

## UML Diagram

Az alábbiakban egy alap UML diagram látható, amely leírja a **MILITARY WEBSHOP** osztályait és azok struktúráját. A **Product**, **Cart**, **Webshop** és **Termek** osztályok kölcsönhatásba lépnek, hogy lehetővé tegyék a felhasználók számára a termékek és a kosár adataik kezelését.

```plaintext
+-------------------+        +-------------------+        +----------------------+
|     Termek        |        |     Termekek      |        |      termekLista     |
+-------------------+        +-------------------+        +----------------------+
| - #adatok         |        | - lista           |        | [ { id, nev, ... } ] |
| - #szuloElem      |        +-------------------+        +----------------------+
| - #index          |        | + constructor()   |
+-------------------+        | + megjelenit()    |
| + megjelenit()    |        +-------------------+
+-------------------+

+-------------------+        +-------------------+
|      Kosar        |<>------|     KosarElem     |
+-------------------+        +-------------------+
| - #lista          |        | - item            |
| - kosarElem       |        | - index           |
| - kosarCountElem  |        | - szuloElem       |
+-------------------+        +-------------------+
| + constructor()   |        | + constructor()   |
| + frissitMegjelenites()|   | + render()        |
+-------------------+        | + addEventListeners() |
                             +-------------------+

+-------------------+        +-------------------+
|    Kategoria      |        |     Highlight      |
+-------------------+        +-------------------+
| + megjelenit()    |        | + constructor()    |
| + megjelenitTermekek()|    | + megjelenit()     |
+-------------------+        +-------------------+

+-------------------+
|      Gomb         |
+-------------------+
| + constructor()   |
| + initScrollButton() |
+-------------------+

---

Kiss Máté, Ghéczy Bálint, Ghéczy Balázs
```
