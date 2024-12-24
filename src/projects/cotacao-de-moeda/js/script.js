const url = 'https://economia.awesomeapi.com.br/last/'
const coins = 'USD-BRL,EUR-BRL,BTC-BRL'

fetch(url + coins)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        const dolarReal = data.USDBRL
        const euroReal = data.EURBRL
        const cripto = data.BTCBRL

        const moeda = dolarReal

        let estaData = new Date(moeda.create_date)

        document.getElementById('title').innerHTML = moeda.name
        document.getElementById('thisdate').innerHTML = estaData.toLocaleString()

        document.getElementById('maxvalue').innerHTML = parseFloat(moeda.high).toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL'
        })
        document.getElementById('minvalue').innerHTML = parseFloat(moeda.low).toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL'
        })
    })