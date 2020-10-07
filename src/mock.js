module.export = [
  {
    id: "1",
    name: "Bot1",
    avatar:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/theory-1552510536.jpg?crop=0.501xw:1.00xh;0.0173xw,0&resize=480:*",
    version: "1.0.0",
    description: "Salut je suis le Bot 1",
    actions: [
      {
        title: "heure",
        keyWords: ["/heure", "/hour", "/time"],
        response: () => {
          const date = new Date();

          return date.toLocaleString();
        }
      },
      {
        title: "devise",
        keyWords: ["devise"],
        response: () => "L'hiver arrive"
      }
    ]
  },
  {
    id: "2",
    name: "Bot2",
    avatar:
      "https://www.my-citations.com/images/auteurs/114_tyrion-lannister_s.jpeg",
    version: "1.0.0",
    description: "Salut je suis le Bot 2",
    actions: [
      {
        keyWords: ["devise"],
        response: () => "Un Lannister paye toujours ses dettes"
      }
    ]
  }
];
