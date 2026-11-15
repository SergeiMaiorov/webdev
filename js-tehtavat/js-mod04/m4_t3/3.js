'use strict';
const names = ['John', 'Paul', 'Jones'];
const nameList = document.getElementById('target');


for (let i = 0; i < names.length; i++) {
  nameList.innerHTML += `<li>${names[i]}</li>`;
}