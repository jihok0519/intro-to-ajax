
const promise = $.ajax({
    url:'https://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen'
});

promise.then(
  (data) => {
   console.log(data);
  },
  (error) => {
   console.log('bad request: ', error);
  }
);