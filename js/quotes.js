const quotes = [
    {
        quote:"Many of life’s failures are people who did not realize how close they were to success when they gave up.",
        author: "Thomas A. Edison",
    },
    {
        quote:"You only live once, but if you do it right, once is enough",
        author: "Mae West",
    },
    {
        quote:"Never let the fear of striking out keep you from playing the game.",
        author: "Babe Ruth",
    },
    {
        quote:"Money and success don’t change people; they merely amplify what is already there.",
        author: "Will Smith",
    },
    {
        quote:"The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.",
        author: "Henry Ford",
    },
    {
        quote:"In order to write about life first you must live it.",
        author: "Ernest Hemingway",
    },
    {
        quote:"Life is not a problem to be solved, but a reality to be experienced.",
        author: "Soren Kierkegaard",
    },
    {
        quote:"Turn your wounds into wisdom.",
        author: "Oprah Winfrey",
    },
    {
        quote:"Don’t settle for what life gives you; make life better and build something.",
        author: "Ashton Kutcher",
    },
    {
        quote:"Live for each second without hesitation.",
        author: "Elton John",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;