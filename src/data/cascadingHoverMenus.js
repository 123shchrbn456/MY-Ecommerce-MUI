export const cascadingHoverMenusData = [
    // SMARTPHONES
    {
        linkCategory: "smartphones",
        categoryTitle: "Smartphones",
        popupId: "demoMenuSmartphones",
        submenuOptions: [
            {
                cascadingId: "moreChoicesCascadingMenu",
                title: "Apple",
                titleLink: `/devices?category=smartphones&brand=Apple&_page=1`,
                series: [
                    {
                        seriesTitle: "15 Pro Series",
                        seriesLink: `/devices?category=smartphones&brand=Apple&series=iPhone%2015%20Pro%20Max&_page=1`,
                    },
                    { seriesTitle: "14 Series", seriesLink: `/devices?category=smartphones&brand=Apple&series=iPhone+14&_page=1` },
                    { seriesTitle: "13 Series", seriesLink: `/devices?category=smartphones&brand=Apple&series=iPhone+13&_page=1` },
                ],
            },
            {
                cascadingId: "moreChoicesCascadingMenu2",
                title: "Samsung",
                titleLink: `/devices?category=smartphones&brand=Samsung&_page=1`,
                series: [
                    {
                        seriesTitle: "Galaxy A55",
                        seriesLink: `/devices?category=smartphones&_page=1&brand=Samsung&series=Galaxy+A55`,
                    },
                    {
                        seriesTitle: "Galaxy S23",
                        seriesLink: `/devices?category=smartphones&_page=1&brand=Samsung&series=Galaxy+S23`,
                    },
                    {
                        seriesTitle: "Galaxy S24",
                        seriesLink: `/devices?category=smartphones&_page=1&brand=Samsung&series=Galaxy+S24`,
                    },
                    {
                        seriesTitle: "Galaxy S24 Ultra",
                        seriesLink: `/devices?category=smartphones&_page=1&brand=Samsung&series=Galaxy+S24+Ultra`,
                    },
                ],
            },
        ],
    },

    // TABLETS
    {
        linkCategory: "tablets",
        categoryTitle: "Tablets",
        popupId: "demoMenuTablets",
        submenuOptions: [
            {
                cascadingId: "moreChoicesCascadingMenu",
                title: "Apple",
                titleLink: `/devices?category=tablets&brand=Apple&_page=1`,
                series: [
                    { seriesTitle: "iPad Air", seriesLink: `/devices?category=tablets&_page=1&brand=Apple&series=iPad+Air` },
                    { seriesTitle: "iPad Pro 11", seriesLink: `/devices?category=tablets&_page=1&brand=Apple&series=iPad+Pro+11` },
                    { seriesTitle: "iPad Pro 12.9", seriesLink: `/devices?category=tablets&_page=1&brand=Apple&series=iPad+Pro+12.9` },
                ],
            },
            {
                cascadingId: "moreChoicesCascadingMenu2",
                title: "Samsung",
                titleLink: `/devices?category=tablets&brand=Samsung&_page=1`,
                series: [
                    {
                        seriesTitle: "Galaxy Tab S6 Lite",
                        seriesLink: `/devices?category=tablets&_page=1&brand=Samsung&series=Galaxy+Tab+S6+Lite`,
                    },
                    {
                        seriesTitle: "Galaxy Tab S9 FE",
                        seriesLink: `/devices?category=tablets&_page=1&brand=Samsung&series=Galaxy+Tab+S9+FE`,
                    },
                ],
            },
            {
                cascadingId: "moreChoicesCascadingMenu3",
                title: "Xiaomi",
                titleLink: `/devices?category=tablets&brand=Xiaomi&_page=1`,
                series: [{ seriesTitle: "Pad 6 S Pro", seriesLink: `/devices?category=tablets&_page=1&brand=Xiaomi&series=+Pad+6S+Pro` }],
            },
        ],
    },
    // LAPTOPS
    {
        linkCategory: "laptops",
        categoryTitle: "Laptops",
        popupId: "demoMenuLaptops",
        submenuOptions: [
            {
                cascadingId: "moreChoicesCascadingMenu",
                title: "Apple",
                titleLink: `/devices?category=laptops&brand=Apple&_page=1`,
                series: [
                    { seriesTitle: "MacBook Air", seriesLink: `/devices?category=laptops&_page=1&brand=Apple&series=MacBook+Air` },
                    { seriesTitle: "MacBook Pro 16", seriesLink: `/devices?category=laptops&_page=1&brand=Apple&series=MacBook+Pro+16` },
                ],
            },
            {
                cascadingId: "moreChoicesCascadingMenu2",
                title: "Asus",
                titleLink: `/devices?category=laptops&brand=Asus&_page=1`,
                series: [
                    {
                        seriesTitle: "Vivobook",
                        seriesLink: `/devices?category=laptops&_page=1&brand=Asus&series=Vivobook`,
                    },
                    {
                        seriesTitle: "Zenbook",
                        seriesLink: `/devices?category=laptops&_page=1&brand=Asus&series=Zenbook`,
                    },
                ],
            },
        ],
    },
];
