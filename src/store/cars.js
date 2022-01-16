const cars = {
  model: [{
    name: 'PRO RS3',
    price: 300,

    engine: [{
      name: '5.2L 532BHP',

      price: 100,
      gearbox: [{
        type: 'Automatic',

        price: 60,
      }],
    },
    {
      name: '4.2L 443BHP',

      price: 70,
      gearbox: [{
        type: 'Manual',

        price: 30,
      },
      {
        type: 'Automatic',

        price: 60,
      },
      ],
    },
    {
      name: '3.6L 374BHP',

      price: 50,
      gearbox: [{
        type: 'Manual',

        price: 30,
      },
      {
        type: 'Automatic',

        price: 60,
      },
      ],
    },
    {
      name: '2.0L 166BHP',

      price: 20,
      gearbox: [{
        type: 'Manual',

        price: 30,
      }],
    },
    ],
  },
  {
    name: 'UBER RS3',
    price: 200,

    engine: [{
      name: '5.2L 532BHP',

      price: 100,
      gearbox: [{
        type: 'Automatic',

        price: 60,
      }],
    },
    {
      name: '4.2L 443BHP',

      price: 70,
      gearbox: [{
        type: 'Manual',

        price: 30,
      },
      {
        type: 'Automatic',

        price: 60,
      },
      ],
    },
    {
      name: '3.6L 374BHP',

      price: 50,
      gearbox: [{
        type: 'Manual',

        price: 30,
      },
      {
        type: 'Automatic',

        price: 60,
      },
      ],
    },
    ],
  },
  {
    name: 'STANDARD',
    price: 100,

    engine: [{
      name: '3.6L 374BHP',

      price: 50,
      gearbox: [{
        type: 'Manual',

        price: 30,
      },
      {
        type: 'Automatic',

        price: 60,
      },
      ],
    },
    {
      name: '2.0L 166BHP',

      price: 20,
      gearbox: [{
        type: 'Manual',

        price: 30,
      }],
    },
    ],
  },
  {
    name: 'WK',
    price: 50,

    engine: [{
      name: '2.0L 166BHP',

      price: 20,
      gearbox: [{
        type: 'Manual',

        price: 30,
      }],
    }],
  },
  ],
  colors: [{
    name: 'Blue',
    hexVal: '#1e11d9',
  },
  {
    name: 'Red',
    hexVal: '#f50b0b',
  },
  {
    name: 'White',
    hexVal: '#ffffff',
  },
  {
    name: 'Black',
    hexVal: '#000000',
  },
  ],
};

export default cars;
