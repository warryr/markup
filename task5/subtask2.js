// Код с ошибками

// Что не так: не нужно возвращать promise, так как его результат уже обрабатывается в anAsyncCall()

function anAsyncCall() {
    var promise = doSomethingAsync();
    promise.then(function() {
        somethingComplicated();
    });
    return promise;
};

// Исправленный код

function anAsyncCall() {
    var promise = doSomethingAsync();
    promise.then(function() {
        somethingComplicated();
    });
};
