# MILITARY WEBSHOP

Üdvözlünk a **MILITARY WEBSHOP Co.** oldalán – az online célállomásod a kiváló minőségű katonai felszerelésekért, taktikai eszközökért és túlélő felszerelésekért. Legyél akár aktív szolgálatban lévő katona, tartalékos, túlélő-rajongó vagy egyszerűen csak szereted a strapabíró felszereléseket – nálunk mindent megtalálsz.

---

## UML + Description 

This is a simple **Military Webshop** built using **HTML**, **CSS (Bootstrap)**, and **JavaScript**. The webshop allows users to browse military-related products, sort them by price, add items to a shopping cart, and view their cart—all without a backend.

## Features
- **Browse Products**: Display various military-related products.
- **Sort Products**: Sort products by price in ascending or descending order.
- **Add to Cart**: Add selected products to a shopping cart.
- **Cart Management**: View cart details and total price.
- **Clear Cart**: Clear all items from the cart.

---

## UML Diagram

Below is a basic UML diagram to describe the classes and structure of the **MILITARY WEBSHOP**. The **Product**, **Cart**, **Webshop** and **Termek** classes interact to allow users to manage products and cart data.

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

+------------------------+    
|       Highlight        |
+------------------------+
|                        |
+------------------------+
| + Highlight()          |
+------------------------+

---

Kiss Máté, Ghéczy Bálint, Ghéczy Balázs
