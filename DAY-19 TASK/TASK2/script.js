fetch("https://api.disneyapi.dev/characters").then((data)=>{
    //console.log(data);  json format
    return data.json();//converted to object

  }).then((objectdata)=>{
    console.log(objectdata.data[0].name);//get data from object
    let tabledata="";
    objectdata.data.map((values)=>{//print tabledata
        tabledata+=`<tr>
        <td> ${values._id}</>
  
        <td>${values.name}</td>
        <td><img src="${values.imageUrl}"/></td>
        <td>${values.url} </td>
      </tr>`
    });
    document.getElementById("table_body").innerHTML=tabledata;
  })
 

  
    
