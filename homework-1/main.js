const priceBread = 15.678;
const priceButter = 123.965;
const priceCheese = 90.2345;

const priceMax = Math.max(priceBread, priceButter, priceCheese);
console.log(`Максимальна ціна: ${priceMax}`);

const priceMin = Math.min(priceBread, priceButter, priceCheese);
console.log(`Мінімальна ціна: ${priceMin}`);

const pricesSum = priceBread + priceButter + priceCheese;
console.log(`Загальна сума: ${pricesSum}`);

const intPriceBread = Math.trunc(priceBread);
const intPriceButter = Math.trunc(priceButter);
const intPriceCheese = Math.trunc(priceCheese);
console.log(
  `Цілі ціни без копійок окремо: ${intPriceBread}, ${intPriceButter}, ${intPriceCheese}`
);

const intPriceAll = intPriceBread + intPriceButter + intPriceCheese;
console.log(`Сума цілих цін: ${intPriceAll}`);
// Умовою "Округлення використовувати в меншу сторону" я знехтувала,
// тому як використовувала метод Math.trunc, одразу округливши окремі числа в менший бік
// тому як першочергово стояла умова "Відкиньие копійки у всіх товарів".

const hundredsPrice = Math.round(intPriceAll / 100) * 100;
console.log(`Округлена сума цін до сотен: ${hundredsPrice}`);

function isEven(value) {
  if (value % 2 === 0) return true;
  else return false;
}

console.log(
  `Округлена сума цін до сотень є парним числом: ${isEven(intPriceAll)}`
);

const clientMoney = 500;
const restAmount = clientMoney - pricesSum;
console.log(`Сума решти з 500 грн: ${restAmount}`);

const averagePrice = Math.round(((pricesSum / 3) * 100) / 100);
console.log(
  `Cереднє значення цін, округлене до другого знаку після коми: ${averagePrice}`
);

// складне завдання зі знижкою

const discount = Math.random();
console.log(`Рандомна знижка дорівнює: ${discount}`);

const priceBreadDiscount = Math.round(
  ((priceBread - priceBread * discount) * 100) / 100
);
console.log(`Сума до сплати після знизки: ${priceBreadDiscount}`);

const netProfit = priceBread / 2 - priceBread * discount;
console.log(`Чистий прибуток продавця: ${netProfit}`);

//шаблонний рядок всіх обчислень

console.log(`Максимальна ціна: ${priceMax};
Мінімальна ціна: ${priceMin};
Загальна сума: ${pricesSum};
Цілі ціни без копійок окремо: ${intPriceBread}, ${intPriceButter}, ${intPriceCheese};
Сума цілих цін: ${intPriceAll};
Округлена сума цін до сотень є парним числом: ${true};
Сума решти з 500 грн: ${restAmount};
Cереднє значення цін, округлене до другого знаку після коми: ${averagePrice};
Рандомна знижка дорівнює: ${discount};
Сума до сплати після знижки: ${priceBreadDiscount};
Чистий прибуток продавця: ${netProfit}`);
