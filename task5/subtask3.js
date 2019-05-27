// Код с ошибками

// Что не так: из-за цикла forEach() к моменту, когда промис перейдет в состояние 'resolved',
// выполнение еще не завершится

db.getAllDocs().then(function (result) {
  result.rows.forEach(function (row) {
    db.remove(row.doc);
  });
}).then(function () {
// All docs must be removed!
});

// Исправленный код

const promises = [];

db.getAllDocs().then(function (result) {
  result.rows.forEach(function (row) {
    promises.push(db.remove(row.doc));
  });
});

Promise.all(promises).then(function (results) {
  // All docs are removed!
});
