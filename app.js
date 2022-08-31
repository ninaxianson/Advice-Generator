const adviceButton = document.querySelector("button");

const fetchAdvice = async () => {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();

  document.getElementById("title").innerHTML = `Advice #${data.slip.id}`;
  document.getElementById("text").innerHTML = `"${data.slip.advice}"`;
};

adviceButton.addEventListener("click", fetchAdvice);
