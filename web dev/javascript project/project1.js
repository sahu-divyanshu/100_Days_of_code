let btn  = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote: "Patience is a Key Elemenet of Success" ,
        person: 'Bill Gates'
    },
    {
        quote: "Your time is Limited, so don't Waste it Living in Someone else's Life " ,
        person: 'Steve Jobs'
    }
];
btn.addEventListener('click',function(){
    let random =  Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})