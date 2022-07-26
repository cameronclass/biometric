<template>
  <div class="col-md-12">
    <div class="card p-4 mb-4">
      <h2 class="chart-title mb-4">Общее количество транзакции</h2>
      <div class="row">
        <div class="col-lg-7">
          <apexchart ref="allTransactions" type="area" height="340" :options="allTransactions.options" :series="allTransactions.series"></apexchart>
        </div>
        <div class="col-lg-5">
          <div class="row">
            <div class="col-7">
              <h2 class="chart-subtitle">Транзакция</h2>

            </div>
            <div class="col-5 mb-5">
              <div class="d-flex flex-column radial-bar__indicator">
                <span class="unsuccess">Неуспешные</span>
                <span class="success">Успешные</span>
              </div>
            </div>
            <div class="col-6 mt-2">
              <div class="radial-bar radial-bar__success radial-bar__big">
                <div class="radial-bar__block">
                  <div class="radial-bar__img radial-bar__value">
                    100%
                  </div>
                </div>
                <div class="container__progressbar">
                  <div class="progressbar">
                    <svg class="progressbar__svg">
                      <circle style="--porcent: 100" cx="90" cy="90" r="90" class="progressbar__svg-circle circle-to-big"></circle>
                    </svg>
                  </div>
                </div>
                <div class="container__progressbar container__progressbar-unsuccess">
                  <div class="progressbar">
                    <svg class="progressbar__svg">
                      <circle style="--porcent: 17" cx="90" cy="90" r="85" class="progressbar__svg-circle circle-to-big"></circle>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-6 mt-0">

              <div class="radial-bar radial-bar__unsuccess mb-5">
                <div class="radial-bar__block">
                  <div class="radial-bar__img">
                    <img src="@/assets/img/icons/to-bottom.svg" alt="">
                  </div>
                  <div class="radial-bar__text">
                    <span class="radial-bar__text_value">18%</span>
                    <span class="radial-bar__text_desc">Неуспешных</span>
                  </div>
                </div>
                <div class="container__progressbar">
                  <div class="progressbar">
                    <svg class="progressbar__svg">
                      <circle style="--porcent: 18" cx="40" cy="40" r="40" class="progressbar__svg-circle circle-to-bottom"></circle>
                    </svg>
                  </div>
                </div>
              </div>

              <div class="radial-bar radial-bar__success">
                <div class="radial-bar__block">
                  <div class="radial-bar__img">
                    <img src="@/assets/img/icons/to-top.svg" alt="">
                  </div>
                  <div class="radial-bar__text">
                    <span class="radial-bar__text_value">72%</span>
                    <span class="radial-bar__text_desc">Успешных</span>
                  </div>
                </div>
                <div class="container__progressbar">
                  <div class="progressbar">
                    <svg class="progressbar__svg">
                      <circle style="--porcent: 72" cx="40" cy="40" r="40" class="progressbar__svg-circle circle-to-bottom"></circle>
                    </svg>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>

    <div class="row mb-4">
      <div class="col-lg-4">
        <div class="card">
          <h2 class="chart-subtitle p-4">Liveness Detection</h2>
          <apexchart type="area" height="250" :options="livenessDetection.options" :series="livenessDetection.series"/>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="card">
          <h2 class="chart-subtitle p-4">Face 2 Face</h2>
          <apexchart type="area" height="250" :options="faceTo.options" :series="faceTo.series"/>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="card">
          <h2 class="chart-subtitle p-4">Document Recognition</h2>
          <apexchart type="area" height="250" :options="documentRecognation.options" :series="documentRecognation.series"/>
        </div>
      </div>
    </div>

    <div class="card">
      <h2 class="chart-title mb-4 p-4">Транзакций по технологиям </h2>
      <apexchart
          height="350"
          type="bar"
          :options="technologies.options"
          :series="technologies.series"
      />
    </div>

  </div>
</template>

<script>

export default {
  data: () => {
    return {
      allTransactions: {

        series: [
          {
            name: 'Document Verification',
            data: [ 31, 40, 28, 51, 42, 109, 100 ]
          },
          {
            name: 'Liveness Detection',
            data: [ 11, 32, 45, 32, 34, 52, 41 ]
          },
          {
            name: 'Face 2 Face',
            data: [ 15, 31, 57, 12, 39, 12, 21 ]
          }
        ],

        options: {
          colors: ['#FA1919', '#194AFA', '#9719FA'],
          tooltip: {
            fixed: {
              enabled: true,
              position: "topLeft"
            }
          },
          chart: {
            toolbar: {
              show: false,
            },
          },
          dataLabels: {
            enabled: false
          },
          xaxis: {},
          stroke: {
            width: 3,
            dashArray: 0,
          },
          grid: {
            show: true,
            borderColor: '#F2F2F2',
            strokeDashArray: 5,
            position: 'back',
            xaxis: {
              lines: {
                show: false
              }
            },
            yaxis: {
              lines: {
                show: true
              }
            },
          }
        }
      },

      livenessDetection: {
        series: [
          {
            name: 'Liveness Detection',
            data: [ 31, 40, 28, 51, 42, 109, 100 ]
          }
        ],

        options: {
          // tooltip: {
          //   fixed: {
          //     enabled: true,
          //     position: "topLeft"
          //   }
          // },
          colors: ['#9719FA'],
          chart: {
            toolbar: {
              show: false,
            },
          },
          dataLabels: {
            enabled: false
          },
          xaxis: {},
          stroke: {
            width: 2,
            dashArray: 0,
          },
          grid: {
            show: true,
            borderColor: '#F2F2F2',
            strokeDashArray: 5,
            position: 'back',
            xaxis: {
              lines: {
                show: false
              }
            },
            yaxis: {
              lines: {
                show: true
              }
            },
          }
        }
      },
      faceTo: {

        series: [
          {
            name: 'Face 2 Face',
            data: [ 11, 32, 45, 32, 34, 52, 41 ]
          }
        ],

        options: {
          colors: [ '#194AFA'],
          chart: {
            toolbar: {
              show: false,
            },
          },
          dataLabels: {
            enabled: false
          },
          xaxis: {},
          stroke: {
            width: 2,
            dashArray: 0,
          },
          grid: {
            show: true,
            borderColor: '#F2F2F2',
            strokeDashArray: 5,
            position: 'back',
            xaxis: {
              lines: {
                show: false
              }
            },
            yaxis: {
              lines: {
                show: true
              }
            },
          }
        }
      },
      documentRecognation: {
        series: [
          {
            name: 'Face 2 Face',
            data: [ 15, 31, 57, 12, 39, 12, 21 ]
          }
        ],

        options: {
          colors: ['#FA1919'],
          chart: {
            toolbar: {
              show: false,
            },
          },
          dataLabels: {
            enabled: false
          },
          xaxis: {},
          stroke: {
            width: 2,
            dashArray: 0,
          },
          grid: {
            show: true,
            borderColor: '#F2F2F2',
            strokeDashArray: 5,
            position: 'back',
            xaxis: {
              lines: {
                show: false
              }
            },
            yaxis: {
              lines: {
                show: true
              }
            },
          }
        }
      },

      technologies: {
        series: [
          {
            name: 'Document Recognition',
            data: [ 95, 55, 100, 48, 105, 60, 66 ],
          },
          {
            name: 'Liveness Detection',
            data: [ 100, 45, 30, 56, 45, 53, 41 ],
          },
          {
            name: 'Face 2 Face',
            data: [ 75, 20, 40, 52, 50, 114, 94 ],
          },

        ],

        options: {
          colors: ['#FA1919', '#194AFA', '#9719FA'],
          chart: {
            width: 855,
            height: 350,
            type: 'bar',
            toolbar: {
              show: false,
            },
          },
          legend: {
            show: true,
          },
          dataLabels: {
            enabled: false,
          },
          plotOptions: {
            bar: {
              endingShape: 'rounded',
              radius: 10,
              borderRadius: 8,
              horizontal: false,
              columnWidth: '30%',
            },
          },
          stroke: {
            show: true,
            colors: [ 'transparent' ],
            curve: 'smooth',
            lineCap: 'butt',
          },
          xaxis: {
            categories: [
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
            ],
          },
          grid: {
            show: true,
            borderColor: '#F2F2F2',
            strokeDashArray: 5,
            position: 'back',
            xaxis: {
              lines: {
                show: false
              }
            },
            yaxis: {
              lines: {
                show: true
              }
            },
          }
        },
      },
    }
  },
  computed: {
    totalCount() {
      return this.table.tableData.length;
    },
  },
  methods: {
    pageNumberChange(pageIndex) {
      this.pageIndex = pageIndex;
    },

    pageSizeChange(pageSize) {
      this.pageIndex = 1;
      this.pageSize = pageSize;
    },
  },
}
</script>
