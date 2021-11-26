import slugify from 'slugify';

interface Children{
    id?:number,
    name:string,
    content:string,
    slug?:string,
    price:number
}

interface Item{
    id?: number,
    content: string,
    name: string,
    slug?: string,
    childrens: Children[]
}

let menuItems: Item[] = [
    {
        name: "Banco de Dados",
        content: "Tela inicial do(a) ",
        childrens: [
            {
              name: "Banco de Dados Relacionais",
              content: "Diferenciado",
              price: 10.00
            },
            {
              name: "Banco de Dados não Relacionais",
              content: "Default",
              price: 10.00
            },
            {
              name: "MongoDB",
              content: "Default",
              price: 10.00
            },
            {
              name: "MySQL",
              content: "Default",
              price: 10.00
            },
            {
              name: "Oracle",
              content: "Default",
              price: 10.00
            },
            {
              name: "PostgreSQL",
              content: "Default",
              price: 10.00
            },
            {
              name: "Redis",
              content: "Default",
              price: 10.00
            },
            {
              name: "SQL",
              content: "Isso é um conteudo de SQL!",
              price: 10.00
            },
            {
              name: "SQLite",
              content: "Default",
              price: 10.00
            },
            {
              name: "SQL Server",
              content: "Default",
              price: 10.00
            },
        ]
    },
    {
        name: "Ciência de Dados",
        content: "Tela inicial do(a) ",
        childrens: [
            {
              name: "A linguagem de Programação R",
              content: "Default",
              price: 10.00
            },
            {
              name: "Artificial Inteligence",
              content: "Default",
              price: 10.00
            },
            {
              name: "Big Data",
              content: "Default",
              price: 10.00
            },
            {
              name: "Deep Learning",
              content: "Default",
              price: 10.00
            },
            {
              name: "Machine Learning",
              content: "Default",
              price: 10.00
            },
            {
              name: "Mineração de Dados",
              content: "Default",
              price: 10.00
            },
            {
              name: "Python e TensorFlow",
              content: "Default",
              price: 10.00
            },
            {
              name: "Reinforced Learning",
              content: "Default",
              price: 10.00
            },
            {
              name: "Supervised Learning",
              content: "Default",
              price: 10.00
            },
            {
              name: "Unsupervised Learning",
              content: "Default",
              price: 10.00
            },

        ]
    },
    {
      name: "Desenvolvimento Front-End",
      content: "Tela inicial do(a) ",
      childrens: [
          {
            name: "O básico de HTML, CSS e JS",
            content: "Default",
            price: 10.00
          },
          {
            name: "Vue.js",
            content: "Default",
            price: 10.00
          },
          {
            name: "React.js",
            content: "Default",
            price: 10.00
          },
          {
            name: "Angular",
            content: "Default",
            price: 10.00
          },
          {
            name: "Ember.js",
            content: "Default",
            price: 10.00
          },
          {
            name: "Ionic",
            content: "Default",
            price: 10.00
          },
          {
            name: "CSS com Bootstrap",
            content: "Default",
            price: 10.00
          },
          {
            name: "Flutter",
            content: "Default",
            price: 10.00
          },
          {
            name: "React Native",
            content: "Default",
            price: 10.00
          },
          {
            name: "Meteor",
            content: "Default",
            price: 10.00
          },
      ]
  },
  {
    name: "Desenvolvimento Back-End",
    content: "Tela inicial do(a) ",
    childrens: [
      {
        name: "Node.js",
        content: "Default",
        price: 10.00
      },
      {
        name: "Python Django",
        content: "Default",
        price: 10.00
      },
      {
        name: "Ruby",
        content: "Default",
        price: 10.00
      },
      {
        name: "PHP",
        content: "Default",
        price: 10.00
      },
      {
        name: "C#.NET",
        content: "Default",
        price: 10.00
      },
      {
        name: "C++ para Back-End",
        content: "Default",
        price: 10.00
      },
      {
        name: "Kotlin",
        content: "Default",
        price: 10.00
      },
      {
        name: "Scala",
        content: "Isso é um conteudo de SQL!",
        price: 10.00
      },
      {
        name: "Java Spring Boot",
        content: "Default",
        price: 10.00
      },
      {
        name: "Golang (Go)",
        content: "Default",
        price: 10.00
      },
    ]
  },
  {
    name: "Desenvolvimento Mobile",
    content: "Tela inicial do(a) ",
    childrens: [
        {
          name: "Xamarin",
          content: "Default",
          price: 10.00
        },
        {
          name: "Objective-C",
          content: "Default",
          price: 10.00
        },
        {
          name: "Kotlin para aplicativos móveis",
          content: "Default",
          price: 10.00
        },
        {
          name: "Java para aplicações Android",
          content: "Default",
          price: 10.00
        },
        {
          name: "Swift para aplicações iOS",
          content: "Default",
          price: 10.00
        },
        {
          name: "Python Kivy",
          content: "Default",
          price: 10.00
        },
        {
          name: "C para aplicativos móveis",
          content: "Default",
          price: 10.00
        },
        {
          name: "C++ para aplicativos móveis",
          content: "Default",
          price: 10.00
        },
        {
          name: "A linguagem de Programação Dart",
          content: "Default",
          price: 10.00
        },
        {
          name: "Golang para aplicativos móveis",
          content: "Default",
          price: 10.00
        },
    ]
  },
  {
    name: "Pacote Office",
    content: "Tela inicial do(a) ",
    childrens: [
        {
          name: "Microsoft Word",
          content: "Default",
          price: 10.00
        },
        {
          name: "Microsoft Excel",
          content: "Default",
          price: 10.00
        },
        {
          name: "Excel Avançado: VBA scripts",
          content: "Default",
          price: 10.00
        },
        {
          name: "Microsoft Access",
          content: "Default",
          price: 10.00
        },
        {
          name: "Microsoft OneNote",
          content: "Default",
          price: 10.00
        },
        {
          name: "Microsoft PowerPoint",
          content: "Default",
          price: 10.00
        },
        {
          name: "Microsoft Publisher",
          content: "Default",
          price: 10.00
        },
        {
          name: "Microsoft Outlook",
          content: "Default",
          price: 10.00
        },
        {
          name: "Fundamentos do Pacote Office",
          content: "Default",
          price: 10.00
        },
        {
          name: "Office 365",
          content: "Default",
          price: 10.00
        },
    ]
  },
  {
    name: "Desenvolvimento de games",
    content: "Tela inicial do(a) ",
    childrens: [
        {
          name: "Unity",
          content: "Default",
          price: 10.00
        },
        {
          name: "Unreal Engine",
          content: "Default",
          price: 10.00
        },
        {
          name: "Fundamentos do desenvolvimento de games",
          content: "Default",
          price: 10.00
        },
        {
          name: "C sharpe para games",
          content: "Default",
          price: 10.00
        },
        {
          name: "Desenvolvimento de games 3D",
          content: "Default",
          price: 10.00
        },
        {
          name: "Desenvolvimento de games 2D",
          content: "Default",
          price: 10.00
        },
        {
          name: "C++ para games",
          content: "Default",
          price: 10.00
        },
        {
          name: "Blueprints da Unreal Engine",
          content: "Default",
          price: 10.00
        },
        {
          name: "Desenvolvimento de games para dispositivos móveis",
          content: "Default",
          price: 10.00
        },
        {
          name: "Java para games",
          content: "Default",
          price: 10.00
        },
    ]
  },
  {
    name: "Engenharia de Software",
    content: "Tela inicial do(a) ",
    childrens: [
        {
          name: "Apache Airflow",
          content: "Default",
          price: 10.00
        },
        {
          name: "Microsserviços",
          content: "Default",
          price: 10.00
        },
        {
          name: "Compilação de código com Inno Setup",
          content: "Default",
          price: 10.00
        },
        {
          name: "Certifield Kubernetes Application Developer",
          content: "Default",
          price: 10.00
        },
        {
          name: "Kubernetes",
          content: "Default",
          price: 10.00
        },
        {
          name: "Algoritmos",
          content: "Default",
          price: 10.00
        },
        {
          name: "Estruturas de dados",
          content: "Default",
          price: 10.00
        },
        {
          name: "Metodologia Ágil SCRUM",
          content: "Default",
          price: 10.00
        },
        {
          name: "Programação Orientada a Objetos",
          content: "Default",
          price: 10.00
        },
        {
          name: "Programação Assíncrona",
          content: "Default",
          price: 10.00
        },
    ]
  },
  {
    name: "Ferramentas de desenvolvimento",
    content: "Tela inicial do(a) ",
    childrens: [
        {
          name: "Docker",
          content: "Default",
          price: 10.00
        },
        {
          name: "Git",
          content: "Default",
          price: 10.00
        },
        {
          name: "DevOps",
          content: "Default",
          price: 10.00
        },
        {
          name: "JIRA",
          content: "Default",
          price: 10.00
        },
        {
          name: "Jenkins",
          content: "Default",
          price: 10.00
        },
        {
          name: "Integração Contínua",
          content: "Default",
          price: 10.00
        },
        {
          name: "Confluence",
          content: "Default",
          price: 10.00
        },
        {
          name: "Slack",
          content: "Default",
          price: 10.00
        },
        {
          name: "Axure",
          content: "Default",
          price: 10.00
        },
        {
          name: "Trello",
          content: "Default",
          price: 10.00
        },
    ]
  },
  {
    name: "Desenvolvimento sem código",
    content: "Tela inicial do(a) ",
    childrens: [
        {
          name: "Fundamentos do Wordpress",
          content: "Default",
          price: 10.00
        },
        {
          name: "Programação visual com Bubble",
          content: "Default",
          price: 10.00
        },
        {
          name: "Wix",
          content: "Default",
          price: 10.00
        },
        {
          name: "Plugin Elementor para Wordpress",
          content: "Default",
          price: 10.00
        },
        {
          name: "Web Design",
          content: "Default",
          price: 10.00
        },
        {
          name: "UI Design",
          content: "Default",
          price: 10.00
        },
        {
          name: "UX Design",
          content: "Default",
          price: 10.00
        },
        {
          name: "Microsoft PowerApps",
          content: "Default",
          price: 10.00
        },
        {
          name: "Scratch",
          content: "Default",
          price: 10.00
        },
        {
          name: "No-Code: Conceitos",
          content: "Default",
          price: 10.00
        },
    ]
  },
];
let j = 1;
menuItems.forEach(element => {
    element.slug = slugify(element.name);
    let i = 0;
    element.content = "Pacote com todos os cursos da seção " + element.name
    element.childrens.forEach(element1 =>{
        switch(element1.name) {
          case 'C++':
            element1.slug = "c-plus-plus"
            break;
          case 'Golang (Go)':
            element1.slug = "golang-go"
            break;
          case 'C++ para aplicativos móveis':
            element1.slug = "c-plus-plus-para-aplicativos-moveis"
            break;
          case 'C++ para games':
            element1.slug = "c-plus-plus-para-games"
            break;
          case 'C++ para Back-End':
            element1.slug = 'c-plus-plus-para-back-end'
            break;
          default:
            element1.slug = slugify(element1.name)
            break;
        }
        i = i+1;
        element1.id = i;
        element1.content = "Curso " + element1.name
        //element.content += `<li>${element1.name}</li>`
    })
    element.id = j
    j = j+1;
});

export default menuItems;
