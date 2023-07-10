dotenv.config();

const amount = document.getElementById("amount");
const oldCurrency = document.getElementById("oldCurrency");
const newCurrency = document.getElementById("newCurrency");
const convert = document.getElementById("convert");
const result = document.getElementById("result");

console.log(process.env.API_KEY);

const apiKey = "f939z/G4ePPIM/29v1LrDQ==4FQZnz1H9dpkAXdr";

convert.addEventListener("click", () => {
  const amountTotal = amount.value;
  const oldCurrencyTotal = oldCurrency.value;
  const newCurrencyTotal = newCurrency.value;
  const apiUrl = `https://api.api-ninjas.com/v1/convertcurrency?want=${newCurrencyTotal}&have=${oldCurrencyTotal}&amount=${amountTotal}`;
  const url = apiUrl;

  fetch(url, {
    headers: {
      "X-API-KEY": apiKey,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const rate = data.new_amount;
      result.innerHTML = `${amountTotal} ${oldCurrency.value} = ${rate.toFixed(
        2
      )} ${newCurrency.value}`;
    })
    .catch((error) => {
      console.error("Request failed: ", error);
      result.innerHTML = "An error occurred please try again later";
    });
});
