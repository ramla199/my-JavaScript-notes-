const getTodos = (ressource) => {
    return new Promise((resolve,reject) => {
        const request = new XMLHttpRequest(); // to create a request object
        // we can use this object by:
        // to check weather the state changes 
        request.addEventListener('readystatechange', () => {
            if(request.readyState === 4 && request.status === 200){
                const data = JSON.parse(request.responseText)
                resolve(data);
            } else if(request.readyState === 4 ) {
                reject('couldn’t fetch data');
            }
        })
        
        
        // open(); it takes two arguments 1- a string of the type request we want to use and 2- and the endpoint we want get the data from
        request.open('GET', 'todos.json'); // this is to setup the request https://jsonplaceholder.typicode.com/todos/
        
        request.send(); // to send the request 
    });

};
// getTodos('todos.json').then(data => {
//     console.log('promise resolved', data);
// }).catch((err)=> {
//     console.log('promise rejected', err)
// })

getTodos('todos.json').then(data => {
    console.log('promise resolved', data);
    return getTodos('reeddklk')
}).then(data => {
    console.log(data)
}).catch((err)=> {
    console.log('promise rejected', err)
})

// getTodos((err, data)=> {
//     console.log('callback fired')
//     if(err){
//         console.log(err)
//     } else {
//         console.log(data)
//     }
// })

// promise example

// const getSomething = () => {
    
//     return new Promise((resolve, reject)=> {
//         // fetch something 
//         // resolve('some data');
//         reject('some error'); z
//     });
// }

    // getSomething().then((data)=> {
    //     console.log(data);
    // }, (err) => {
    //     console.log(err)
    // });

    //  getSomething().then((data)=> {
    //     console.log(data);
    // }).catch(err => {
    //     console.log(err);
    // });

