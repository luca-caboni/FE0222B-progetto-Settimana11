export interface Product {
  id: Number
  name: String
  price: Number
  description: String
}

export interface ShippingPrice {
  type: String
  price: Number
}

export interface ItemCart {
  id: Number
  name: String
  price: Number
  description: String
}

/*   Esempio di product

      "id": 1,
      "name": "Phone XL",
      "price": 799,
      "description": "Uno dei migliori smartphone in commercio, con schermo ampio"


      Esempio di ShippingPrice

      "type": "1-Giorno",
      "price": 25.99

*/
