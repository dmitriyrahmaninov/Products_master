export const requests_product = (callback) => {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(json => callback(json))
}

export const delete_product = (callback) => {
    fetch('https://fakestoreapi.com/products/6',
        {
            method:"DELETE"
        })
            .then(res=>res.json())
            .then(json=>callback(json))
}
