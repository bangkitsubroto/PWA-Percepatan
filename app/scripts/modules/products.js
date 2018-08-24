/*
Copyright 2016 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import Product from 'product';

//   constructor (sku, title, price, image, description='') {

// Normally you would get these from a server
export const products = [
  new Product('Samsung Galaxy J2 Prime', 'Samsung Galaxy J2 Prime', 129000, 'J2.png',
    'Android OS Marsmallow 5 inches display LTE support 8/1,5 GB'),
  new Product('Samsung Galaxy J1 Ace', 'Samsung Galaxy J1 Ace', 1049000, 'J1.png',
    'Android OS KitKat 4,3 inches display LTE support 4/0,7 GB'),
  new Product('Samsung Galaxy J7 Prime', 'Samsung Galaxy J7 Prime', 2450000, 'J7.png',
    'Android OS Marmallow 5,5 inches point display LTE support 32/3 GB'),
  new Product('Samsung Galaxy J8', 'Samsung Galaxy J8', 34390000, 'J8.png',
    'Android OS Oreo 6 inches display LTE support 64/8 GB'),
  new Product('Samsung Galaxy S7 Edge', 'Samsung Galaxy S7 Edge', 4100000, 'S7.png',
    'Android OS Marsmallow 5,5 inches display AMOLED LTE support 128/8 GB'),
  new Product('Samsung Galaxy A6', 'Samsung Galaxy A6', 100.00, 'A6.png',
    'Android OS Oreo 5,6 inches display LTE support 32/4 GB')
];

export function findProduct(sku, searchRange = products) {
  return searchRange.find(product => product.sku === sku);
}
