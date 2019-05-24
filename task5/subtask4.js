// Код с ошибками

// Что не так: второй колбэк, передаваемый в then, вызовется, только если doAsync() вернет 'rejected' промис,
// а в данном случае возвращается 'resolved', и ошибка, выкидываемая в then, может быть обработана только в catch

doAsync().then(function () {
  throw new Error('nope');
}, function (err) {
  // I didn't catch your error! :(
});

// Исправленный код

doAsync()
    .then(function() {
        throw new Error('nope');
    })
    .catch(function(err) {
        console.log(err);
    });
  