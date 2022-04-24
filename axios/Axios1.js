//form handeling post method to Fetching data from Api (async and await)
document.getElementById("btn").addEventListener("click",rMaker)
axios.default.headers.common['Authurization']='Sohel Islam';
 async function rMaker(e){
     try{
     e.preventDefault()
     let name= document.getElementById("name").value
     let job=document.getElementById("job").value
     console.log(name,job)
    const config={
        method:'post',
        url:'https://reqres.in/api/users',
        header:{
            'content-Type':'application/json'
        },
        data: JSON.stringify({name:name,job:job})
    }
    const res=await axios(config )
        console.log(res.data)
}
    catch(error){
        console.log(error)
    }
}