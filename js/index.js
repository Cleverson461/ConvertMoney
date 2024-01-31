const button = document.getElementById('button-convert');
const select = document.getElementById('currency-select')
const dolar = 4.94
const euro = 5.37
const bitcoin = 211776

const convertValues = () => {
  const inputReais = document.getElementById('input-real').value
  const realValorTexto = document.getElementById('real-valor-texto')
  const valorDaMoeda = document.getElementById('valor-texto')

  realValorTexto.innerHTML = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(inputReais)

    if(select.value === 'US$ Dólar americano'){
      valorDaMoeda.innerHTML = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format((inputReais / dolar).toFixed(2))
    }

 
    if(select.value === '€ Euro'){
      valorDaMoeda.innerHTML = new Intl.NumberFormat('de-DE', {style: 'currency', currency: 'EUR'}).format((inputReais / euro).toFixed(2))
    }

    if(select.value === 'BTC Bitcoin'){
      valorDaMoeda.innerHTML = new Intl.NumberFormat('de-DE', {style: 'currency', currency: 'BTC'}).format((inputReais / bitcoin).toFixed(2))
    }
}

changeCurrency = () => {
  const currencyName = document.getElementById('section-name')
  const currencyImg = document.getElementById('currency-img')
  
  if(select.value === 'US$ Dólar americano'){
    currencyName.innerHTML = 'Dólar americano'
    currencyImg.src = 'img/estados-unidos.svg'
  }

  if(select.value === '€ Euro'){
    currencyName.innerHTML = 'Euro'
    currencyImg.src = 'img/euro.svg'
  } 

  if(select.value === 'BTC Bitcoin'){
    currencyName.innerHTML = 'Bitcoin'
    currencyImg.src = 'img/bitcoins.png'
  } 

  convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)
