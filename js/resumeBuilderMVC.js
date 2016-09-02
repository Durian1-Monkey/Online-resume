let model = {
    /*biography*/
    init: function() {
        this.bio = {
            'name': 'Takahiro Morita',
            'role': 'Front-End Developer',
            'contacts': [{
                'mobile': '06-1840-3964',
                'email': 'morita657@gmail.com',
                'github': 'https://github.com/morita657',
                'LinkedIn': 'https://www.linkedin.com/in/takahiromorita',
                'location': 'Bangkok, Thailand'
            }],
            'welcomeMessage': 'Thank you for your visiting my resume page!!',
            'skills': ['HTML', 'CSS', 'JavaScript', 'jQuery'],
            'biopic': 'images/fry.jpg'
        };
        /*Work*/
        this.work = {
            'jobs': [{
                'employer': 'ARAYA INDUSTRY Co.,Ltd.',
                'title': 'Quality Control Engineer',
                'location': 'Osaka,Japan',
                'dates': '2013',
                'description': 'Tests the properties our products such as bicycle rim, pipes used to build architectures as floor materials. Makes documentations to show the results of the tests. Faces our customers to respond their orders.'
            }, {
                'employer': 'VSN, Inc',
                'title': 'Mechanical Designer',
                'location': 'Tokyo, Japan',
                'dates': '2014',
                'description': 'Works in our clients companies as mechanical designer. Designs products with CAD applications and tests the products to assure the quality.'
            }, {
                'employer': 'Leonka World Co.,LTD.',
                'title': 'Quality Control Asistant Manager',
                'location': 'Bangkok, Thailand',
                'dates': '2015',
                'description': 'Designs products as the designer. Tests the quality as the engineer. Manage our staffs and lead them. Customer relations for making products and negotiate those prices.'
            }, {
                'employer': 'CODIUM',
                'title': 'Software developer',
                'location': 'Bangkok, Thailand',
                'dates': '2016',
                'description': 'Design and build web application using various languages, especially HTML, CSS and Javascript(AngularJS). Coordinate between clients and local staffs.'
            }]
        };
        /*projects*/
        this.projects = {
            'projects': [{
                'title': 'Classic Arcade Game Clone',
                'dates': '2015',
                'description': 'Recreating the classic arcade game Frogger and adding a number of entities to the game including the player characters and enemies. Developing with Object-Oriented JavaScript and HTML5 Canvas.',
                'images': ['images/arcadegame.png']
            }, {
                'title': 'Neighborhoood Map',
                'dates': '2016',
                'description': 'The single-page application featuring a map of my neighborhood which I recommend and would like to visit. There are some functionalities, including: map markers to identify popular locations or places, a search functionto easily discover these locations, a listview to support simple browsing of all locations. And third-party API such as Wikipedia API is added to provide additional information about wach of these locations.',
                'images': ['images/neighborhoodmap.png']
            }, {
                'title': 'Mobile Portfolio',
                'dates': '2016',
                'description': 'Optimizing a provided website with a number of performance - related issues. Achieving a target PageSpeed score and runs at 60 frames per second. ',
                'images': ['images/websiteoptimization.png']
            }]
        };
        //education
        this.education = {
            'schools': [{
                'name': 'OIT',
                'location': 'Osaka, Japan',
                'degree': 'Bachelor',
                'majors': 'Mechanical Engineering',
                'dates': '2012',
                'url': 'OIT.com'
            }],
            'onlineCourses': [{
                'title': 'Intro to HTML and CSS',
                'school': 'Udacity',
                'date': '2015',
                'url': 'https://www.udacity.com/courses/intro-to-html-and-css--ud304'
            }, {
                'title': 'Resposnsive images',
                'school': 'Udacity',
                'date': '2015',
                'url': 'https://www.udacity.com/courses/responsive-images--ud882'
            }, {
                'title': 'Resposnsive Web Design Fundamentals',
                'school': 'Udacity',
                'date': '2015',
                'url': 'https://www.udacity.com/courses/responsive-web-design-fundamentals--ud893'
            }, {
                'title': 'Intro to jQuery',
                'school': 'Udacity',
                'date': '2015',
                'url': 'https://www.udacity.com/courses/intro-to-jquery--ud245'
            }, {
                'title': 'Object-Oriented JavaScript',
                'school': 'Udacity',
                'date': '2015',
                'url': 'https://www.udacity.com/courses/object-oriented-javascript--ud015'
            }, {
                'title': 'Intro to AJAX',
                'school': 'Udacity',
                'date': '2015',
                'url': 'https://www.udacity.com/courses/intro-to-ajax--ud110'
            }, {
                'title': 'Website Performance Optimization',
                'school': 'Udacity',
                'date': '2015',
                'url': 'https://www.udacity.com/courses/website-performance-optimization--ud884'
            }, {
                'title': 'Browser Rendering Optimization',
                'school': 'Udacity',
                'date': '2015',
                'url': 'https://www.udacity.com/courses/browser-rendering-optimization--ud860'
            }, {
                'title': 'JavaScript Testing',
                'school': 'Udacity',
                'date': '2015',
                'url': 'https://www.udacity.com/courses/javascript-testing--ud549'
            }]
        };
    }
};


let data = '%data%';
let $header = $('#header');

let view = {
    bio: function() {
        'use strict';
        let formattedName = HTMLheaderName.replace(data, model.bio["name"]);
        let formattedRole = HTMLheaderRole.replace(data, model.bio["role"]);
        $header.prepend(formattedRole);
        $header.prepend(formattedName);
        for (let ctcts in model.bio.contacts) {
            let formattedMobile = HTMLmobile.replace(data, model.bio.contacts[ctcts].mobile);
            let formattedemail = HTMLemail.replace(data, model.bio.contacts[ctcts].email);
            let formattedlinkedin = HTMLlinkedin.replace(data, model.bio.contacts[ctcts].LinkedIn);
            let formattedgithub = HTMLgithub.replace(data, model.bio.contacts[ctcts].github);
            let formattedlocation = HTMLlocation.replace(data, model.bio.contacts[ctcts].location);
            let formattedTotalBio = formattedMobile + formattedemail + formattedlinkedin + formattedgithub + formattedlocation;
            $('#topContacts').append(formattedTotalBio);
        }
        let welcomenessage = HTMLwelcomeMsg.replace(data, model.bio.welcomeMessage);
        $header.append(welcomenessage);
        let pictureURL = HTMLbioPic.replace(data, model.bio.biopic);
        $header.append(pictureURL);

        if (model.bio.skills.length > 0) {
            $header.append(HTMLskillsStart);
            let formattedSkill = HTMLskills.replace(data, model.bio.skills[0]);
            $('#skills').append(formattedSkill);
            formattedSkill = HTMLskills.replace(data, model.bio.skills[1]);
            $('#skills').append(formattedSkill);
            formattedSkill = HTMLskills.replace(data, model.bio.skills[2]);
            $('#skills').append(formattedSkill);
            formattedSkill = HTMLskills.replace(data, model.bio.skills[3]);
            $('#skills').append(formattedSkill);
        };

    },
    work: function() {
        // Display Work Experience
        for (let job in model.work.jobs) {
            $('#workExperience').append(HTMLworkStart);
            let formattedEmployer = HTMLworkEmployer.replace(data, model.work.jobs[job].employer);
            let formattedWorkTitle = HTMLworkTitle.replace(data, model.work.jobs[job].title);
            let formattedLocation = HTMLworkLocation.replace(data, model.work.jobs[job].location);
            let formattedWorkDates = HTMLworkDates.replace(data, model.work.jobs[job].dates);
            let formattedDescription = HTMLworkDescription.replace(data, model.work.jobs[job].description);
            let formattedEmployerTitle = formattedEmployer + formattedWorkTitle + formattedLocation + formattedWorkDates + formattedDescription;
            $('.work-entry:last').append(formattedEmployerTitle);
        };

    },
    project: function() {

        //Displays Projects
        for (let project in model.projects.projects) {
            $('#projects').append(HTMLprojectStart);
            let formattedprojectTitle = HTMLprojectTitle.replace(data, model.projects.projects[project].title);
            let formattedprojectDates = HTMLprojectDates.replace(data, model.projects.projects[project].dates);
            let formattedprojectDescript = HTMLprojectDescription.replace(data, model.projects.projects[project].description);
            let formattedprojectIMage = HTMLprojectImage.replace(data, model.projects.projects[project].images);
            let formattedProjects = formattedprojectTitle + formattedprojectDates + formattedprojectDescript + formattedprojectIMage;
            $('.project-entry:last').append(formattedProjects);
        };

    },

    education: function() {

        //Display Education
        for (let educations in model.education.schools) {
            $('#education').append(HTMLschoolStart);
            let formattedschool = HTMLschoolName.replace(data, model.education.schools[educations].name);
            let formattedDegree = HTMLschoolDegree.replace(data, model.education.schools[educations].degree);
            let formattedDates = HTMLschoolDates.replace(data, model.education.schools[educations].dates);
            let formattedschoolLocation = HTMLschoolLocation.replace(data, model.education.schools[educations].location);
            let formattedmajor = HTMLschoolMajor.replace(data, model.education.schools[educations].majors);
            let formattedUrl = HTMLschoolURL.replace(data, model.education.schools[educations].url);
            let formattededucation = formattedschool + formattedDegree + formattedDates + formattedschoolLocation + formattedmajor + formattedUrl;
            $('.education-entry:last').append(formattededucation);
        };
        //Display Online courses
        if (true) {
            $('.education-entry').append(HTMLonlineClasses);
            for (let course in model.education.onlineCourses) {
                let formattedOnlineTitle = HTMLonlineTitle.replace(data, model.education.onlineCourses[course].title);
                let formattedOnlineSchool = HTMLonlineSchool.replace(data, model.education.onlineCourses[course].school);
                let formattedOnlineDates = HTMLonlineDates.replace(data, model.education.onlineCourses[course].date);
                let formattedOnlineURL = HTMLonlineURL.replace(data, model.education.onlineCourses[course].url);
                let formattedOnlineEducation = formattedOnlineTitle + formattedOnlineSchool + formattedOnlineDates + formattedOnlineURL;
                $('.education-entry:last').append(formattedOnlineEducation);
            };
        }

    },

    footer: function() {
        /*Footer*/

        function inName() {
            let Name = name.split(' ');
            let newName1 = Name[0];
            let newName2 = Name[1].toUpperCase();
            let NewName = newName1 + ' ' + newName2;
            return NewName;
        }
    }
}


let oct = {
    init: function() {
        model.init();
        view.bio();
        view.work();
        view.project();
        view.education();
        view.footer();
    }
}

//I want to see a map!
$('#mapDiv').append(googleMap);
oct.init();
