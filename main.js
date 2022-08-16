
const divDolar = document.getElementById("divDolar")
const divClima = document.getElementById("divClima")
const formClima = document.getElementById("formClima")
const API_KEY = "c7d8d6521c30096e8abc78686e7c88c8";


function consultarDolar() {
    fetch ("https://criptoya.com/api/dolar")
    .then(reponse => Response.json())
    .then(({oficial, solidario, blue,mep, ccb, ccl}) => {
         divDolar.innerHTML = `
         <div class="dolarCss>
              <h2>Cotizaciones del dolar </h2>
              <p>SOficial:$ ${oficial} </p>
              <p>Solidario:$ ${solidario} </p>
              <p>Mep:$ ${mep} </p>
              <p>ccl:$ ${ccl} </p>
              <p>Blue:$ ${blue} </p>
              <p>CCB:$ ${ccb} </p>
         </div>       
         
         `
    })
  }

  consultarDolar ()

  setInterval(() =>{
       consultarDolar()
  },30000)


  formClima.addEventListener('sudmit', (e) =>{
    e.preventDefault()

    const datForm = new FormData(e.target)

    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${datForm.get("ciudad")},${datForm.get("provincia")},${dat.Form.get("pais")}&appid=${API_KEY}`)
   
  .then(response => response.json())
  .then( data =>{
    let {lat,lon,name,state,country} = data[0]

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`)
    .then(response => response.json())
    .then(({main,weather}) => {
        let{feels_like: sensacionTermica,humidity,pressure:presion,temp} = main
        let desClima = weather[0].description
          divClima.innerHTML =  `
               <div>
                <h2>Clima en${name}</h2>
                <p>Provincia:${state}</p>
                <p>Pais:${country}</p>
                <p>Temperatura:${temp}°c</p>
                <p>Sensacion Termica: ${sensTermica}°</p>
                <p>Humedad:${country}%</p>
                <p>Presion:${presion}hPa</p>
                <p>Descripcion:${desClima}</p>
                </div>`
         
    })
  })

  })

