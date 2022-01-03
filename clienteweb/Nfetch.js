document.querySelector("#bromaboton").addEventListener
("click",getdataAsyncAwait);
const bromacontenedor = document.querySelector
("#bromacontenedor");

//mediante promesas tradicional
// encadenando distintas promesas

function getdata(){
  fetch('https://api.chucknorris.io/jokes/random')
  .then(resultado => resultado.jso())
  .then (data => {
    bromacontenedor.innerText = data.value;
  })
  .catch(err=>console.log(err));

}
getdata()

// codigo asincrono
async function getdataAsyncAwait(){
  try{
  const resultado =await fetch('https://api.chucknorris.io/jokes/random')
  const data = await resultado.json();
  bromacontenedor.innerText = data.value;
} catch(err){
  console.log(err);
}
}
  getdataAsyncAwait()