const Quote = function() {
    const quot = [
    {
        "quote": "Resentment is like drinking poison and waiting for your enemies to die.",
        "author": "--Nelson Mandela"
    },
    {
        "quote": "The best revenge is massive success.",
        "author": "--Frank Sinatra"
    },
    {
        "quote": "Do not take life too seriously. You will not get out alive.",
        "author": "--Elbert Hubbard"
    },
    {
        "quote": "You miss 100% of the shots you don't take.",
        "author": "--Wayne Gretzy"
    },
    {
        "quote": "It's not what happens to you, but how you react to it that matters.",
        "author": "--Epictetus"
    }
];
    const arrayIndex = Math.floor(Math.random() * quot.length);
    document.getElementById("quot").innerHTML = quot[arrayIndex].quote;
    document.getElementById("authr").innerHTML = quot[arrayIndex].author;
}
onclick= function() {
    Quote();
    document.getElementById("NewQuote").addEventListener('click', Quote);
}


