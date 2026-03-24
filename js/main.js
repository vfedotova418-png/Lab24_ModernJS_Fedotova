// console.log("\n=== Деструктуризация массивов ===");
// const colors = ["red", "green", "blue"];
// const color1 = colors[0];
// const color2 = colors[1];
// console.log(color1, color2);
// const [firstColor, secondColor, thirdColor] = colors;
// console.log(firstColor, secondColor, thirdColor);
// const [primary, , tertiary] = colors;
// console.log(primary, tertiary);
// const [c1, c2, c3, c4 = "yellow"] = colors;
// console.log(c4);

// console.log("Деструктуризация объектов");
// const user = {
//     name: "Алиса",
//     age: 25,
//     city: "Москва",
// };
// const userName = user.name;
// const userAge = user.age;
// console.log(userName, userAge);
// const { name, age, city } = user;
// console.log(name, age, city);
// const { name: fullName, age: years } = user;
// console.log(fullName, years);
// const { name: personName, country = "Россия" } = user;
// console.log(personName, country);

// console.log("Деструктуризация в параметрах");
// function printUserOld(user) {
//     console.log(`Имя: ${user.name}`);
//     console.log(`Возраст: ${user.age}`);
//     console.log(`Город: ${user.city}`);
// }
// function printUser({ name, age, city }) {
//     console.log(`Имя: ${name}`);
//     console.log(`Возраст: ${age}`);
//     console.log(`Город: ${city}`);
// }
// printUserOld(user);
// console.log();
// printUser(user);

// const product = {
//     name: "Милка",
//     price: 124,
//     category: "Сладости",
//     inStock: true,
// };
// const { name, price, category, inStock } = product;
// console.log(name, price, category, inStock);
// function printProduct({ name, price, category, inStock }) {
//     console.log(`Название: ${name}`);
//     console.log(`Цена: ${price} руб.`);
//     console.log(`Категория: ${category}`);
//     console.log(`Есть в наличии: ${inStock}`);
// }
// printProduct(product);

// console.log("Spread для массивов");
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const combined = [...arr1, ...arr2];
// console.log("Объединённый массив:", combined);
// const copy = [...arr1];
// console.log("Копия массива:", copy);
// const extended = [0, ...arr1, 7, 8];
// console.log("Расширенный массив:", extended);

// console.log("Spread для объектов");
// const person = {
//     name: "Иван",
//     age: 30,
// };
// const address = {
//     city: "Санкт-Петербург",
//     street: "Невский проспект",
// };
// const fullInfo = { ...person, ...address };
// console.log("Полная информация:", fullInfo);
// const personCopy = { ...person };
// console.log("Копия объекта:", personCopy);
// const updated = { ...person, age: 31, occupation: "Developer" };
// console.log("Обновлённый объект:", updated);

// console.log("Rest оператор");
// function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
// }
// console.log("Сумма 1, 2, 3:", sum(1, 2, 3));
// console.log("Сумма 1, 2, 3, 4, 5:", sum(1, 2, 3, 4, 5));
// const numbers = [10, 20, 30, 40, 50];
// const [first, second, ...rest] = numbers;
// console.log("Первое число:", first);
// console.log("Второе число:", second);
// console.log("Остальные числа:", rest);

const nums1 = [10, 20, 30, 40, 50];
const nums2 = [60, 70, 80, 90, 100];
const nums = [...nums1, ...nums2];
console.log(nums);
function findMax(...numbers) {
    return numbers.reduce((max, num) => {
        return num > max ? num : max;
    }, numbers[0])
}
console.log(findMax(10, 20, 30, 40, 50));
const product = {
    name: "Милка",
    price: 124,
};
const productInfo = {
    category: "Сладости",
    inStock: true,
};
const combined = { ...product, ...productInfo };
console.log(combined);