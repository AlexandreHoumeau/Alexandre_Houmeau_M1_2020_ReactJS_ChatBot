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
        response: () =>
          "Si vous ne réussissez pas du premier coup, appelez ça « version 1.0 »."
      },
      {
        title: "help",
        keyWords: ["help", "help "],
        response: () =>
          'Les commandes disponibles sont: \n- "/heure", "/hour", "/time": pour afficher l"heure - "devise": pour connaitre les devises des bots. \n- "blague": pour afficher une blague aléatoire sur Chuck Norris (en anglais) - "infos": Pour avoir des informations sur le créateur - "bonjour": Pour être salué'
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
        response: () =>
          "Il y a 10 types de personnes dans le monde : celles qui comprennent le binaire, et celles qui ne le comprennent pas."
      },
      {
        keyWords: ["blague"],
        response: () => "jokes"
      },
      {
        keyWords: ["hello", "bonjour", "salut"],
        response: () => "Saluuuut j'espère que ça va !"
      }
    ]
  },
  {
    id: "3",
    name: "Bot3",
    avatar: "https://cdn.iconscout.com/icon/free/png-512/robot-97-415007.png",
    version: "1.0.0",
    description: "Salut je suis le Bot 3",
    actions: [
      {
        keyWords: ["devise"],
        response: () =>
          "Mes logiciels n’ont jamais de bug. Ils développent juste certaines fonctions aléatoires."
      },
      {
        keyWords: ["infos", "infos "],
        response: () =>
          "Crée par Alexandre Houmeau, étudiant en M1 à myDigitalSchool. Actuellement en alternance en tant que développeur d'application mobile React Native chez Uptoo."
      }
    ]
  }
];

export default Bot;
