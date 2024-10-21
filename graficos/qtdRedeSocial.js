const url = "https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json"



async function vizualizarInformacaoGlobais(){

const res = await fetch(url)
const dados = await res.json()
console.log(dados);

const facebook = (dados.Facebook / 1000);
const intagram = (dados.Instagram / 1000);
const youtube = (dados.Youtube / 1000);
const tiktok = (dados.Tiktok / 1000);
const whatsapp = (dados.WhatsApp / 1000);
const wechat = (dados.WeChat / 1000);

const horas = parseInt(dados.tempo_medio);
const minutos = Math.round((dados.tempo_medio - horas) * 100).toFixed(2);

const paragrafo = document.createElement('p')
paragrafo.classList.add('graficos-container__texto')

paragrafo.innerHTML = ` 
Facebook tem <span>${facebook}</span> bilhões de usuarios, 
Instagram tem <span>${intagram}</span> bilhões de usuarios, 
Youtube tem <span>${youtube}</span> bilhões de usuarios, 
TikTok tem <span>${tiktok}</span> bilhões de usuarios, 
Whatsapp tem <span>${whatsapp}</span> bilhões de usuarios e  
Wechat tem <span>${wechat}</span> bilhões de usuarios`

console.log(paragrafo)

const container = document.getElementById("graficos-container")
container.appendChild(paragrafo)
}

vizualizarInformacaoGlobais();