module.exports = {

  prompts: false,

  port: 9779,
  outPath: '../s3/seutempo',

  // These are variables will be accessible via our templates
  templateData: {

    // Configurações
    conf: {
	  disqus: "wildtech",
      name: "Qual é o seu Tempo?",
      description: "Conference description",
      date: "15 de Agosto",
      price: "R$60",
      venue: "Nós Coworking",
      address: "Av. Cristovão Colombo 545, Prédio 2",
      city: "Porto Alegre",
      state: "Rio Grande do Sul"
    },

    // Site info
    site: {
      theme: "yellow-swan",
      url: "http://www.wildtech.com.br",
      googleanalytics: "UA-2807187-16"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      'speakers',
      'schedule',
      'sponsors',
      'partners',
      'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "Motivação",
      location: "Local",
      speakers: "Facilitador",
      schedule: "Programação",
      sponsors: "Patrocinadores",
      partners: "Parceiros",
      contact: "Contato"
    },

    // The entire schedule
    speakers: [
      {
        name: "Daniel Wildt",
        photo: "themes/yellow-swan/img/daniel-wildt-small.jpeg",
        bio: "Sou um desenvolvedor de software. Como aprendiz, aprendo algo novo todos os dias. Busco falhar o mais rápido possível, ou saber que estou no caminho certo. Se é que existe um. O importante é experimentar e buscar novas conclusões. Durante muito tempo busquei alvos só por buscar. Queria ser. Faz um certo tempo que tenho uma missão, onde o fazer é mais importante que ter. O ser é consequência. A missão? A vontade de ajudar pessoas a serem melhores profissionais, a realizarem mais, serem felizes no que fazem. De ajudar equipes a buscarem a melhoria contínua no dia a dia e conseguir as recompensas de trabalhar como equipe. E de ajudar produtos e serviços a aparecerem no mercado, causando o bem. Faço isto melhorando continuamente, me atualizando, falhando, aprendendo e me adaptando. No esporte, no trabalho, em todas perspectivas que a minha vida tem.",
        company: "Wildtech",
        link: {
          href: "http://twitter.com/dwildt",
          text: "@dwildt"
        }
      }
    ],

    // Programa do evento
    schedule: [
      {
	    block: "Início",
        name: "Registro e Welcome coffee",
        description: "Aproveite para trazer cartões e aproveitar o espaço de networking"
      },
      {
	    block: "Apresentação",
        name: "Aquecimento",
        description: "Entendendo a platéia e expectativas do treinamento (atividade) / Daniel Wildt conta sua história com o tempo e os desafios que passou para inverter o jogo, e passar a viver o tempo."
      },
      {
	    block: "Bloco 1",
        name: "Entendo propósitos e ações",
        description: "O que é qualidade de vida? / Entendendo o Worklife balance / O dia perfeito (atividade) / As necessidades e nossas metas / Como mudar? Quando mudar? Existe um formato? / Criando um estilo de vida (DEAL) (atividade)/ Entendendo as necessidades atuais  (atividade)/ Criando foco e metas"
      },
      {
	    block: "Bloco 2",
        name: "Ferramentas de apoio",
        description: "Getting Things Done (atividade) / Pomodoro Technique (atividade) / SongDoro / Inbox Zero / Note-it (que você fará com um super bloquinho da Wildtech :-) (atividade)"
      },
      {
	    block: "Bloco 3",
        name: "Revisão e Melhoria contínua",
        description: "A importância do feedback / A importância dos momentos de reflexão / Melhoria Contínua tem hora marcada? / Os próximos passos (atividade)"
      },
      {
	    block: "Próximos passos",
        name: "Fishbowl de discussão",
        description: "Momento de discussão e troca de ideias com os participantes."
      }

    ],

    // List of Sponsors
    sponsors: [
      {
        name: "Nós Coworking",
        logo: "themes/yellow-swan/img/nos-coworking.png",
        url: "http://eventick.com.br"
      }
    ],

    // List of Partners
    partners: [
      {
        name: "Nós Coworking",
        logo: "themes/yellow-swan/img/nos-coworking.png",
        url: "http://www.noscoworking.com.br"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    }
  }
};