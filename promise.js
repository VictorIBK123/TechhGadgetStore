const promise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        const success = Math.random()
        if (success){
            const user = {id: 1, name: 'John Doe', email:'ink@gmail.com'}
            resolve(user)
        }
        else{
            reject('Failed to fetch user data')
        }
    }, 1500);
})
promise.then(user=>console.log(user)).catch(error=>console.log(error))