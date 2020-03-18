const accessoriesLightsData = [
    {
        id: 1,
        title: 'Light 1',
        imgSrc: 'assets/images/accessories/lights/1.jpg',
        description: "Content 1"
    },
    {
        id: 2,
        title: 'Light 2',
        imgSrc: 'assets/images/accessories/lights/2.jpg',
        description: 'Content 2'
    },
    {
        id: 3,
        title: 'Light 3',
        imgSrc: 'assets/images/accessories/lights/3.jpg',
        description: 'Content 3'
    },
    {
        id: 4,
        title: 'Light 4',
        imgSrc: 'assets/images/accessories/lights/4.jpg',
        description: 'Content 4'
    },
    {
        id: 5,
        title: 'Light 5',
        imgSrc: 'assets/images/accessories/lights/5.jpg',
        description: 'Content 5'
    },
    {
        id: 6,
        title: 'Light 6',
        imgSrc: 'assets/images/accessories/lights/6.jpg',
        description: '6'
    },
    {
        id: 7,
        title: 'Light 7',
        imgSrc: 'assets/images/accessories/lights/7.jpg',
        description: 'Content 7'
    },
    {
        id: 8,
        title: 'Light 8',
        imgSrc: 'assets/images/accessories/lights/8.jpg',
        description: 'Content 7'
    }
];

const accessoriesWheelData = [
    {
        id: 1,
        title: 'Wheel Title 1',
        imgSrc: 'assets/images/accessories/wheel/1.jpg',
        description: "Content 1"
    },
    {
        id: 2,
        title: 'Wheel Title 2',
        imgSrc: 'assets/images/accessories/wheel/2.jpg',
        description: 'Content 2'
    },
    {
        id: 3,
        title: 'Wheel Title 3',
        imgSrc: 'assets/images/accessories/wheel/3.jpg',
        description: 'Content 3'
    },
    {
        id: 4,
        title: 'Wheel Title 4',
        imgSrc: 'assets/images/accessories/wheel/4.jpg',
        description: 'Content 4'
    },
    {
        id: 5,
        title: 'Wheel Title 5',
        imgSrc: 'assets/images/accessories/wheel/5.jpg',
        description: 'Content 5'
    },
    {
        id: 6,
        title: 'Wheel Title 6',
        imgSrc: 'assets/images/accessories/wheel/6.jpg',
        description: 'Content 6'
    }
];

const accessoriesSeatData = [
    {
        id: 1,
        title: 'Seat Title 1',
        imgSrc: 'assets/images/accessories/seat/1.jpg',
        description: "Content 1"
    },
    {
        id: 2,
        title: 'Seat Title 2',
        imgSrc: 'assets/images/accessories/seat/2.jpg',
        description: 'Content 2'
    },
    {
        id: 3,
        title: 'Seat Title 3',
        imgSrc: 'assets/images/accessories/seat/3.jpg',
        description: 'Content 3'
    },
    {
        id: 4,
        title: 'Seat Title 4',
        imgSrc: 'assets/images/accessories/seat/4.jpg',
        description: 'Content 4'
    },
    {
        id: 5,
        title: 'Seat Title 5',
        imgSrc: 'assets/images/accessories/seat/5.jpg',
        description: 'Content 5'
    },
    {
        id: 6,
        title: 'Seat Title 6',
        imgSrc: 'assets/images/accessories/lights/6.jpg',
        description: 'Content 6'
    }
];

const accessoriesSteeringWheelData = [
    {
        id: 1,
        title: 'SteeringWheel Title 1',
        imgSrc: 'assets/images/accessories/steering_wheel/1.jpg',
        description: "Content 1"
    },
    {
        id: 2,
        title: 'SteeringWheel Title 2',
        imgSrc: 'assets/images/accessories/steering_wheel/2.jpg',
        description: 'Content 2'
    },
    {
        id: 3,
        title: 'SteeringWheel Title 3',
        imgSrc: 'assets/images/accessories/steering_wheel/3.jpg',
        description: 'Content 3'
    },
    {
        id: 4,
        title: 'SteeringWheel Title 4',
        imgSrc: 'assets/images/accessories/steering_wheel/4.jpg',
        description: 'Content 4'
    },
    {
        id: 5,
        title: 'SteeringWheel Title 5',
        imgSrc: 'assets/images/accessories/steering_wheel/5.jpg',
        description: 'Content 5'
    },
    {
        id: 6,
        title: 'SteeringWheel Title 6',
        imgSrc: 'assets/images/accessories/steering_wheel/6.jpg',
        description: 'Content 6'
    }
];
$('.accessoriesdetail-lights .accessoriesdetail-slide').on('click', '.item', function (event) {
    const accessoriesId = $(this).data("id");
    const accessoriesTitleEl = $('#accessoriesTitle');
    const accessoriesDescriptionEl = $('#accessoriesDescription');
    const accessoriesImageSrcEl = $('#accessoriesImageSrc');
    const accessoriesActive = accessoriesLightsData.find(item => item.id == accessoriesId);
    // console.log(accessoriesData.find(item => item.id == accessoriesId));
    accessoriesTitleEl.html(accessoriesActive.title);
    accessoriesDescriptionEl.html(accessoriesActive.description);
    accessoriesImageSrcEl.attr('src', accessoriesActive.imgSrc);
})

$('.accessoriesdetail-wheel .accessoriesdetail-slide').on('click', '.item', function (event) {
    const accessoriesId = $(this).data("id");
    const accessoriesTitleEl = $('#accessoriesTitle');
    const accessoriesDescriptionEl = $('#accessoriesDescription');
    const accessoriesImageSrcEl = $('#accessoriesImageSrc');
    const accessoriesActive = accessoriesWheelData.find(item => item.id == accessoriesId);
    // console.log(accessoriesData.find(item => item.id == accessoriesId));
    accessoriesTitleEl.html(accessoriesActive.title);
    accessoriesDescriptionEl.html(accessoriesActive.description);
    accessoriesImageSrcEl.attr('src', accessoriesActive.imgSrc);
})

$('.accessoriesdetail-seat .accessoriesdetail-slide').on('click', '.item', function (event) {
    const accessoriesId = $(this).data("id");
    const accessoriesTitleEl = $('#accessoriesTitle');
    const accessoriesDescriptionEl = $('#accessoriesDescription');
    const accessoriesImageSrcEl = $('#accessoriesImageSrc');
    const accessoriesActive = accessoriesSeatData.find(item => item.id == accessoriesId);
    // console.log(accessoriesData.find(item => item.id == accessoriesId));
    accessoriesTitleEl.html(accessoriesActive.title);
    accessoriesDescriptionEl.html(accessoriesActive.description);
    accessoriesImageSrcEl.attr('src', accessoriesActive.imgSrc);
})

$('.accessoriesdetail-steeringwheel .accessoriesdetail-slide').on('click', '.item', function (event) {
    const accessoriesId = $(this).data("id");
    const accessoriesTitleEl = $('#accessoriesTitle');
    const accessoriesDescriptionEl = $('#accessoriesDescription');
    const accessoriesImageSrcEl = $('#accessoriesImageSrc');
    const accessoriesActive = accessoriesSteeringWheelData.find(item => item.id == accessoriesId);
    // console.log(accessoriesData.find(item => item.id == accessoriesId));
    accessoriesTitleEl.html(accessoriesActive.title);
    accessoriesDescriptionEl.html(accessoriesActive.description);
    accessoriesImageSrcEl.attr('src', accessoriesActive.imgSrc);
})