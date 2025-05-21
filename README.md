# MILITARY WEBSHOP

Üdvözlünk a **MILITARY WEBSHOP Co.** oldalán – az online célállomásod a kiváló minőségű katonai felszerelésekért, taktikai eszközökért és túlélő felszerelésekért. Legyél akár aktív szolgálatban lévő katona, tartalékos, túlélő-rajongó vagy egyszerűen csak szereted a strapabíró felszereléseket – nálunk mindent megtalálsz.

---

## UML + Leírás

Ez egy egyszerű **Military Webshop**, amely **HTML**, **CSS (Bootstrap)** és **JavaScript** felhasználásával készült. A webshop lehetővé teszi a felhasználók számára, hogy katonai jellegű termékeket böngésszenek, sorrendbe rendezzék őket ár alapján, hozzáadják azokat a kosárhoz, és megtekinthessék a kosarukat — mindezt háttér nélküli működéssel.

## Funkciók

- **Termékek böngészése**: Különböző katonai jellegű termékek megjelenítése.
- **Termékek rendezése**: A termékek ár szerinti növekvő vagy csökkenő rendezése.
- **Kosárhoz adás**: Kiválasztott termékek hozzáadása a kosárhoz.
- **Kosárkezelés**: A kosár tartalmának és a teljes ár megtekintése.
- **Kosár ürítése**: Az összes termék eltávolítása a kosárból.

---

## UML Diagram

Az alábbiakban egy alap UML diagram látható, amely leírja a **MILITARY WEBSHOP** osztályait és azok struktúráját. A **Product**, **Cart**, **Webshop** és **Termek** osztályok kölcsönhatásba lépnek, hogy lehetővé tegyék a felhasználók számára a termékek és a kosár adataik kezelését.

```plaintext
+--------------------+        +--------------------+         +---------------------+
|      Product       |        |       Cart         |         |      Webshop        |
+--------------------+        +--------------------+         +---------------------+
| - id: int          |        | - products: array  |         | - products: array   |
| - name: string     |        | - total: float     |         | - cart: Cart        |
| - description: str |        +--------------------+         +---------------------+
| - price: float     |        | + addProduct()     |         | + addProduct()      |
| - category: string |        | + removeProduct()  |         | + displayProducts() |
+--------------------+        | + calculateTotal() |         | + sortProducts()    |
| + displayProduct() |        | + displayCart()    |         | + viewCart()        |
+--------------------+        +--------------------+         +---------------------+

+--------------------+
|      Termek        |
+--------------------+
| - id: int          |
| - name: string     |
| - description: str |
| - price: float     |
| - category: string |
+--------------------+
| + displayTermek()  |
+--------------------+

+--------------------+
|    TermekLista     |
+--------------------+
| - Lista[]: array   |
+--------------------+

+------------------------+
|       Highlight        |
+------------------------+
|                        |
+------------------------+
| + Highlight()          |
+------------------------+

---

Kiss Máté, Ghéczy Bálint, Ghéczy Balázs
```
