const students = [
    {
        name: 'Aaron Short',
        imageUrl: 'https://avatars.githubusercontent.com/u/30273596?v=4',
    },
    {
        name: 'Aletheia Kim',
        imageUrl: 'https://avatars.githubusercontent.com/u/89177551?v=4',
    },
    {
        name: 'Andres Aguilar-Garcia',
        imageUrl: 'https://avatars.githubusercontent.com/u/81390005?v=4',
    },
    {
        name: 'Andrew Tran',
        imageUrl: 'https://avatars.githubusercontent.com/u/39511577?v=4',
    },
    {
        name: 'Anthony Adams',
        imageUrl: 'src/students/anthonyAdams.jpg',
    },
    {
        name: 'Asia Le',
        imageUrl: 'https://avatars.githubusercontent.com/u/89109803?v=4',
    },
    {
        name: 'Cameron Abbott',
        imageUrl:
            'https://media-exp1.licdn.com/dms/image/C4E03AQFlQ42WuopiSQ/profile-displayphoto-shrink_200_200/0/1571685959244?e=1652313600&v=beta&t=AorOw6oiNDJF-38StIWXjw8oDARp5B6nsJ2xqrmVgSs',
    },
    {
        name: 'Cameron Whiteside',
        imageUrl: 'https://avatars.githubusercontent.com/u/35665916?v=4',
    },
    // {
    //     name: 'Corbin Arcus',
    //     imageUrl: 'src/students/corbinArcus.jpg',
    // },
    {
        name: 'Christy Chen',
        imageUrl: 'https://avatars.githubusercontent.com/u/55429132?v=4',
    },
    {
        name: 'Cody Lavene',
        imageUrl: 'https://avatars.githubusercontent.com/u/85128425?v=4',
    },
    {
        name: 'Daniel Lavergne',
        imageUrl: 'https://avatars.githubusercontent.com/u/58845762?v=4',
    },
    {
        name: 'Denise Li',
        imageUrl: 'https://avatars.githubusercontent.com/u/86686513?v=4',
    },
    {
        name: 'Dominique Samuels',
        imageUrl: 'src/students/dominiqueSamuels.jpg',
    },
    {
        name: 'Dylan Silva',
        imageUrl: 'https://avatars.githubusercontent.com/u/83935429?v=4',
    },
    {
        name: 'Eddie Verdusco',
        imageUrl: '',
    },
    {
        name: 'Eric Cortez',
        imageUrl: 'https://avatars.githubusercontent.com/u/80999718?v=4',
    },
    {
        name: 'Fiona Choi',
        imageUrl: 'https://avatars.githubusercontent.com/u/87952279?v=4',
    },
    {
        name: 'Gabriel Aspuria',
        imageUrl: 'https://avatars.githubusercontent.com/u/87732225?v=4',
    },
    {
        name: 'Grant Russell',
        imageUrl: 'https://avatars.githubusercontent.com/u/87715410?v=4',
    },
    {
        name: 'Haozhen Shu',
        imageUrl:
            'https://media-exp1.licdn.com/dms/image/C5603AQHog3wTT3o2sg/profile-displayphoto-shrink_200_200/0/1610405340740?e=1652313600&v=beta&t=Ajr1r0TsI9HOIi9_hKenqIXGFplxrKFCn42MewnYoZQ',
    },
    {
        name: 'Jake Weber',
        imageUrl: 'https://avatars.githubusercontent.com/u/85136034?v=4',
    },
    {
        name: 'Jedd Basden',
        imageUrl: 'https://avatars.githubusercontent.com/u/74204664?v=4',
    },
    {
        name: 'Jennifer Dijaili',
        imageUrl: 'https://avatars.githubusercontent.com/u/85316372?v=4',
    },
    {
        name: 'Jesse Brooks',
        imageUrl: 'https://avatars.githubusercontent.com/u/61536705?v=4',
    },
    {
        name: 'Karandeep Singh',
        imageUrl: 'https://avatars.githubusercontent.com/u/90893496?v=4',
    },
    {
        name: 'Ken Dodson-Knapp',
        imageUrl: 'https://avatars.githubusercontent.com/u/85452797?v=4',
    },
    {
        name: 'Kielvin Bariso',
        imageUrl: 'https://avatars.githubusercontent.com/u/86331220?v=4',
    },
    {
        name: 'Kreston Caldwell-Mcmurrin',
        imageUrl: 'https://avatars.githubusercontent.com/u/48869138?v=4',
    },
    {
        name: 'Matt Satterwhite',
        imageUrl: 'https://avatars.githubusercontent.com/u/85750283?v=4',
    },
    {
        name: 'Maxim Grigg',
        imageUrl: 'https://avatars.githubusercontent.com/u/38057287?v=4',
    },
    {
        name: 'Megan Mckenna',
        imageUrl: 'https://avatars.githubusercontent.com/u/81714737?v=4',
    },
    {
        name: 'Mei Shih',
        imageUrl: 'https://avatars.githubusercontent.com/u/86375959?v=4',
    },
    {
        name: 'Minu Kim',
        imageUrl: 'https://avatars.githubusercontent.com/u/88391760?v=4',
    },
    {
        name: 'Nate Treadaway',
        imageUrl:
            'https://media-exp1.licdn.com/dms/image/C5603AQEDk4n8UDT1-A/profile-displayphoto-shrink_200_200/0/1527615408336?e=1652313600&v=beta&t=RbsqDazpFhEKM7YQ2g9IE4ON4lLAMszc0elQrHpSNVo',
    },
    {
        name: 'Nathaniel Tseng',
        imageUrl: 'https://avatars.githubusercontent.com/u/6503151?v=4',
    },
    {
        name: 'Nik Tyler',
        imageUrl: 'https://avatars.githubusercontent.com/u/86486046?v=4',
    },
    {
        name: 'Peter Shin',
        imageUrl:
            'https://media-exp1.licdn.com/dms/image/C5603AQHRpB-i4WQugQ/profile-displayphoto-shrink_200_200/0/1642537708219?e=1652313600&v=beta&t=3zu0I05fZUh2gzmtmg-sSRfBLEJ4qjORRbwlrN6MMlE',
    },
    {
        name: 'Robert Popphan',
        imageUrl: 'src/students/robertPopphan.png',
    },
    {
        name: 'Ryan Bender',
        imageUrl:
            'https://media-exp1.licdn.com/dms/image/C5603AQHIGsTmwFfi0Q/profile-displayphoto-shrink_200_200/0/1544051265782?e=1652313600&v=beta&t=xCwvTsntYd64rcKKOluEEjH4NSK2D_Na8XJHB-8dYwo',
    },
    {
        name: 'Savanah Trewman',
        imageUrl: 'https://avatars.githubusercontent.com/u/88953247?v=4',
    },
    {
        name: 'Seth Corbett',
        imageUrl: 'src/students/sethCorbett.jpg',
    },
    {
        name: 'Sophia Bui',
        imageUrl: 'https://avatars.githubusercontent.com/u/90008924?v=4',
    },
    {
        name: 'Sornam Vairavan',
        imageUrl: 'https://avatars.githubusercontent.com/u/80495013?v=4',
    },
    {
        name: 'Steve Correa',
        imageUrl: 'https://avatars.githubusercontent.com/u/46228676?v=4',
    },
    {
        name: 'Suhayl Khan',
        imageUrl: 'https://avatars.githubusercontent.com/u/90187183?v=4',
    },
    {
        name: 'Tanner Shaw',
        imageUrl: 'https://avatars.githubusercontent.com/u/88640606?v=4',
    },
    {
        name: 'Thien Dang',
        imageUrl: 'https://avatars.githubusercontent.com/u/42271625?v=4',
    },
    {
        name: 'Vivian Thach',
        imageUrl: 'https://avatars.githubusercontent.com/u/12629902?v=4',
    },
    {
        name: 'Vladimir Radovanovic',
        imageUrl: 'https://avatars.githubusercontent.com/u/88914047?v=4',
    },
    {
        name: 'Will Duffy',
        imageUrl: 'https://avatars.githubusercontent.com/u/82291955?v=4',
    },
    {
        name: 'Yu Ra Kim',
        imageUrl: 'https://avatars.githubusercontent.com/u/89601983?v=4',
    },
    {
        name: 'Zhen Yu',
        imageUrl: 'https://avatars.githubusercontent.com/u/90713907?v=4',
    },
    // {
    //     name: '',
    //     imageUrl: '',
    // },
]

export default students
