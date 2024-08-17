import { Motorcycle } from "@/app/motos/types";

const clientName1: string = "Gabriel Santos";
const clientName2: string = "Mariana Lima";
const clientName3: string = "Carlos Oliveira";

const exampleMotorcycles1: Motorcycle[] = [
  {
    moto_id: "df21fs",
    tipo: "Custom",
    modelo: "Harley-Davidson Street 750",
    data_fabricacao: "10-05-2018",
    numero_serie: "HDST7502018XYZ",
    proprietario: clientName1,
    historico_manutencao: ["10/12/22", "10/12/23"],
  },
  {
    moto_id: "h2k31s",
    tipo: "Esportiva",
    modelo: "Yamaha YZF-R3",
    data_fabricacao: "02-03-2020",
    numero_serie: "YYZR32020ABC",
    proprietario: clientName1,
    historico_manutencao: ["10/12/22", "10/12/23"],
  },
  {
    moto_id: "kgk2s1",
    tipo: "Street",
    modelo: "Honda CB300R",
    data_fabricacao: "15-07-2019",
    numero_serie: "HCB300R2019QWE",
    proprietario: clientName1,
    historico_manutencao: ["10/12/22", "10/12/23"],
  },
];

const exampleMotorcycles2: Motorcycle[] = [
    {
      moto_id: "h2k31s",
      tipo: "Esportiva",
      modelo: "Yamaha YZF-R3",
      data_fabricacao: "02-03-2020",
      numero_serie: "YYZR32020ABC",
      proprietario: clientName2,
      historico_manutencao: ["10/12/22", "10/12/23"],
    }
  ];
  
  const exampleMotorcycles3: Motorcycle[] = [
    {
      moto_id: "kgk2s1",
      tipo: "Street",
      modelo: "Honda CB300R",
      data_fabricacao: "15-07-2019",
      numero_serie: "HCB300R2019QWE",
      proprietario: clientName3,
      historico_manutencao: ["10/12/22", "10/12/23"],
    }
  ];

  export const clientData = [
    {
      client_id: "client123",
      cpf: "123.456.789-00",
      name: clientName1,
      gender: "Masculino",
      date_birth: "08/10/1995",
      motorcycles: exampleMotorcycles1,
    },
    {
      client_id: "client456",
      cpf: "987.654.321-00",
      name: clientName2,
      gender: "Feminino",
      date_birth: "15/11/1990",
      motorcycles: exampleMotorcycles2,
    },
    {
      client_id: "client789",
      cpf: "456.123.789-00",
      name: clientName3,
      gender: "Masculino",
      date_birth: "22/06/1985",
      motorcycles: exampleMotorcycles3,
    }
  ];