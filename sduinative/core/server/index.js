export const json = [
  {
    _id: "432fss",
    component: "StatusBar",
  },
  {
    _id: "4323240",
    component: "Container",
    props: {
      disableGutters: true,
      maxWidth: 1440,
      type: "scroll",
    },
    children: [
      {
        _id: "4324T",
        component: "Box",
        styles: [
          {
            name: "padding",
            value: 12,
          },
        ],
        children: [
          {
            _id: "4w532r",
            component: "Title",
            props:{
              variant:"h4",
            },
            styles:[{
              name:"fontWeight",
              value:"bold",
            }],
            children: "Dashboard",
            
          },
          {
            _id: "o4329",
            component: "Text",
            props:{
              variant:"body1",
            },
            styles:[{
              name:"color",
              value:"#999999"
            }],
            children: "Payment updates",
          },
        ],
      },
      {
        _id: "603543",
        component: "Grid",
        props: {
          container: true,
          direction:"row",
          spacing:6,
        },
        styles:[],
         children: [
                  {
                    _id: "r3243x3",
                    component: "GridItem",
                    props:{
                      p:24,
                      lg:3,
                      md:6,
                      sm:6,
                      xs:12,
                    },
              
                    children: [
                      {
                        _id: "432432te",
                        component: "Text",
                        props:{
                          variant:"body1",
                        },
                        children: "Transfer via card number",
                        styles: [
                          {
                            name: "color",
                            value: "#999999",
                          },
                          {
                            name: "paddingBottom",
                            value: "6px",
                          },
                          
                        ],
                      },
                      {
                        _id: "ex",
                        component: "Title",
                        props:{
                          variant:"h4",
                        },
                        children: "$1200",
                        styles: [
                          {
                            name: "color",
                            value: "#000000",
                          },
                          {
                            name: "fontWeight",
                            value: 800,
                          },
                        ],
                      },
                    ],
                    styles: [
                     
                      {
                        name:"width",
                        value:"50%",
                      },
                      {
                        name: "backgroundColor",
                        value: "#f1f1f1",
                      },
                     
                      {
                        name: "borderRadius",
                        value: "12px",
                      },
                      
                    ],
                  },

                  {
                    _id: "r3243x4",
                    component: "GridItem",
                    props:{
                      p:24,
                      lg:3,
                      md:6,
                      sm:6,
                      xs:12,
                    },
                    styles: [
                        {
                        name:"width",
                        value:"50%",
                      },
                      {
                        name: "backgroundColor",
                        value: "#f1f1f1",
                      },
                     
                      {
                        name: "borderRadius",
                        value: 12,
                      },
                      
                    ],
                    children: [
                      {
                        _id: "se",
                        component: "Text",
                        props:{
                          variant:"body1",
                        },
                        children: "Transfer via other banks",
                        styles: [
                          {
                            name: "color",
                                value: "#999999",
                          },
                          {
                            name: "paddingBottom",
                            value: "6px",
                          },
                        ],
                      },
                      {
                        _id: "432432tm",
                        component: "Title",
                        props:{
                          variant:"h4",
                        },
                        children: "$600",
                        styles: [
                        
                          {
                            name: "fontWeight",
                            value: 800,
                          },
                          
                        ],
                      },
                    ],
                    
                  },
                ],
      
      },
      {
        _id: "ir30294",
        component: "Box",
        styles: [
          {
            name: "padding",
            value: 12,
          },
        ],
        children: [
          {
            _id: "743yrexw",
            component: "Text",
            children: "Balance payment",
            props:{
              variant:"body1",
            },
            styles: [
              {
                name:"color",
                value:"#999999",
              },
             
            ],
          },
          {
            _id: "743yrew",
            component: "Title",
            props:{
              variant:"h4",
            },
            children: "$1500",
            styles: [
              {
                            name: "fontWeight",
                            value: 800,
                          },
            ],
          },
          {
            _id: "char432423",
            component: "Chart",
            props: {
              type: "line",
            },
          },
        ],
      },
    ],
  },
];
