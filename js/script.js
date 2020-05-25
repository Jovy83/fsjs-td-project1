/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  {
    quote: `I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.`,
    source: `Marilyn Monroe`,
    citation: ``,
    year: `1800`,
    tags: [`life`],
  },
  {
    quote: `Be yourself; everyone else is already taken.`,
    source: `Oscar Wilde`,
    citation: `Facebook`,
    year: `1900`,
    tags: [`honesty`],
  },
  {
    quote: `Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.`,
    source: `Albert Einstein`,
    citation: ``,
    year: `1700`,
    tags: [`philosophy`],
  },
  {
    quote: `So many books, so little time.`,
    source: `Frank Zappa`,
    citation: `The Librarian`,
    year: `1750`,
    tags: [`books`, `education`],
  },
  {
    quote: `A room without books is like a body without a soul.`,
    source: `Marcus Tullius Cicero`,
    citation: ``,
    year: ``,
    tags: [`books`],
  },
  {
    quote: `You only live once, but if you do it right, once is enough.`,
    source: `Mae West`,
    citation: `Instagram`,
    year: ``,
    tags: [`life`],
  },
];

const backgroundColors = [`red`, `green`, `blue`];

/***
 * `getRandomQuote` function
***/

const getRandomQuote = (quotesArray) => {
  const randomElement = Math.floor(Math.random() * quotesArray.length);
  return quotesArray[randomElement];
};

/***
 * `getRandomBackgroundColor` function
***/

const getRandomBackgroundColor = (colorsArray) => {
  const randomElement = Math.floor(Math.random() * colorsArray.length);
  return colorsArray[randomElement];
};


/***
 * `printQuote` function
***/

const printQuote = () => {
  // get random background color and apply it to the body element
  const color = getRandomBackgroundColor(backgroundColors);
  const bodyElement = document.querySelector(`body`);
  bodyElement.style.backgroundColor = color;

  // get a random quote from our quotes array
  const quote = getRandomQuote(quotes);
  console.log(`Quote: ${quote.quote}`);

  const quoteBoxDiv = document.querySelector(`#quote-box`);

  let content = `
    <p class="quote">${quote.quote}</p>
    <p class="source">${quote.source}
  `

  // TEMPLATE
  // <p class="quote">Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.</p>
  // <p class="source">Patrick McKenzie<span class="citation">Twitter</span><span class="year">2016</span></p>

  // if there's a citation, append it to content
  if (quote.citation !== ``) {
    content += `<span class="citation">${quote.citation}</span>`;
  }

  // if there's a year, append it to content
  if (quote.year !== ``) {
    content += `<span class="year">${quote.year}</span>`;
  }

  // if there are tags, append it to content
  if (quote.tags.length > 0) {

    content += `<span class="tag">[`;

    // loop through tags array
    for (let i = 0 ; i < quote.tags.length; i++) {

      // if last element already, don't add comma
      if (i === quote.tags.length - 1) {
        content += `${quote.tags[i]}`;
      } else {
        content += `${quote.tags[i]}, `;
      }

    }

    content += `]</span>`;
  }

  // don't forget closing tag
  content += `</p>`;
  
  quoteBoxDiv.innerHTML = content;
};

/***
 * code below handles auto refreshing quotes. will call printQuote() every 3s
***/
setInterval(printQuote, 3000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);