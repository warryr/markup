// Код с ошибками

// Что не так: функции loadVideosAsync() и loadMetaAsync() работают не параллельно, а последовательно
// Если каждая функция отработает, например, за 5 секунд, то результат мы получим через 10, хотя могли бы через 5

loadVideosAsync().then(function(videos) {
    loadMetaAsync().then(function(meta) {
         DoSomething(videos, meta);
    });
});

// Исправленный код

Promise.all([loadVideosAsync(), loadMetaAsync()])
.then(function([videos, meta]) {
    DoSomething(videos, meta);
});
