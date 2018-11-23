const mongoose = require('mongoose');

const Shop = require('../models/shop');

const Hotel = require('../models/hotel');

mongoose.connect('mongodb://localhost/careyourpet', { useNewUrlParser: true });

const shops = [{
  name: 'TABAJARAS',
  CNPJ: 57214649000122,
  location: { type: 'Av. Doutor Renato de Andrade Maia, 963 - Cidade Maia', coordinates: [-23.453696, -46.528874] },
  services: ['Banho', 'Tosa', 'Veterinário', 'Outros'],
  pet: true
},
{
  name: 'Petz',
  CNPJ: 39054016000112,
  location: { type: 'Sem rua', coordinates: [-40, -20] },
  services: ['Banho', 'Tosa', 'Veterinário', 'Outros'],
  phone: 24401523,
  pet: false
},
{
  name: 'Cobasi',
  CNPJ: 11235218000141,
  location: { type: 'Com rua', coordinates: [-40.5, -20.5] },
  services: ['Banho', 'Tosa', 'Veterinário', 'Outros'],
  phone: 24421543,
  pet: false
},
{
  name: 'Pet Clube Jardins',
  CNPJ: 11235218000141,
  location: { type: 'R. Pamplona, 834 - Jardim Paulista, São Paulo - SP, 01405-001', coordinates: [-23.564994, -46.655331] },
  services: ['Banho', 'Tosa', 'Veterinário', 'Outros'],
  phone: 1145080044,
  pet: false

}];

const hotels = [{
  CNPJ: 11814546000100,
  name: 'DurmaBemDoguinho',
  email: 'dormedorme@dog.com',
  password: '1234',
  location: { type: 'Rua Top', coordinates: [-22.45, -22.46] },
  phone: 1124406924
},
{
  CNPJ: 10391569000189,
  name: 'Dog Hostel Tia Pah',
  email: 'tiapah@medasuapah.com',
  password: 'titia',
  location: { type: 'R. São Severo - Vila Re, São Paulo - SP, 03658-001', coordinates: [-23.462523, -46.517188] },
  phone: 11976098038
},
{
  CNPJ: 39311826000107,
  name: 'Banho e Tosa Black White Pet',
  email: 'tosa@banho.com',
  password: 'tosa1',
  location: { type: 'R. Santa Izabel, 253 - Vila Augusta, Guarulhos - SP, 07023-022', coordinates: [-23.462525, -46.517178] },
  phone: 1148037000
}];

Shop.create(shops, (err) => {
  if (err) { throw (err); }
  console.log(`Created ${shops.length}`);
  mongoose.connection.close();
});

Hotel.create(hotels, (err) => {
  if (err) { throw (err); }
  console.log(`Created ${hotels.length}`);
  mongoose.connection.close();
});
