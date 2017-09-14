function pobierzDane(event) {
    event.preventDefault();

    $.ajax({
        url: "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php",
        dataType: 'json',
        success: function (resultJSON) {

            console.log(resultJSON);
            var pobraneDane = document.getElementById('dane-programisty');

            var userName = document.createElement('p');
            var userSurname = document.createElement('p');
            var userProffesion = document.createElement('p');
            var userCompany = document.createElement('p');

            userName.innerHTML = "User ID: " + resultJSON.imie;
            userSurname.innerHTML = "User ID: " + resultJSON.nazwisko;
            userProffesion.innerHTML = "User ID: " + resultJSON.zawod;
            userCompany.innerHTML = "User ID: " + resultJSON.firma;


            pobraneDane.appendChild(userName);
            pobraneDane.appendChild(userSurname);
            pobraneDane.appendChild(userProffesion);
            pobraneDane.appendChild(userCompany);
        },
        onerror: function (msg) {
            console.log(msg);
        }
    });
}
