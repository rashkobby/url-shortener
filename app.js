let shortenBtn, searchUrl, infoCards, wrapper;

shortenBtn = document.getElementById('shortbtn');
searchUrl = document.getElementById('search');
infoCards = document.querySelector('.info-cards');
wrapper = document.querySelector('.wrapper');





let getUrlData = async ()=> {
    let search = searchUrl.value;
    let response = await fetch(`https://api.shrtco.de/v2/shorten?url=${search}`);
    if (!response.ok) {
        const message = 'An error occured';
        throw new Error(message);
        
    }
    
    wrapper.style.display = 'block';
    
    let data = await response.json();
    // let copyBtn = document.querySelectorAll('.copybtn');
    // await copyBtn.addEventListener('click', ()=>{
    //   alert('hello world')
    // })
    return data;
    
}



let inputValidating = () =>{
    if (searchUrl.value !== "") {
        getUrlData()
      .then(data => {
              displayWrapper(data)
              console.log(data)
      })
        .catch(err =>alert('invalid url', err))
         
        
    }else alert('you are missing something!')
} 




    shortenBtn.addEventListener('click', ()=>{
        
          inputValidating()
          

            
        
    })


let displayWrapper = (data) =>{
    wrapper.innerHTML += `<div class="info-cards">
    <div class="addressDisp">
      <p id="actualUrl">${searchUrl.value}</p>
    </div>
    <div class="addressDisp">
      <p id="shortUrl">${data.result.full_short_link3}</p>
      <button class="btn copybtn">copy</button>
    </div>
  </div>`

  return;
}





