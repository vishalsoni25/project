const form = document.querySelector('#searchForm');
const res = document.querySelector('#tableResult');
var upd;

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(upd){
        clearTimeout(upd);
    }
    const ctype = form.elements.coinType.value;
    console.log(ctype);
    fetchPrice(ctype);
})

const fetchPrice = async (ctype)=>{
    const r = await axios.get('https://api.coinstats.app/public/v1/coins/'+ctype);
    //console.log(r.data.coin);
    const price = r.data.coin.price;
    const volume = r.data.coin.volume;
    const change = r.data.coin.priceChange1d;
    const supply = r.data.coin.totalSupply;
    const name = r.data.coin.name;
    const time = new Date();
    res.innerHTML=`<tr style="background-color:blue;color:white;font-weight:700">
    <td>Property</td>
    <td>Value</td>
</tr>
<tr>
    <td>${name}</td>
    <td>${price}</td>
</tr>
<tr>
    <td>Volume</td>
    <td >${volume}</td>
</tr>
<tr>
    <td>Change</td>
    <td>${change}</td>
</tr>
<tr>
    <td>Supply</td>
    <td>${supply}</td>
</tr>
<tr>
    <td>Last Updated</td>
    <td>${time}</td>
</tr>`;

 upd = setTimeout(()=>fetchPrice(ctype),10000)
}