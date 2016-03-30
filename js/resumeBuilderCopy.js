/*
This is empty on purpose! Your code to build the resume will go here.
 */
var model = {
    /*biography*/
    init: function() {
        this.bio = {
            'name': 'Durian Monkey',
            'role': 'Front-End Developer',
            'contacts': [{
                'mobile': 'XXX-XXXX-XXX',
                'email': 'Durian@durian.com',
                'github': 'https://github.com/Durian-Monkey',
                'twitter': 'Durian@twitter.com',
                'location': 'Bangkok, Thailand'
            }],
            'welcomeMessage': 'Thank you for your visiting my page!!  Eat durian together!!',
            'skills': ['Peeling durian hull', 'Planting durian trees', 'Making cold durian snacks', 'Samurai Spirits'],
            'biopic': 'images/fry.jpg'
        };
        /*Work*/
        this.work = {
            'jobs': [{
                'employer': 'Gorilla INDUSTRY Co.,Ltd.',
                'title': 'Quality Control Engineer',
                'location': 'Osaka,Japan',
                'dates': '2013',
                'description': 'tests the properties our products such as bicycle rim, pipes used to build architectures as floor materials. Makes documentations to show the results of the tests. Faces our customers to respond their orders.'
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
            }]
        };
        /*projects*/
        this.projects = {
            'projects': [{
                'title': 'Check products',
                'dates': '2013',
                'description': 'Check the products which is used to build the architectures to transport in our clients with instruments such as a caliper,vernier caliper,micro meter',
                'images': ['images/197x148.gif']
            }, {
                'title': 'Designing and tasting new type of durians',
                'dates': '2014',
                'description': 'designing products which is used as the parts of an automobile by CAD software, and test and investigate the properties such as durability, extensibility, waveform of vibration',
                'images': ['images/197x148.gif']
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
                'url': 'https://www.udacity.comhttps://www.udacity.com'
            }, {
                'title': 'Resposnsive images',
                'school': 'Udacity',
                'date': '2015',
                'url': 'https://www.udacity.com'
            }, {
                'title': 'Resposnsive Web Design Fundamentals',
                'school': 'Udacity',
                'date': '2015',
                'url': 'https://www.udacity.com'
            }, {
                'title': 'JavaScript Basics',
                'school': 'Udacity',
                'date': '2015',
                'url': 'https://www.udacity.com'
            }, {
                'title': 'Intro to jQuery',
                'school': 'Udacity',
                'date': '2015',
                'url': 'https://www.udacity.com'
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
            var formattedtwitter = HTMLtwitter.replace(data, model.bio.contacts[ctcts].twitter);
            var formattedgithub = HTMLgithub.replace(data, model.bio.contacts[ctcts].github);
            var formattedlocation = HTMLlocation.replace(data, model.bio.contacts[ctcts].location);
            var formattedTotalBio = formattedMobile + formattedemail + formattedtwitter + formattedgithub + formattedlocation;
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
        $('#main').append(internationalizeButton);

        function inName() {
            var Name = name.split(' ');
            var newName1 = Name[0];
            var newName2 = Name[1].toUpperCase();
            var NewName = newName1 + ' ' + newName2;
            return NewName;
        }
    },
    music: function() {

        //music volume
        window.onload = function() {
            var vid = document.getElementById('audioPlay');
            vid.volume = 0.4;
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
        view.music();
    }
}

//you want to see a map?
$('#mapDiv').append(googleMap);
oct.init();