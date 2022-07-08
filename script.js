function convert(){
    let inputCurrency = document.getElementById('currency').value
        fromCurrency = document.getElementById('from-currency').value
        toCurrency = document.getElementById('to-currency').value
        toCurrencyName = document.getElementById('to-currency').name

        rate = fromCurrency/toCurrency
        result = inputCurrency/rate
    document.getElementById('result').innerHTML = result
}