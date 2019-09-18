import { Platform } from "@unimodules/core"

async function fetchPhoto(photo){
    // let url = "http://13.124.49.137:3000/api/upload" //AWS S2 server userd! use 'filezilla' and 'putty'
    let url = "http://192.168.43.117:3000/post"
    let body = new FormData();
    body.append('photo',{uri:photo.uri,name:'photo',filename:'imageName1.jpg',type:'image/jpg'})
    body.append('Content-Type','image/jpg')
    //Just don't worry about sending image's uri
    //using nodejs's multer in server to upload image
    const result = await fetch(url,{
        method:"POST",
        headers:{
            "Content-Type": "multipart/form-data",
            "otherHeader": "foo",
        },
        body: body
    }).then(resp=>{
        console.log(resp)
    })

    return result
}

export default fetchPhoto