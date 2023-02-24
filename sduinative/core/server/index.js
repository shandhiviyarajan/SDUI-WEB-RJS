

const section_blocks = [
  {
    _id: "000000",
    name: "section_blocks",
    component: "Grid",
    props: {
      container: true,
      spacing: 3,
    },
    styles: [
      {
        name: "paddingTop",
        value: 4,
      },
    ],
    children: [
      {
        _id: "0000001",
        component: "GridItem",
        props: {
          lg: 3,
          md: 6,
          sm: 6,
          xs: 6,
        },
        children: [
          {
            _id: "35346",
            component: "Box",
            styles: [
              {
                name: "boxShadow",
                value: "0px 10px 15px rgb(0 0 0 / 3%)",
              },
              {
                name: "padding",
                value: 3,
              },
              {
                name: "borderRadius",
                value: 0,
              },
              {
                name: "backgroundColor",
                value: "#FFFFFF",
              },
            ],
            children: [
              {
                _id: "9879",
                component: "Text",
                children: "Transfer via card number",
                styles: [
                  {
                    name: "maxWidth",
                    value: 130,
                  },
                ],
              },
              {
                _id: "43124",
                component: "Title",
                props: {
                  variant: "h5",
                },
                styles: [
                  {
                    name: "fontWeight",
                    value: "bold",
                  },
                ],
                children: "$1200",
              },
            ],
          },
        ],
      },
      {
        _id: "0000001",
        component: "GridItem",
        props: {
          lg: 3,
          md: 6,
          sm: 6,
          xs: 6,
        },
        children: [
          {
            _id: "35346",
            component: "Box",
            styles: [
              {
                name: "boxShadow",
                value: "0px 10px 15px rgb(0 0 0 / 3%)",
              },
              {
                name: "padding",
                value: 3,
              },
              {
                name: "borderRadius",
                value: 5,
              },
              {
                name: "backgroundColor",
                value: "#FFFFFF",
              },
            ],
            children: [
              {
                _id: "9879",
                component: "Text",
                children: "Transfer other banks",
                styles: [
                  {
                    name: "maxWidth",
                    value: 130,
                  },
                ],
              },
              {
                _id: "43124",
                component: "Title",
                props: {
                  variant: "h5",
                },
                styles: [
                  {
                    name: "fontWeight",
                    value: "bold",
                  },
                ],
                children: "$100",
              },
            ],
          },
        ],
      },
      {
        _id: "0000001",
        component: "GridItem",
        props: {
          lg: 3,
          md: 6,
          sm: 6,
          xs: 6,
        },
        children: [
          {
            _id: "35346",
            component: "Box",
            styles: [
              {
                name: "boxShadow",
                value: "0px 10px 15px rgb(0 0 0 / 3%)",
              },
              {
                name: "padding",
                value: 3,
              },
              {
                name: "borderRadius",
                value: 5,
              },
              {
                name: "backgroundColor",
                value: "#FFFFFF",
              },
            ],
            children: [
              {
                _id: "9879",
                component: "Text",
                children: "Transfer to other banks",
                styles: [
                  {
                    name: "maxWidth",
                    value: 130,
                  },
                ],
              },
              {
                _id: "43124",
                component: "Title",
                props: {
                  variant: "h5",
                },
                styles: [
                  {
                    name: "fontWeight",
                    value: "bold",
                  },
                ],
                children: "$100",
              },
            ],
          },
        ],
      },

      {
        _id: "0000001",
        component: "GridItem",
        props: {
          lg: 3,
          md: 6,
          sm: 6,
          xs: 6,
        },
        children: [
          {
            _id: "35346",
            component: "Box",
            styles: [
              {
                name: "boxShadow",
                value: "0px 10px 15px rgb(0 0 0 / 3%)",
              },
              {
                name: "padding",
                value: 3,
              },
              {
                name: "borderRadius",
                value: 5,
              },
              {
                name: "backgroundColor",
                value: "#FFFFFF",
              },
            ],
            children: [
              {
                _id: "9879",
                component: "Text",
                children: "Transfer same banks",
                styles: [
                  {
                    name: "maxWidth",
                    value: 130,
                  },
                ],
              },
              {
                _id: "43124",
                component: "Title",
                props: {
                  variant: "h5",
                },
                styles: [
                  {
                    name: "fontWeight",
                    value: "bold",
                  },
                ],
                children: "$1500",
              },
            ],
          },
        ],
      },
    ],
  },
];

const section_content_chart = [
  {
    _id: "c8392",
    component: "Box",
    props: {},
    styles: [{
      name: "paddingTop",
      value:4,
    }],
    children: [
      {
        _id: "t432",
        component: "Text",
        children:"Balance payment",
        props: {
          variant:"body",
        },
        styles: [
          {
            name: "fontWeight",
            value:"400",
          },
        ]
    },
      {
        _id: "t432",
        component: "Title",
        children:"$1500",
        props: {
          variant:"h4",
        },
        styles: [
          {
            name: "fontWeight",
            value:"700",
          },
        ]
    },
      {
        _id: "c8932",
        component: "Chart",
        props: {
          type: "bar",
          data: {
            labels: [
              "JAN",
              "FEB",
              "MAR",
              "APR",
              "MAY",
              "JUN",
              "JUL",
              "AUG",
              "SEP",
              "OCT",
              "NOV",
              "DEC",
            ],
            datasets: [
              {
                label: "Payments",
                data: [20, 19, 17, 15, 12, 13, 16, 22, 23, 22, 20, 19],
                backgroundColor: ["rgba(0, 0, 0, .2)"],
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        },
      },
    ]
}
];

const section_header = [
  {
    _id: "1",
    name: "section_header",
    component: "Grid",
    props: {
      container: true,
    },
    styles: [
      {
        name: "",
        vlaue: "",
      },
    ],
    children: [
      {
        _id: "01",
        component: "GridItem",
        props: {
          lg: 6,
          md: 6,
          sm: 12,
          xs: 12,
        },
        children: [
          {
            _id: "011",
            component: "Title",
            children: "Dashboard",
            props: {
              variant: "h4",
            },
            styles: [
              {
                name: "fontWeight",
                value: 700,
              },
            ],
            actions: {
              click: `() => {
                    setSample("This is a dashboard element")
                  }`,
            },
          }, //title

          {
            _id: "012",
            component: "Text",
            children: "Payment updates",
            props: {
              variant: "body",
            },
          }, //text
        ], //children
      },
      {
        _id: "02",
        component: "GridItem",
        props: {
          lg: 6,
          md: 6,
          sm: 12,
          xs: 12,
        },
        children: [
          {
            _id: "021",
            component: "Search",
          }, //search
        ], //children
      },
    ],
  },
];

const section_content = [
  {
    _id: "10",
    name: "Container",
    component: "Container",
    props: {
      maxWidth: "100%",
      disableGutters: true,
      fixed: false,
    },

    styles: [
      {
        name: "backgroundColor",
        value: "#F5F5FD",
      },
      {
        name: "paddingTop",
        value: 5,
      },
      {
        name: "paddingBottom",
        value: 5,
      },
      {
        name: "paddingLeft",
        value: 5,
      },
      {
        name: "paddingRight",
        value: 5,
      },
    ],
    children: [...section_header, ...section_blocks, ...section_content_chart],
  },
];
const section_nav = [
  {
    _id: "547567",
    component: "Stack",
    props: {
      spacing: 4,
      direction: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    styles: [
      {
        name: "height",
        value: "100%",
      },
      {
        name: "fontSize",
        value: 24,
      },
      {
        name: "color",
        value: "#000000",
      },
      {
        name: "fdafda",
        value:"000",
      },
      {
        name: "@media (max-width:900px)",
        value: {
          backgroundColor: "#000",
          display:"none",
        }
    },
    ],
    children: [
      {
        _id: "7657",
        component: "StackItem",
        children: [
          {
            _id: "843i",
            component: "Link",
            props: {
              href: "/home",
              onClick: () => {
                return false;
              },
            },
            styles: [
              {
                name: "color",
                value:"#000000",
              }, {
                name: "&:hover",
                value: {
                  color:"red"
                }
              }
            ],
            children: [
              {
                _id: "ho403",
                component: "MdHome",
              },
            ],
          },
        ],
      },
      {
        _id: "re432",
        component: "StackItem",
        children: [
          {
            _id: "re9",
            component: "Link",
            props: {
              href: "/analytics",
              onClick: () => {
                return false;
              },
            },
            styles: [
              {
                name: "color",
                value:"#000000",
              }, {
                name: "&:hover",
                value: {
                  color:"#777777"
                }
              }
            ],
            children: [
              {
                _id: "n432",
                component: "MdNotes",
              },
            ],
          },
        ],
      },
      {
        _id: "432r",
        component: "StackItem",
        children: [
          {
            _id: "re9",
            component: "Link",
            props: {
              href: "/analytics",
              onClick: () => {
                return false;
              },
            },
            styles: [
              {
                name: "color",
                value:"#000000",
              }, {
                name: "&:hover",
                value: {
                  color:"#777777"
                }
              }
            ],
            children: [
              {
                _id: "ho4r3",
                component: "MdInsertChartOutlined",
              },
            ],
          },
        ],
      },
     
    ],
  },
];

const section_analytics = [
  {
    _id: "g834902",
    component: "Grid",
    props: {
      container:true,
    },
    styles: [{
      name:"backgroundColor",
      value:"#ECECF6",
    },{
      name: "padding",
      value: 5,
    }],

    children: [
      {
        _id: "b098",
        component: "GridItem",
        props: {
          lg: 12,
          md: 12,
          sm: 12,
          xs: 12,
        },
     
        children: [
          {
            _id: 'c84398',
            component: "Image",
            props: {
              src:"/images/card.png",
            },
            styles: [
              {
                name: "borderRadius",
                value: 8,
            },
              {
                name: "boxShadow",
                value: "0px 10px 20px rgba(0,0,0,.3)",
            },
              {
                name: "maxWidth",
                value:350,
              },
              {
                name: "height",
                value:"auto"
              }
            ]
          }
        ]
      },
      {
        _id: "r3242",
        component: "GridItem",
        props: {},
        styles: [
          {
            name: "paddingTop",
            value: 4,
          }
        ],
        children: [
          
          {
            _id: "t432t",
            component: "Title",
            children: "Recent Activities",
            props: {
              variant:"h5",
            },
            styles: [
              {
                name: "fontWeight",
                value: 700,
              }
            ]
          }
          ,
          {
            _id: "t432t",
            component: "Text",
            children: "February| 22 | 2023",
            props: {
              variant:"body",
            },
            styles: [
              {
                name: "fontWeight",
                value: 400,
              }
            ]
          }

        ]
      }
    ]
 }
]

const master_layout = [
  {
    _id: "4323240",
    component: "Container",
    props: {
      disableGutters: true,
      maxWidth: 1440,
    },
    children: [
      {
        _id: "603543",
        component: "Grid",
        props: {
          container: true,
        },
        children: [
          {
            _id: "890e4",
            component: "GridItem",
            props: {
              lg: 1,
              md: 1,
              sm: 12,
            },
            styles: [
              {
                name: "backgroundColor",
                value: "#ECECF6",
              },
            ],
            children: [...section_nav],
          },

          {
            _id: "fda5",
            component: "GridItem",
            props: {
              lg: 8,
              md: 7,
              sm: 12,
            },
            children: [...section_content],
          },
          {
            _id: "890f4",
            component: "GridItem",
            props: {
              lg: 3,
              md: 4,
              sm: 12,
            },
            styles: [
              {
                name: "backgroundColor",
                value:"#ECECF6",
              }
            ],
            children: [
              ...section_analytics
            ]
          },
        ],
      },
    ],
  },
];
export const json = [{
    _id:"432tr",
    component:"Link",
    props:{},
    styles:[],
    actions:{
        _click:()=>{
            Alert.alert("actons")
        }
    },
    children:[{
        _id:"gj6",
        component:"Text",
        children:"Text string",
    },
{
        _id:"gj6fda",
        component:"Text",
        children:"Text string",
    }],
}];
