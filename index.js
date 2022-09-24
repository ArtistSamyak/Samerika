
const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
const today = new Date();
const meetup = new Date(2022, 09, 02);

const diffDays = Math.round(((meetup - today) + oneDay) / oneDay);
const h2 = document.querySelector("h2")

if (diffDays > 1) {
  h2.innerHTML = diffDays + " Days to go!"
} else if (diffDays === 1) {
  h2.innerHTML = " 1 Day to go!";
} else if (diffDays === 0) {
  h2.innerHTML = "🎉 Today! 🎉";
} else {
  h2.innerHTML = "Complete!";
}
