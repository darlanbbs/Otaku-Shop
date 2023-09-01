const faker = require('faker');

const TOTAL_PAGES = 5;

const baseProducts = [
  { name: 'Camisa Gengar', description: faker.lorem.paragraph(), image_url: 'https://acdn.mitiendanube.com/stores/001/111/914/products/gotta-hunt1-2b98d41af6a23274cf16931741812114-320-0.gif', category: 'clothes' }
,
{ name: 'Camisa Guts Berserker', description: faker.lorem.paragraph(), image_url: 'https://acdn.mitiendanube.com/stores/001/111/914/products/guts1-e7f3ba22bf1e1a5cc516931741658582-320-0.gif', category: 'clothes' }
,
{ name: 'Camisa Dragão de Olhos Azuis', description: faker.lorem.paragraph(), image_url: 'https://acdn.mitiendanube.com/stores/001/111/914/products/blue-eyes-drag1-fc3be6dca3eb772f7316931739687182-320-0.gif', category: 'clothes' }
,
{ name: 'Camisa Itadori Jujutsu Kaisen', description: faker.lorem.paragraph(), image_url: 'https://acdn.mitiendanube.com/stores/001/111/914/products/mage-colors1-061372726ba2aa42ff16878795880917-320-0.jpg', category: 'clothes' }
,
{ name: 'Brinco Tanjiro Demon Slayer', description: faker.lorem.paragraph(), image_url: 'https://img.elo7.com.br/product/main/40243BE/brinco-anime-kimetsu-no-yaiba-hanafuda-brinco-anime.jpg', category: 'acessorys' }
,
{ name: 'Colar Toyko Revengers', description: faker.lorem.paragraph(), image_url: 'https://www.geekmagazine.com.br/wp-content/uploads/2022/02/352863041.webp', category: 'acessorys' }
,
{ name: 'Kunai Ninja Naruto', description: faker.lorem.paragraph(), image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_ZGPcU4eTvbPnF0dRdcYesM0Si9wzG75S4wiMPYAr-xPshSoYotkKNtqk_EpjT7n3-po&usqp=CAU', category: 'acessorys' }
,
  { name: 'Figure Itachi Naruto', description: faker.lorem.paragraph(), image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM4uZ2L0TMxZK-VqJDyP8fao9ptlo_i35P1XscniwJjGmUJEullRBZxVDcTtHLluLuhsI&usqp=CAU', category: 'figures' },
  { name: 'Figure Luffy One Piece', description: faker.lorem.paragraph(), image_url: 'https://m.media-amazon.com/images/I/61cmFBiD5bS._AC_UF894,1000_QL80_.jpg', category: 'figures' },
  { name: 'Figure Zenitsu Demon Slayer', description: faker.lorem.paragraph(), image_url: 'https://images-americanas.b2w.io/produtos/5064800314/imagens/action-figure-anime-demon-slayer-kimetsu-no-yaiba-zenitsu-agatsuma-17cm/5064800349_1_large.jpg', category: 'figures' },
  { name: 'Moletom Eren Attack On Titan', description: faker.lorem.paragraph(), image_url: 'https://img.elo7.com.br/product/original/3F6416A/blusa-moletom-anime-attack-on-titan-4-mod-02-agasalho-attack-on-titan.jpg', category: 'clothes' },
  { name: 'Colar 7 Pecados Capitais', description: faker.lorem.paragraph(), image_url: 'https://m.media-amazon.com/images/I/41kip06WSUL._AC_SY1000_.jpg', category: 'acessorys' },
]

const allProducts = new Array(TOTAL_PAGES).fill(1).reduce((acc) => {
  const products = baseProducts.map(product => ({
    ...product, 
    id: faker.datatype.uuid(),
    price_in_cents: faker.datatype.number({
      min: 2000,
      max: 10000,
    }),
    sales: faker.datatype.number(40),
    created_at: faker.date.past()
  })).sort(() => .5 - Math.random());

  return [...acc, ...products]
}, [])

module.exports = {
  products: allProducts
}
