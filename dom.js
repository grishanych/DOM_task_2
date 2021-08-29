// Task 2
// For the page index.html:

// styles for h1
var firstElem = document.getElementsByTagName('h1')[0];
firstElem.style.backgroundColor = 'lightgreen';
firstElem.style.width = '350px';


// styles for p in div #myDiv
var secondElem = document.getElementsByTagName("p");
for (var i = 0; i < secondElem.length; i++) {
    secondElem[0].style.fontWeight   = 'bold';
    secondElem[1].style.color = 'red';
    secondElem[2].style.textDecoration = 'underline';
    secondElem[3].style.fontStyle = 'italic';
}

// styles for ul li #myList
 var thirdElem = document.getElementsByTagName('ul')[0];
 thirdElem.style.listStyleType = 'none';
 thirdElem.style.display = 'flex';
 thirdElem.style.justifyContent = 'left';


 // styles for span
var fourthElem = document.getElementsByTagName('span')[0];
fourthElem.style.display = 'none';
