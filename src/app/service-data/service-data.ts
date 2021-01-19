import { Injectable, Optional } from '@angular/core';
//import { HttpClient } from '@angular/common/http';

export interface DataInfo {
  temperature: number,
  humidity: number,
  heart: number,
  wellness: number
}

@Injectable()
export class ServiceData {
  /*constructor(private HttpClient: HttpClient) {

  }*/

  constructor() {
  }

  async getSingleData() {
    let single = [
      {
        "name": "Temperature",
        "value": 24
      },
      {
        "name": "Humidity",
        "value": 84
      },
      {
        "name": "Heart",
        "value": 12
      },
      {
        "name": "Wellness",
        "value": 8
      },
    ];

    return single;
  }


  async getAverageData() {
    let averageData = [
      {
        "name": "May",
        "series": [
          {
            "name": "Sun",
            "value": 20
          },
          {
            "name": "Sat",
            "value": 25
          },
          {
            "name": "Thu",
            "value": 27
          },
          {
            "name": "Wed",
            "value": 32
          },
          {
            "name": "Tue",
            "value": 24
          },
          {
            "name": "Mon",
            "value": 22
          }
        ]
      },
      {
        "name": "June",
        "series": [
          {
            "name": "Sun",
            "value": 22
          },
          {
            "name": "Sat",
            "value": 24
          },
          {
            "name": "Thu",
            "value": 27
          },
          {
            "name": "Wed",
            "value": 26
          },
          {
            "name": "Tue",
            "value": 28
          },
          {
            "name": "Mon",
            "value": 25
          }
        ]
      },

      {
        "name": "July",
        "series": [
          {
            "name": "Sun",
            "value": 25
          },
          {
            "name": "Sat",
            "value": 26
          },
          {
            "name": "Thu",
            "value": 33
          },
          {
            "name": "Wed",
            "value": 32
          },
          {
            "name": "Tue",
            "value": 30
          },
          {
            "name": "Mon",
            "value": 34
          }
        ]
      },
      {
        "name": "September",
        "series": [
          {
            "name": "Sun",
            "value": 15
          },
          {
            "name": "Sat",
            "value": 16
          },
          {
            "name": "Thu",
            "value": 20
          },
          {
            "name": "Wed",
            "value": 17
          },
          {
            "name": "Tue",
            "value": 13
          },
          {
            "name": "Mon",
            "value": 18
          }
        ]
      },
      {
        "name": "Decembre",
        "series": [
          {
            "name": "Sun",
            "value": 5
          },
          {
            "name": "Sat",
            "value": 7
          },
          {
            "name": "Thu",
            "value": 11
          },
          {
            "name": "Wed",
            "value": 8
          },
          {
            "name": "Tue",
            "value": 4
          },
          {
            "name": "Mon",
            "value": 0
          }
        ]
      }
    ];

    return averageData;
  }

  async getMultiData() {
    let multi = [
      {
        "name": "Temperature",
        "series": [
          {
            "name": "23-05-2020",
            "value": 24
          },
          {
            "name": "28-05-2020",
            "value": 22
          },
          {
            "name": "08-07-2020",
            "value": 28
          }
        ]
      },

      {
        "name": "Humidity",
        "series": [
          {
            "name": "23-05-2020",
            "value": 89
          },
          {
            "name": "28-05-2020",
            "value": 80
          },
          {
            "name": "08-07-2020",
            "value": 87
          }
        ]
      },

      {
        "name": "Heart",
        "series": [
          {
            "name": "23-05-2020",
            "value": 14
          },
          {
            "name": "28-05-2020",
            "value": 12
          },
          {
            "name": "08-07-2020",
            "value": 14
          }
        ]
      }
    ];

    return multi;
  }
}
