       
       //http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={YOUR API KEY}
       //a56f8f2f696112e6c05e6ee78b58a654
       var url=`https://restcountries.eu/rest/v2/all`;
       async function restAPI(){
           try{
             var restResponse=await fetch(url);
           var restData=await restResponse.json();
           return restData;  
           }
           catch{(err)=>{
               console.log(err);
           }}
        }
        restAPI().then((result)=>{
            console.log(result);
            result.forEach(value => {
            
                //column
                var column=document.createElement("div");
                column.setAttribute("class","col-sm-6 col-lg-4");
               // row.appendChild(column); 
                document.querySelector(".row").appendChild(column);
    
    
                //card
                var card=document.createElement("div");
                card.setAttribute("class","card my-2");
                column.appendChild(card)
                //document.querySelector(".col-sm").appendChild(card)
    
                //card-header
               var cardHeader=document.createElement("div");
               cardHeader.setAttribute("class","card-header h3");
               cardHeader.innerText=value.name;
               card.appendChild(cardHeader);
                //card-body
               var cardBody=document.createElement("div");
               cardBody.setAttribute("class","card-body border border-primary");
                card.appendChild(cardBody);
    
               //img-container
               var imgContiner=document.createElement("div");
               imgContiner.setAttribute("id","img-container");
               cardBody.appendChild(imgContiner);
    
               //image Display
               var image=document.createElement("img");
               image.src=value.flag;
               image.setAttribute("class","baner-img img-fluid");
               image.setAttribute("alt","imageFlag")
               cardBody.appendChild(image);
    
               //region
               var region=document.createElement("div");
               region.setAttribute("id","region");
               region.setAttribute("class","heading font-weight-bold mt-1")
               region.innerText="Region:"+" "+value.region;
               cardBody.appendChild(region);
    
                //capital
                var capital=document.createElement("div");
               capital.setAttribute("id","capital");
               capital.setAttribute("class","heading font-weight-bold mt-1")
               capital.innerText="capital:"+" "+value.capital;
               cardBody.appendChild(capital);
    
               //Weather Details
               var buttonDiv=document.createElement("div");
               cardBody.appendChild(buttonDiv);
    
               var button=document.createElement("button")
               button.setAttribute("class","btn btn-warning mt-4");
               button.setAttribute("id","myWish")
               button.innerText="Weather Details"
               buttonDiv.appendChild(button);
    
               //button click Event
               button.addEventListener("click",()=>{
                lat=value.latlng[0]
                lon=value.latlng[1]
               console.log(lat,lon);
                
               var weatherURL=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=a56f8f2f696112e6c05e6ee78b58a654`
               async function weatherAPI(){
                   try{
                    var weatherResponse=await fetch(weatherURL);
                   var weatherData=await weatherResponse.json();
                   return weatherData;  
                   }catch{
                    alert("Something went wrong!!!!!");
                   }   
               }
               weatherAPI().then((data)=>{
                temp=data.main.temp;
                celsius=(temp-273.15).toFixed(2);
                console.log(temp);
                console.log(JSON.stringify(data)); 
    
               alert(value.name+" "+"current Temperature is"+" "+temp+" "+"kelvin,"+" "+celsius+" "+"deg celsius");
               }).catch((err)=>{
                   alert("Got Error")
               })
               })
    
            });
        }).catch((err)=>{
            alert("Got Error")
        })