

import {
    promiseReadFile,
    promiseWriteFile,

} from "./promises.js";


/* 
json importieren   
umwanden
in txt Datei schreiben
 */

promiseReadFile("./data.json")
    .then(data => {
        console.log(data)
        const obj = JSON.parse(data)
        const arrErg = []
        const arr = obj.map((i) => {
            const Zeile = `${i.id} - ${i.title} \n ${i.description} \n \n`
            arrErg.push(Zeile)

        })
        return arrErg

    })
    

    .then(arrErg => promiseWriteFile("./data.txt", arrErg.join(" ")))

/*     .then(ergebnisArr => { console.log(ergebnisArr) }) */

    .catch(err => console.log(err))
    .finally( () => console.log( " Alles zu Ende "))



    