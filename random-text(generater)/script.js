const quotes = [
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        quote: "The purpose of our lives is to be happy.",
        author: "Dalai Lama"
    },
    {
        quote: "Get busy living or get busy dying.",
        author: "Stephen King"
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West"
    },
    {
        quote: "In the middle of every difficulty lies opportunity.",
        author: "Albert Einstein"
    }
];

document.getElementById("Qbtn").addEventListener("click", function () {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    document.querySelector(".quote").textContent = `"${quotes[randomIndex].quote}"`;
    document.querySelector(".writer").textContent = `- ${quotes[randomIndex].author}`;
});
