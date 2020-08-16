let button = document.querySelector('.searchBtn')
let inputValue = document.querySelector('.inputField')
let placeName = document.querySelector('.location')
let temparature = document.querySelector('.tempValue')
let seasonName = document.querySelector('.lead')
let iconImage = document.querySelector('.iconType')

button.addEventListener('click', function () {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q= ${inputValue.value}&units=metric&appid=895eb74692ae2a926d25f754e64094cb`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let locationName = data['name']
            let tempValue = data['main']['temp']
            let descValue = data['weather'][0]['description']
            let weatherIcon = data['weather'][0]['icon']

            placeName.innerHTML = locationName
            temparature.innerHTML = tempValue
            seasonName.innerHTML = descValue
            iconImage.innerHTML = weatherIcon

        })


        .catch(err => alert("Wrong city Name"))
})


