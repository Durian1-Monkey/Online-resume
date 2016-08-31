/*
This is empty on purpose! Your code to build the resume will go here.
 */
var model = {
    /*biography*/
    init: function() {
        this.bio = {
            'name': 'Takahiro Morita',
            'role': 'Front-End Developer',
            'contacts': [{
                'mobile': '06-1840-3964',
                'email': 'morita657@gmail.com',
                'github': 'https://github.com/Durian1-Monkey',
                'LinkedIn': 'https://www.linkedin.com/in/takahiromorita',
                'location': 'Bangkok, Thailand'
            }],
            'welcomeMessage': 'Thank you for your visiting my resume page!!',
            'skills': ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Git & GitHub', 'KnockoutJS', ''],
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


var data = '%data%';
var $header = $('#header');

var view = {
    bio: function() {
        'use strict';
        var formattedName = HTMLheaderName.replace(data, model.bio["name"]);
        var formattedRole = HTMLheaderRole.replace(data, model.bio["role"]);
        $header.prepend(formattedRole);
        $header.prepend(formattedName);
        for (var ctcts in model.bio.contacts) {
            var formattedMobile = HTMLmobile.replace(data, model.bio.contacts[ctcts].mobile);
            var formattedemail = HTMLemail.replace(data, model.bio.contacts[ctcts].email);
            var formattedlinkedin = HTMLlinkedin.replace(data, model.bio.contacts[ctcts].LinkedIn);
            var formattedgithub = HTMLgithub.replace(data, model.bio.contacts[ctcts].github);
            var formattedlocation = HTMLlocation.replace(data, model.bio.contacts[ctcts].location);
            var formattedTotalBio = formattedMobile + formattedemail + formattedlinkedin + formattedgithub + formattedlocation;
            $('#topContacts').append(formattedTotalBio);
        }
        var welcomenessage = HTMLwelcomeMsg.replace(data, model.bio.welcomeMessage);
        $header.append(welcomenessage);
        var pictureURL = HTMLbioPic.replace(data, model.bio.biopic);
        $header.append(pictureURL);

        if (model.bio.skills.length > 0) {
            $header.append(HTMLskillsStart);
            var formattedSkill = HTMLskills.replace(data, model.bio.skills[0]);
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
        for (var job in model.work.jobs) {
            $('#workExperience').append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace(data, model.work.jobs[job].employer);
            var formattedWorkTitle = HTMLworkTitle.replace(data, model.work.jobs[job].title);
            var formattedLocation = HTMLworkLocation.replace(data, model.work.jobs[job].location);
            var formattedWorkDates = HTMLworkDates.replace(data, model.work.jobs[job].dates);
            var formattedDescription = HTMLworkDescription.replace(data, model.work.jobs[job].description);
            var formattedEmployerTitle = formattedEmployer + formattedWorkTitle + formattedLocation + formattedWorkDates + formattedDescription;
            $('.work-entry:last').append(formattedEmployerTitle);
        };

    },
    project: function() {

        //Displays Projects
        for (var project in model.projects.projects) {
            $('#projects').append(HTMLprojectStart);
            var formattedprojectTitle = HTMLprojectTitle.replace(data, model.projects.projects[project].title);
            var formattedprojectDates = HTMLprojectDates.replace(data, model.projects.projects[project].dates);
            var formattedprojectDescript = HTMLprojectDescription.replace(data, model.projects.projects[project].description);
            var formattedprojectIMage = HTMLprojectImage.replace(data, model.projects.projects[project].images);
            var formattedProjects = formattedprojectTitle + formattedprojectDates + formattedprojectDescript + formattedprojectIMage;
            $('.project-entry:last').append(formattedProjects);
        };

    },

    education: function() {

        //Display Education
        for (var educations in model.education.schools) {
            $('#education').append(HTMLschoolStart);
            var formattedschool = HTMLschoolName.replace(data, model.education.schools[educations].name);
            var formattedDegree = HTMLschoolDegree.replace(data, model.education.schools[educations].degree);
            var formattedDates = HTMLschoolDates.replace(data, model.education.schools[educations].dates);
            var formattedschoolLocation = HTMLschoolLocation.replace(data, model.education.schools[educations].location);
            var formattedmajor = HTMLschoolMajor.replace(data, model.education.schools[educations].majors);
            var formattedUrl = HTMLschoolURL.replace(data, model.education.schools[educations].url);
            var formattededucation = formattedschool + formattedDegree + formattedDates + formattedschoolLocation + formattedmajor + formattedUrl;
            $('.education-entry:last').append(formattededucation);
        };
        //Display Online courses
        if (true) {
            $('.education-entry').append(HTMLonlineClasses);
            for (var course in model.education.onlineCourses) {
                var formattedOnlineTitle = HTMLonlineTitle.replace(data, model.education.onlineCourses[course].title);
                var formattedOnlineSchool = HTMLonlineSchool.replace(data, model.education.onlineCourses[course].school);
                var formattedOnlineDates = HTMLonlineDates.replace(data, model.education.onlineCourses[course].date);
                var formattedOnlineURL = HTMLonlineURL.replace(data, model.education.onlineCourses[course].url);
                var formattedOnlineEducation = formattedOnlineTitle + formattedOnlineSchool + formattedOnlineDates + formattedOnlineURL;
                $('.education-entry:last').append(formattedOnlineEducation);
            };
        }

    },

    footer: function() {
        /*Footer*/

        function inName() {
            var Name = name.split(' ');
            var newName1 = Name[0];
            var newName2 = Name[1].toUpperCase();
            var NewName = newName1 + ' ' + newName2;
            return NewName;
        }
    }
}


var oct = {
    init: function() {
        model.init();
        view.bio();
        view.work();
        view.project();
        view.education();
        view.footer();
    }
}

//you want to see a map?
$('#mapDiv').append(googleMap);
oct.init();
