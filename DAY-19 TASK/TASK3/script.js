fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY").then((data)=>{
    //console.log(data);  json format
    return data.json();//converted to object

  }).then((objectdata)=>{
    console.log(objectdata.photos[0].name);//get data from object
    let tabledata="";
    objectdata.photos.map((values)=>{//print tabledata
        tabledata+=`<tr>
        <td> ${values.id}</>
  
        <td>${values.camera.name}</td>
        <td><img src="${values.img_src}"/></td>
        <td>${values.earth_date} </td>
        <td>${values.rover.landing_date} </td>
        <td>${values.rover.launch_date} </td>
      </tr>`
    });
    document.getElementById("table_body").innerHTML=tabledata;
  })
 

  
    
