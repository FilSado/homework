// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.

const person = {
  name: "Анна",
  age: 25,
  city: "Москва",
  isStudent: true
};

console.log(person.name);
console.log(person.age);
console.log(person.city);
console.log(person.isStudent);

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.

function isEmpty(object) {
  for (let key in object) {
    return false;
  }

  return true;
}

console.log(isEmpty({}));
console.log(isEmpty({ name: "Анна" }));

// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.

const task = {
  title: "Изучить JavaScript",
  description: "Изучить объекты и циклы",
  isCompleted: false
};

function cloneAndModify(object, modifications) {
  const newObject = {
    ...object,
    ...modifications
  };

  return newObject;
}

const modifiedTask = cloneAndModify(task, {
  isCompleted: true,
  title: "Изучить JavaScript на практике"
});

for (let key in modifiedTask) {
  console.log(key, modifiedTask[key]);
}

// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Пример использования:
// const myObject = {
//     method1() {
//         console.log('Метод 1 вызван');
//     },
//     method2() {
//         console.log('Метод 2 вызван');
//     },
//     property: 'Это не метод'
// };
// callAllMethods(myObject);


function callAllMethods(object) {
  for (let key in object) {
    if (typeof object[key] === "function") {
      object[key]();
    }
  }
}

const myObject = {
  method1() {
    console.log("Метод 1 вызван");
  },

  method2() {
    console.log("Метод 2 вызван");
  },

  property: "Это не метод"
};

callAllMethods(myObject);

