// const returnHello = () => {
//     const hello = "hello world"

//     return new Promise((resolve, reject) => {
//         setTimeout( () => {
//             if(hello){
//                 resolve(hello)
//             }else{
//                 reject("impossible de l'afficher")
//             }
//         }, 2000)
//     })
// }

// const waitForMyResult = async () => {
//     try{
//         console.log("loading...")
//         const result = await returnHello()
//         console.log(result)
//     }catch(error){
//         console.log("error")
//     }
// }

// waitForMyResult()

// const isItCold = () => {
//     return new Promise((resolve, reject) => {
//         const temperature = 2

//         setTimeout(() => {
//             if(temperature <= 10){
//                 resolve("Il fait froid")
//             }else{
//                 reject("Il fait chaud")
//             }
//         }, 4000)
//     })
// }

// const waitForMyResult = async () => {
//     try{
//         console.log("J'attend 4 secondes")
//         const result = await isItCold()
//         console.log(result)
//     }catch(error){
//         console.log("Error")
//     }
// }

// waitForMyResult()

const isItClean = () => {
    return new Promise((resolve, reject) => {
        const lessive = "Je commence la lessive"
        console.log("je commmence la lessive")

        setTimeout(() => {
            if(lessive){
                resolve("J'ai fini la lessive")
            }else{
                reject("Je n'ai pas fini la lessive")
            }
        }, 3000)
    })
}

const vaisselle = () => {
    return new Promise((resolve, reject) => {
        const vaisselle = "Je commence la vaisselle"
        console.log(vaisselle)

        setTimeout(() => {
            if(vaisselle){
                resolve("J'ai fini la vaisselle")
            }else{
                reject("Je n'ai pas fini la vaisselle")
            }
        }, 1500)
    })
}

const waitForMyResult = async () => {
    try{
        console.log("j'attends 3 secondes")
        const result = await isItClean()
        console.log("J'ai fini la lessive")

        console.log("j'attends 1.5 secondes")
        const res = await vaisselle()
        console.log("j'ai fini de faire le ménage")
    }catch(error){
        console.log("Error")
    }
}

waitForMyResult()