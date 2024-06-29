
const BaseUrl="https://api.coingecko.com/api/v3";
const ApiKy="CG-8N9ufCev2vcz5sEhh2tfPEDV"
const getCoinList = () => {
   
    return (
        `${BaseUrl}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=2&x-cg-pro-api-key=${ApiKy}`
    );
}
export { getCoinList };