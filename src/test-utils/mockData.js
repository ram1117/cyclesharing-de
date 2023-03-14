export const citiesData = {
  networks: [
    {
      company: "StadtRAD Hamburg'",
      href: '/v2/networks/stadtrad-hamburg',
      location: {
        latitude: 53.57532,
        city: 'Hamburg',
        longitude: 10.01534,
        country: 'DE',
      },
      name: 'Transparenzportal Hamburg',
      id: 'stadtrad-hamburg',
    },
    {
      href: '/v2/networks/kvb-rad-koln',
      id: 'kvb-rad-koln',
      location: {
        city: 'Köln',
        country: 'DE',
        latitude: 50.9429,
        longitude: 6.95649,
      },
      name: 'KVB Rad',
    },
    {
      href: '/v2/networks/facherrad-karlsruhe',
      id: 'facherrad-karlsruhe',
      location: {
        city: 'Karlsruhe',
        country: 'DE',
        latitude: 49.0102,
        longitude: 8.41827,
      },
      name: 'Fächerrad',
    },
  ],
};

export const detailsData = {
  network: {
    name: "StadtRAD Hamburg'",
    location: {
      city: 'Hamburg',
      country: 'DE',
    },
    company: ['Transparenzportal Hamburg'],
    stations: [
      {
        empty_slots: 5,
        free_bikes: 2,
        name: 'U Gänsemarkt / Caffamacherreihe',
        latitude: 53.55608999998187,
        longitude: 9.984339999999634,
        id: 'b2f5f69e3edeaf694c04079d66f58189',
      },
      {
        empty_slots: 5,
        free_bikes: 2,
        name: 'Jakobikirchhhof / Steinstraße',
        latitude: 53.55029999998187,
        longitude: 10.001499999999632,
        id: 'd18b6c07f7048e554ee4a8feb6aa496d',
      },
    ],
  },
};
