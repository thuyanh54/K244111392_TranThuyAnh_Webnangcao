import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  datas = [
    {
      "Cateid": "cate1",
      "CateName": "nuoc ngot",
      "Products": [
        {
          "ProductId": "p1",
          "ProductName": "Coca",
          "Price": 100,
          "Image": "coca.jpg"
        },
        {
          "ProductId": "p2",
          "ProductName": "Pepsi",
          "Price": 300,
          "Image": "pepsi.jpg"
        },
        {
          "ProductId": "p3",
          "ProductName": "Sting",
          "Price": 200,
          "Image": "sting.jpg"
        }
      ]
    },
    {
      "Cateid": "cate2",
      "CateName": "Bia",
      "Products": [
        {
          "ProductId": "p4",
          "ProductName": "Heineken",
          "Price": 500,
          "Image": "heineken.jpg"
        },
        {
          "ProductId": "p5",
          "ProductName": "333",
          "Price": 400,
          "Image": "333.jpg"
        },
        {
          "ProductId": "p6",
          "ProductName": "Sai Gon",
          "Price": 600,
          "Image": "Sai Gon.jpg"
        }
      ]
    }
  ];

  constructor() { }

  getCategories() {
    return this.datas;
  }
}