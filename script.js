function convert(){
    let inputCurrency = document.getElementById('currency').value
        fromCurrency = document.getElementById('from-currency').value
        toCurrency = document.getElementById('to-currency').value

        rate = fromCurrency/toCurrency
        result = inputCurrency/rate
    document.getElementById('result').innerHTML = result
}