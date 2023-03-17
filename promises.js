import fs from 'fs';



export const promiseReadFile = (path) => {
    return new Promise((resolve, reject) => {

        fs.readFile(path, "utf-8", (err, data) => {
            if(err) {
                reject(err);
            }
            else{
                resolve(data);
            }
        })
    })

}

export const promiseWriteFile = (path, data) => {
    return new Promise((resolve, reject) => {

        fs.writeFile(path, data, "utf-8", (err)=>{
            if(err) reject(err);
            else resolve(data);
        })
    })
}

