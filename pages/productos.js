const productos = [
    {
        id: 1,
        nombre: "pinza alicate",
        precio: 200,
        img: "https://www.bing.com/images/search?view=detailV2&ccid=Zz4SEgxM&id=55E64D6D53D2190ECD85D1A0A741F57C6E7A544A&thid=OIP.Zz4SEgxMPCSMrV7G2B0Z8QHaHa&mediaurl=https%3a%2f%2fwww.discamp.com%2fwp-content%2fuploads%2f2020%2f10%2falicate-6-pro-1.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.673e12120c4c3c248cad5ec6d81d19f1%3frik%3dSlR6bnz1Qaeg0Q%26pid%3dImgRaw%26r%3d0&exph=1200&expw=1200&q=pinza+alicate&simid=608028509118679750&FORM=IRPRST&ck=596BA674148FD8860E961F877AAB0AF2&selectedIndex=21&ajaxhist=0&ajaxserp=0"
    }
]


productos.forEach((products)=> {
    let content = document.createElement("div");  
    content.innerHTML = `
    <img src="${products.img}"
    <h3>${products.nombre}</h3>
    <p>${products.precio} $</p>
    `;
  
  
  })