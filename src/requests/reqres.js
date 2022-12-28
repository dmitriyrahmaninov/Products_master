export const registration = (auth_data, callback, err_callback = console.log) => {
    console.log(auth_data);
    fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(auth_data)
    })
        .then(res => res.json())
        .then(users => console.log(users))
        // users => {
        //         if (users.token) {
        //             callback(users);
        //         } 
                // else {
                //     err_callback(data.error)
                // }
            // })
}

// kminchelle
// 0lelplR