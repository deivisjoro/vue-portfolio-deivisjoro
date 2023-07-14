const projects = [
    {
      id: 1,
      title: 'SAPA',
      acronimus: 'Sistema Automatizado para Procesos de Acreditacion',
      description: 'SAPA is a support application for the Self-Assessment of higher education academic programs, which offers an automated component for the preparation of the "Self-Assessment" section. The Application aims to facilitate the calculation processes involved in the "Self-Assessment Report", based on a statistical model created by the University of Córdoba',
      features: 'Modules for 9 types of users, test application, roles, graphic reports',
      imagesUrl: '/images/projects/sapa/',
      cover: 'cover.png',
      images: [
        {name: 'sapa1.png', description: 'Design of the main page of the first prototype'},
        {name: 'sapa2.png', description: 'Design of the main page of the second prototype'},
        {name: 'sapa3.png', description: 'Design of the main page of the third prototype'},
        {name: 'sapa4.png', description: 'Design of the main page of the third prototype V.2'},
        {name: 'sapa5.png', description: 'Super admin view, this user controls the academic programs and assigns an administrator to each program'},
        {name: 'sapa6.png', description: 'Super admin view - admin users'},
        {name: 'sapa7.png', description: 'Module that allows exporting survey data from one academic program to another'},
        {name: 'sapa8.png', description: 'Administrator user for academic programs'},
        {name: 'sapa9.png', description: 'Input question to the survey'},
        {name: 'sapa10.png', description: 'Weighting report of the questions of each characteristic evaluated'},
        {name: 'sapa11.png', description: 'Report of factors evaluated by each user'},
        {name: 'sapa12.png', description: 'Report of the results obtained in each question by type of user'},
        {name: 'sapa13.png', description: 'Consolidated result by evaluated factor'},
        {name: 'sapa14.png', description: 'User module with coordinator role, can evaluate the existence of documents'},
        {name: 'sapa15.png', description: 'User module with worker role, this role can only answer the survey'},
        {name: 'sapa16.png', description: 'The survey is divided by factors and the factors in characteristics'},
        {name: 'sapa17.png', description: 'User module with graduated role, this role can only answer the survey'},
        {name: 'sapa18.png', description: 'User module with employer role, this role can only answer the survey'},
        {name: 'sapa19.png', description: 'User module with student role, this role can only answer the survey'},
        {name: 'sapa20.png', description: 'User module with teacher role, this role can only answer the survey'},
        {name: 'sapa21.png', description: 'User module with manager role, this role can only answer the survey'},
      ],
      url: '',
      github: '',
      category: 'Development',
      type: 'Web',
      languaje: 'PHP',
      kind: 'Statistical',
      stack: [
        'PHP', 'MySQL', 'Linux', 'CSS', 'HTML', 'Javascript', 'Smarty', 'jpgraph', 'Pear', 'POO'
      ],
      isPublic: false,
      company: 'Group SOCRATES',
      roles: ['Developer', 'Analyst', 'Tester', 'Documenter', 'Trainer']
    },
    {
      id: 2,
      title: 'AppControl',
      acronimus: 'App de Control entradas / salidas',
      description: 'Application for the control of exits and entrances of medicines from the Camú de San Pelayo pharmacy',
      features: 'Inventory, suppliers, medicines, reports, purchases, sales',
      imagesUrl: '/images/projects/appcontrol/',
      cover: 'cover.png',
      images: [
        {name: 'appcontrol1.png', description: 'Screen splash and app loading'},
        {name: 'appcontrol2.png', description: 'Authentication and authorization window'},
        {name: 'appcontrol3.png', description: 'Dashboard main window'},
        {name: 'appcontrol4.png', description: 'Option to backup the database'},
        {name: 'appcontrol5.png', description: 'List of providers with options to enter, delete, print to jasper report, import from excel, search with filter, edition and deletion of records'},
        {name: 'appcontrol6.png', description: 'Window to enter a record'},
        {name: 'appcontrol7.png', description: 'Shopping list'},
        {name: 'appcontrol8.png', description: 'Window to enter a record of shopping'},
        {name: 'appcontrol9.png', description: 'Subwindow to select medication if you dont know the code or name'},
        {name: 'appcontrol10.png', description: 'Invoice exported to jasper report'},
        {name: 'appcontrol11.png', description: 'Invoice footer exported to jasper report'},
        {name: 'appcontrol12.png', description: 'Invoice exported to excel'},
        {name: 'appcontrol13.png', description: 'Select inventory report by date'},
        {name: 'appcontrol14.png', description: 'Inventory report in excel'},
      ],
      url: '',
      github: '',
      category: 'Desktop',
      type: 'Desktop',
      languaje: 'Java',
      kind: 'Inventory Control',
      stack: [
        'Java', 'SQLite', 'Swing', 'Jasper Report'
      ],
      isPublic: false,
      company: 'CAMU San Pelayo',
      roles: ['Developer', 'Analyst', 'Tester', 'Designer']
    },
    {
      id: 3,
      title: 'DatasisWeb',
      acronimus: 'Plataforma de control e información académica para instituciones educativas',
      description: 'Plataforma de control e información académica para instituciones educativas',
      features: 'Matriculas, informes, cargas academicas, estudiantes, docentes, calificaciones, boletines, roles',
      imagesUrl: '/images/projects/datasisweb/',
      cover: 'cover.png',
      images: [],
      url: '',
      github: '',
      category: 'Development',
      type: 'Web',
      languaje: 'CakePHP',
      kind: 'Academic Management',
      stack: [
        'PHP', 'CakePHP', 'MySQL', 'Javascript', 'JQuery', 'JQuery UI', 'CSS', 'HTML', 'Ajax'
      ],
      isPublic: false,
      company: 'Data Sistemas',
      roles: ['Developer', 'Analyst', 'Tester', 'Designer', 'Trainer']
    },      
    {
      id: 4,
      title: 'AVES',
      acronimus: 'Ambiente Virtual de Educación Superior',
      description: 'Ambiente Virtual de Educación Superior',
      features: 'Matriculas, cargas academicas, estudiantes, docentes, boletines, cursos, roles',
      imagesUrl: '/images/projects/aves/',
      cover: 'cover.png',
      images: [],
      url: '',
      github: '',
      category: 'Development',
      type: 'Web',
      languaje: 'PHP',
      kind: 'Learning Management System',
      stack: [
        'PHP', 'MySQL', 'Linux', 'CSS', 'HTML', 'Javascript', 'Smarty', 'Pear', 'POO'
      ],
      isPublic: false,
      company: 'Group SOCRATES',
      roles: ['Developer', 'Analyst', 'Tester', 'Documenter', 'Trainer']
    },
    {
      id: 5,
      title: 'OVAUnicor',
      acronimus: 'Banco de Objetos de Aprendizaje ',
      description: 'Banco de Objetos de Aprendizaje ',
      features: 'Recursos de aprendizaje, roles',
      imagesUrl: '/images/projects/ovaunicor/',
      cover: 'cover.png',
      images: [],
      url: '',
      github: '',
      category: 'Development',
      type: 'Web',
      languaje: 'CakePHP',
      kind: 'Learning Management System',
      stack: [
        'PHP', 'CakePHP', 'MySQL', 'Javascript', 'JQuery', 'JQuery UI', 'CSS', 'HTML', 'Ajax'
      ],
      isPublic: false,
      company: 'Group SOCRATES',
      roles: ['Developer', 'Analyst', 'Tester', 'Documenter']
    },
    {
      id: 6,
      title: 'SIGAP',
      acronimus: 'Sistema de control de proyectos',
      description: 'Sistema de control de proyectos',
      features: 'Presupuesto, reportes, proyectos',
      imagesUrl: '/images/projects/sigap/',
      cover: 'cover.png',
      images: [],
      url: '',
      github: '',
      category: 'Desktop',
      type: 'Desktop',
      languaje: 'Delphi',
      kind: 'Information Management System',
      stack: [
        'Delphi', 'Object Pascal', 'QuickReport', 'Firebase/Interbase'
      ],
      isPublic: false,
      company: 'Group SOCRATES',
      roles: ['Developer', 'Analyst', 'Tester', 'Documenter', 'Trainer']
    },
  ];

  export default projects;