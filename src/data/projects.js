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
      images: [
        {name: 'datasisweb1.png', description: 'Access control window and login'},
        {name: 'datasisweb2.png', description: 'Dashboard user with coordinator role'},
        {name: 'datasisweb3.png', description: 'Student list'},
        {name: 'datasisweb4.png', description: 'Option to register a student'},
        {name: 'datasisweb5.png', description: 'Panel with information of a selected student'},
        {name: 'datasisweb6.png', description: 'Option to change to group student'},
        {name: 'datasisweb7.png', description: 'Option to activate or deactivate a student'},
        {name: 'datasisweb8.png', description: 'The coordinator can assign activities to teachers'},
        {name: 'datasisweb9.png', description: 'The coordinator can create class schedules'},
        {name: 'datasisweb10.png', description: 'Academic assignment per teacher'},
        {name: 'datasisweb11.png', description: 'Reports that can be generated to pdf'},
        {name: 'datasisweb12.png', description: 'Academic assignment per teacher'},
        {name: 'datasisweb13.png', description: 'Class schedule per teacher'},
        {name: 'datasisweb14.png', description: 'Monthly attendance sheet report'},
        {name: 'datasisweb15.png', description: 'Academic report per student'},
        {name: 'datasisweb16.png', description: 'General report by group'},
        {name: 'datasisweb17.png', description: 'Automatic certificates'},
        {name: 'datasisweb18.png', description: 'Dashboard user with manager role'},
        {name: 'datasisweb19.png', description: 'Dashboard user with teacher role'},
        {name: 'datasisweb20.png', description: 'Teacher entering grades by group and by subject'},
      ],
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
      description: 'El Campus Virtual AVES surge con la finalidad de extender, mejorar y hacer más eficiente la forma de enseñanza y potenciar de manera eficaz el aprendizaje a través escenarios virtuales, como elemento innovador donde se incluyen, recursos de aprendizaje enriquecidos por teorías y enfoques pedagógicos actuales, capacidades para el trabajo colaborativo y cooperativo a través de servicios de comunicación síncronos y asíncronos donde los aprendices y tutores puedan participar sin ningún inconveniente de tiempo y espacio.',
      features: 'Matriculas, cargas academicas, estudiantes, docentes, boletines, cursos, roles',
      imagesUrl: '/images/projects/aves/',
      cover: 'cover.png',
      images: [
        {name: 'aves1.png', description: 'Home page, we have several templates for each version'},
        {name: 'aves2.png', description: 'Dashboard user admin'},
        {name: 'aves3.png', description: 'Option to list in the admin module'},
        {name: 'aves4.png', description: 'Dashboard user psychologist'},
        {name: 'aves5.png', description: 'The psychologist programs training'},
        {name: 'aves6.png', description: 'Form to enter training'},
        {name: 'aves7.png', description: 'Training list'},
        {name: 'aves8.png', description: 'The psychologist attends forums'},
        {name: 'aves9.png', description: 'The psychologist participates in chat sessions'},
        {name: 'aves10.png', description: 'Users have a calendar that shows upcoming activities'},
        {name: 'aves11.png', description: 'Dashboard user coordinator'},
        {name: 'aves12.png', description: 'All users can update their data'},
        {name: 'aves13.png', description: 'Users have a personal agenda'},
        {name: 'aves14.png', description: 'The coordinator can add surveys'},
        {name: 'aves15.png', description: 'The coordinator can see statistics'},
        {name: 'aves16.png', description: 'The coordinator can add news that will be displayed on the dashboard of some user roles'},
        {name: 'aves17.png', description: 'List of teachers coordinated by the user'},
        {name: 'aves18.png', description: 'List of courses of a teacher'},
        {name: 'aves19.png', description: 'Main page of a course'},
        {name: 'aves20.png', description: 'A course has discussion forums'},
        {name: 'aves21.png', description: 'Users can reply to messages'},
        {name: 'aves22.png', description: 'The teacher can add an assignment to the students'},
        {name: 'aves23.png', description: 'The teacher can add tests / quizzes'},
        {name: 'aves24.png', description: 'Quiz preview'},
        {name: 'aves25.png', description: 'Announcements can be created for the course'},
        {name: 'aves26.png', description: 'Student list'},
        {name: 'aves27.png', description: 'The course has a file management module'},
        {name: 'aves28.png', description: 'Homework list for a course'},
        {name: 'aves29.png', description: 'Course activities calendar'},
        {name: 'aves30.png', description: 'All activities planned by the teacher'},
        {name: 'aves31.png', description: 'Student user dashboard'},
        {name: 'aves32.png', description: 'Student course listing'},
        {name: 'aves33.png', description: 'Another home page template'},
        {name: 'aves34.png', description: 'home page university welfare section'},
        {name: 'aves35.png', description: 'We have a section with course content, this is a version'},
        {name: 'aves36.png', description: 'Navigating the course'},
        {name: 'aves37.png', description: 'Seeing more features of a course'},
        {name: 'aves38.png', description: 'Survey results'},
        {name: 'aves39.png', description: 'Another home page'},
      ],
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
      roles: ['Developer', 'Analyst', 'Tester', 'Documenter', 'Trainer', 'Webmaster', 'Development leader']
    },
    {
      id: 5,
      title: 'OVAUnicor',
      acronimus: 'Banco de Objetos de Aprendizaje',
      description: 'Es una estrategia pedagógica y didáctica para apoyar los procesos educativos mediante el uso efectivo de las TIC, como elemento clave mediante el cual los docentes, estudiantes y directivos académicos pueden compartir, colaborar, cooperar  y generar recursos educativos digitales enriquecidos por enfoques y metodologías activas que promueven el aprendizaje autónomo y el desarrollo de procesos de pensamiento.',
      features: 'Recursos de aprendizaje, roles',
      imagesUrl: '/images/projects/ovaunicor/',
      cover: 'cover.png',
      images: [
        {name: 'ovaunicor1.png', description: 'Home page'},
        {name: 'ovaunicor2.png', description: 'List of resources by file type'},
        {name: 'ovaunicor3.png', description: 'List of most visited resources'},
        {name: 'ovaunicor4.png', description: 'List of authors'},
        {name: 'ovaunicor5.png', description: 'List of knowledge areas'},
        {name: 'ovaunicor6.png', description: 'Documentation metadata information'},
        {name: 'ovaunicor7.png', description: 'Stages for the production of resources'},
        {name: 'ovaunicor8.png', description: 'Search results'},
        {name: 'ovaunicor9.png', description: 'View of a resource'},
        {name: 'ovaunicor10.png', description: 'Dashboard user admin, users module'},
        {name: 'ovaunicor11.png', description: 'Teacher user dashboard'},
        {name: 'ovaunicor12.png', description: 'Update personal data'},
        {name: 'ovaunicor13.png', description: 'Section my resources'},
        {name: 'ovaunicor14.png', description: 'Option to upload resource'},
        {name: 'ovaunicor15.png', description: 'Another view of a resource'},
        {name: 'ovaunicor16.png', description: 'Second home page template'},
        {name: 'ovaunicor17.png', description: 'Dashboard registered user'},
        {name: 'ovaunicor18.png', description: 'Another home page template'},
        {name: 'ovaunicor19.png', description: 'Another template with green color of the home page'},
        {name: 'ovaunicor20.png', description: 'Another private dashboard design'},
        {name: 'ovaunicor21.png', description: 'Another private dashboard design with green color'},
      ],
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
      images: [
        {name: 'sigap1.png', description: 'Dashboard user admin'},
        {name: 'sigap2.png', description: 'Project evaluation'},
      ],
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