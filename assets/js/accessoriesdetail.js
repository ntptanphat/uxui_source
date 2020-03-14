const accessoriesData = [
    {
        id: 1,
        title: 'RTX, Steel Rim',
        imgSrc: 'assets/images/accessories/accessories_item_1.jpg',
        description: "PLEASE READ ENTIRE LISTING - Rim / Wheel size: 16X6.5 Bolt Pattern: 5X114.3 Center Bore: 71.5"
    },
    {
        id: 2,
        title: 'American Racing AR172',
        imgSrc: 'assets/images/accessories/accessories_item_2.jpg',
        description: 'Original Equipment (OE) Number: 88974912, 4261101180, 4261101181, 4261102A00, 4261112B80'
    },
    {
        id: 3,
        title: 'Dorman 939-174',
        imgSrc: 'assets/images/accessories/accessories_item_3.jpg',
        description: 'Direct fit replacement to ensure proper wheel cover fit <br/>Rigorous inspection has been undertaken to ensure high quality'
    },
    {
        id: 4,
        title: 'Road Ready Car',
        imgSrc: 'assets/images/accessories/accessories_item_4.jpg',
        description: 'PRECISION MADE PRICED RIGHT - Road Ready focuses on specific manufacturer design for a perfect car rim replacement. ✓ Purchasing one (1) new steel wheel ✓ That Fits : 2009 2010'
    },
    {
        id: 5,
        title: 'Konig Illusion Black',
        imgSrc: 'assets/images/accessories/accessories_item_5.jpg',
        description: 'Fully compatible with original wheel covers and all TPMS sensors'
    },
    {
        id: 6,
        title: 'RDR Wheels CBRD1',
        imgSrc: 'assets/images/accessories/accessories_item_6.jpg',
        description: 'FITS ALL RIM REPLACEMENT NEEDS - Road Ready OEM replacement wheels are perfect for single wheel replacements, full set swaps, or spare rim needs. Designed to stash conveniently in your trunk for times when you lose a rim while out on the road. *Note: This purchase DOES NOT include TPMS sensors, lug nuts, valve stems, or wheel covers.'
    }
]
$('.accessoriesdetail-slide').on('click', '.item', function (event) {
    const accessoriesId = $(this).data("id");
    const accessoriesTitleEl = $('#accessoriesTitle');
    const accessoriesDescriptionEl = $('#accessoriesDescription');
    const accessoriesImageSrcEl = $('#accessoriesImageSrc');
    const accessoriesActive = accessoriesData.find(item => item.id == accessoriesId);
    // console.log(accessoriesData.find(item => item.id == accessoriesId));
    accessoriesTitleEl.html(accessoriesActive.title);
    accessoriesDescriptionEl.html(accessoriesActive.description);
    accessoriesImageSrcEl.attr('src', accessoriesActive.imgSrc);
})