const Bot = [
  {
    id: "1",
    name: "Bot1",
    avatar:
      "https://i.pinimg.com/originals/2c/8b/ed/2c8bed2ea157922ca65cf5f4ac98d43a.png",
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
        response: () => "Si vous ne réussissez pas du premier coup, appelez ça « version 1.0 »."
      },
      {
        title: "help",
        keyWords: ["help"],
        response: () => "Les commandes disponibles sont: '/heure', '/hour', '/time': pour afficher l'heure \n 'devise': pour connaitre les devises des bots."
      }
    ]
  },
  {
    id: "2",
    name: "Bot2",
    avatar:
      "https://cdn.dribbble.com/users/79449/screenshots/14019420/bot_4x.png",
    version: "1.0.0",
    description: "Salut je suis le Bot 2",
    actions: [
      {
        keyWords: ["devise"],
        response: () => "Il y a 10 types de personnes dans le monde : celles qui comprennent le binaire, et celles qui ne le comprennent pas."
      }
    ]
  }
];

export default Bot;