const con_async = (numero) => {
    return new Promise ((resolve, reject) =>{
        (true) ? setTimeout(() => {
            resolve('acurrio el async' + numero)
        }, 2000): reject(new Error('error promesa upps!!'))
    })
}

const con_async_desarrollo = async() =>{
    const tiempo = await con_async(1)
    console.log(tiempo)
}

console.log('antes')
con_async_desarrollo()
console.log('despues')

const error_async = async()=>{
    try {
        const tiempo2 = await con_async(2)
        console.log(tiempo2)
    }catch{
        console.log(new Error('error en el try catch') )
    }
}


console.log('antes')
error_async()
console.log('despues')