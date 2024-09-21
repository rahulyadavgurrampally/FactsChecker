// console.log("hello world");
const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

// console.log(CATEGORIES.find((cat) => cat.name === "society").color);

const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factList = document.querySelector(".fact-list");

factList.innerHTML = "";
// factList.insertAdjacentHTML("afterbegin", "<li>joans</li>");
// createFactsList(initialFacts);
loadFacts();

async function loadFacts() {
  const res = await fetch(
    "https://dkpnvfjuodddxrrghonz.supabase.co/rest/v1/facts",
    {
      method: "GET",
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRrcG52Zmp1b2RkZHhycmdob256Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYxMDAwODIsImV4cCI6MjA0MTY3NjA4Mn0.yZkaysc2FmrhEUx2EeHDd0dh_hKMYJhyVJJ9HMswAtU",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRrcG52Zmp1b2RkZHhycmdob256Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYxMDAwODIsImV4cCI6MjA0MTY3NjA4Mn0.yZkaysc2FmrhEUx2EeHDd0dh_hKMYJhyVJJ9HMswAtU",
      },
    }
  );
  const data = await res.json();
  // const filterData = data.filter((fact) => fact.category === "history");
  console.log(data);
  createFactsList(data);
}

//load data

function createFactsList(dataArray) {
  const htmlArr = dataArray.map(
    (fact) => `<li class="fact">
                <p>
                ${fact.text}
                  <a
                    class="source"
                    href="${fact.source}"
                    target="_blank"
                    >(Source)</a
                  >
                </p>
                <span class="tag" style="background-color: ${
                  CATEGORIES.find((cat) => cat.name === fact.category).color
                }"
                  >${fact.category}</span
                >
                </li>`
  );
  console.log(htmlArr);
  const html = htmlArr.join("");
  factList.insertAdjacentHTML("afterbegin", html);
}

btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

console.dir(btn);

/*
// let votesInteresting = 23;
// let voteMindblowing = 5;

// votesInteresting = votesInteresting + 1;
// votesInteresting++;
// console.log(votesInteresting);

// let totalUpvotes = voteMindblowing + votesInteresting;
// console.log("upvotes:", totalUpvotes);

// let votesFalse = 4;
// const isCorrect = votesFalse < totalUpvotes;
// console.log(isCorrect);

function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;
  if (age >= 0) {
    return age;
  } else {
    return `impossible year. years needs to be less or equal ${currentYear}`;
  }
}

const age1 = calcFactAge(2015);
console.log(age1);

console.log(calcFactAge(2020));
console.log(calcFactAge(1990));

const calcFactAge2 = (year) =>
  year > new Date().getFullYear()
    ? `impossible year. years needs to be less or equal ${new Date().getFullYear()}`
    : new Date().getFullYear() - year;
console.log(calcFactAge2(2015));

// let votesInteresting = 20;
// let voteMindblowing = 5;

// if (votesInteresting === voteMindblowing) {
//   alert("This fact is equally interesting and mind blowing");
// } else if (votesInteresting > voteMindblowing) {
//   console.log("something else");
// }

// // falsy values: 0,'', null, undefined

// if (voteMindblowing) {
//   console.log("mindblowing");
// } else {
//   console.log("not so special");
// }

// let votesFalse = 7;
// const totalUpvotes = votesInteresting + voteMindblowing;

// const message = totalUpvotes > votesFalse ? "fact is true" : "might be false";
// // alert(message);

// const str = `The current fact is ${message}. it is ${calcFactAge(
//   2015
// )} years old`;
// console.log(str);

const fact = ["lisbon is the capital", 2015, true];
console.log(fact[1]);
console.log(fact.length);
console.log(fact[fact.length - 1]);

const [text, createdIn] = fact;
console.log(text);

const newfact = [...fact, "society"];
console.log(newfact);

const factObj = {
  text: "lisbon is the capital",
  category: "society",
  createdIn: 2015,
  isCorrect: true,
  createSummary: function () {
    return `the fact ${
      this.text
    } is from the category ${this.category.toUpperCase()}`;
  },
};

console.log(factObj.text);
const { category, isCorrect } = factObj;

console.log(category);
console.log(factObj.createSummary());

[2, 4, 6, 8].forEach(function (el) {
  console.log(el);
});

// const temp = [2, 4, 6, 8].map(function (el) {
//   return el * 10;
// });
const temp = [2, 4, 6, 8].map((el) => el * 10);

console.log(temp);

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const allcategories = CATEGORIES.map((el) => el.name);
console.log(allcategories);

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const factAges = initialFacts.map((el) => calcFactAge(el.createdIn));
console.log(factAges.join(" - "));
*/

// curl 'https://dkpnvfjuodddxrrghonz.supabase.co/rest/v1/facts' \ -H "apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRrcG52Zmp1b2RkZHhycmdob256Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYxMDAwODIsImV4cCI6MjA0MTY3NjA4Mn0.yZkaysc2FmrhEUx2EeHDd0dh_hKMYJhyVJJ9HMswAtU" \ -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRrcG52Zmp1b2RkZHhycmdob256Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYxMDAwODIsImV4cCI6MjA0MTY3NjA4Mn0.yZkaysc2FmrhEUx2EeHDd0dh_hKMYJhyVJJ9HMswAtU"
