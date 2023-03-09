// Потрібно написати функцію, яка приймає 1 параметр key і буде перевіряти
// чи має об'єкт  такий ключ - поверне true, інакше false
const obj = {
    name: "Jhon",
    car: "Audi",
    carColor: "White"
};
const checkKey = (key)=>{
    //   const keys = Object.keys(obj);
    //   for (const el of keys) {
    //     if (el === key) {
    //       return true;
    //     }
    //   }
    //   return false;
    //   return Object.keys(obj).includes(key);
    //   return obj.hasOwnProperty(key);
    return key in obj;
};
console.log(checkKey("Jhon"));
console.log(checkKey("name"));

//# sourceMappingURL=08.171a5a20.js.map
