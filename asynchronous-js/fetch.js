// async & await

const getTodos = async () => {

   const response = await fetch('todos.json');
   if(response.status !== 200) {
    throw new Error('can’t fetch the data');
   }
   const data = await response.json();
   return data;

}

getTodos().then(data => console.log(data))
          .catch(err => console.log(err))    
// // fetch api

// fetch('todos.json').then((response) => {
//     console.log('resolve', response)
//     return response.json();
// }).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err)
// })