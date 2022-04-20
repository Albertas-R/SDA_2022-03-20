"use strict";

// salygos paga; prioriteta
// 1. jei arrow funkcijoje yra this, tai this bus outer scope
// 2. jeigu callas su 'new', tai naujai sukurtas objektas yra this
// 3. bind funckija panaudota issaugoti this reiksme
// 4. kai kurios funkcijos leidzia this nurodyti e.g. forEach, map
// 5. funkcija callinama su call arba apply funkcijomis
// 6. call site is this e.g. o.callName()

// 7.
//   isoriniame scope - globalus objektas (window)
//   funkcijos scope  - globalus objektas (window)
//                    - jei strict mode, tai undefined

// function f() {
//   console.log(this);
// }
// const boundF = f.bind('juozapas');
// boundF();

// a.forEach(function() {
//   console.log(this);
// }, 'aaa');

// function f(a,b,c) {
//   console.log(this, a,b,c);
// }

// f.apply('juozapas', [1,2,3]);

/////////////////////////////////////////////

// const promise1 = new Promise((resolve, reject) => {
//   try {
//     resolve("response reiksme");
//   } catch (err) {
//     console.error(err);
//     reject(err);
//   }
// });

// promise1.then((manoResolvas) => console.log(manoResolvas));

/////////////////////////////////////////////
// let promise = new Promise(function(resolve, reject) {
// executor (the producing code)
// });

// https://jsonplaceholder.typicode.com/todos urlas is kurio galima paimti duomenu

// uzduotis:
// sukurti promisa, kuris po 2s grazintu reiksme 'reiksme'
// taip pat daryti fetcha i duota urla

// abu vienu metu daryti paraleliai ir kai ateis rezultatai is abieju, juos sekmes atveju console loginti, o klaidos atveju console error parodyti

// padaryti tiek su promise.then tiek su async awai variantus

/*
const promise2s = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve("reiksme po 2 s"), 2000);
  });
};

/*
const asyncDo = async function () {
  try {
    // setTimeout(function () {
    //   console.log("reiksme po 2 s");
    // }, 2000);
    const get2s = await promise2s();
    // const data2s = await get2s;
    // console.log(data2s);

    const getData = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    // const data = await getData.json();
    // console.log(data);
    // if (!data) throw new Error("Problem getting data");

    Promise.all([promise2s(), fetch(`https://jsonplaceholder.typicode.com/todos`)])
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
    // return data;
  } catch (err) {
    console.error(err);
  }
};

asyncDo();

*/
/*
const asyncDo = async function () {
  try {
    Promise.all([promise2s(), fetch(`https://jsonplaceholder.typicode.com/todos`)])
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  } catch (err) {
    console.error(err);
  }
};

asyncDo();
*/

const response = fetch(`https://jsonplaceholder.typicode.com/todos`);

const p2s = new Promise((resolve, reject) => {
  try {
    setTimeout(() => {
      resolve("reiksme po 2s");
    }, 2000);
  } catch (err) {
    reject(err);
  }
});

// Promise.all([response, p2s])
//   .then((data) => {
//     const result = [...data];

//     result[0] = result[0].json();
//     return Promise.all(result);
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => console.error(err));

/*
const promAll = async function () {
  try {
    // const data = await Promise.all([response, p2s]);
    const [resData, p2sData] = await Promise.all([response, p2s]);
    // console.log(data);
    console.log(resData, p2sData);

    // const responseData = await data[0].json();

    // const result = await Promise.all([data[0].json(), data[1]]);
    // console.log(responseData, data[1]);
    console.log(await resData.json(), p2sData);
  } catch (err) {
    console.error(err);
  }
};
promAll();
*/

// mano final
const promAll = async function () {
  try {
    const [resData, p2sData] = await Promise.all([response, p2s]);
    // console.log(resData, p2sData);
    // console.log(await resData.json(), p2sData);
    console.log(await resData.json(), p2sData);
  } catch (err) {
    console.error(err);
  }
};
promAll();
