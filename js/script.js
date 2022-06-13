const students = [{
   name: "Tanya",
   course: 3,
   subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4],
   }
}, {
   name: "Victor",
   course: 4,
   subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
   }
}, {
   name: "Anton",
   course: 2,
   subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
   }
}];

//Функція яка повертає список предметів для конкретного студента.
function getSubjects(arr) {
   let first = Object.keys(students[arr]['subjects']);
   let result = first.map(function (item) {
      return item[0].toUpperCase() + item.slice(1);
   }).map(function (item) {
      return item.replace('_', ' ');
   })
   return console.log(`Список предметів для Student[${arr}]:`, result);
};
getSubjects(0);

//Фунтції яка поверне середню оцінку по усім предметам для переданого студента
function getAverageMark(item) {
   let averageScore = 0;
   let summAllRating = 0;
   let totalMarks = 0;
   Object.values(students[item].subjects).forEach((i) => {
      summAllRating += i.reduce((prev, curr) => prev + curr, 0);
      totalMarks += i.length;
      return (averageScore = summAllRating / totalMarks);
   });
   return averageScore.toFixed(2);
};
console.log(`Середня оцінка:`, getAverageMark(0));

//Функція яка повертає інформацію загального виду по переданому студенту
function getStudentInfo(item) {
   let info = {};
   info['course'] = students[item].course;
   info['name'] = students[item].name;
   info['averageMark'] = getAverageMark(item);
   return info;
}
console.log(`Інформація про студента:`, getStudentInfo(0))

//Функція яка повертає імена студентів у алфавітному порядку
function getStudentsNames() {
   let names = students.map(function (item) {
      return item.name
   });
   return names.sort();
}
console.log(`Імена студентів в алфавітному порядку:`, getStudentsNames());

//Функція яка повертає кращого студента зі списку по показнику середньої оцінки.
function getBestStudent() {
   return [getStudentInfo([0]), getStudentInfo([1]), getStudentInfo([2])].sort((a, b) => a.averageMark - b.averageMark).pop().name
}

console.log(`Ім'я кращого студента по показнику середньої оцінки:`, getBestStudent());

//Функція яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень.
function calculateWordLetters(item) {
   let word = item.split('').reduce((acc, curr) => {
      if (acc[curr]) {
         acc[curr] += 1;
      } else {
         acc[curr] = 1;
      }
      return acc;
   }, {});
   return word
}
console.log(`Кількість букв у слові:`, calculateWordLetters('тест'))

