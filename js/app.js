// dark mode toogle
$(".theme-switch").on("click", () => {
  $("body").toggleClass("light-theme");
});

// bar chat
var options = {
  series: [
    {
      name: "Net Profit",
      type: "column",
      data: [44, 42, 57, 86, 58, 55, 70, 52, 29, 56, 75, 61],
    },
    {
      name: "Revenue",
      type: "column",
      data: [26, 35, 41, 78, 46, 37, 65, 49, 23, 38, 65, 27],
    },
  ],
  chart: {
    height: 350,
    type: "line",
    stacked: false,
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: [1, 1, 4],
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  yaxis: [
    {
      tooltip: {
        enabled: true,
      },
    },
  ],
  tooltip: {
    fixed: {
      enabled: true,
      position: "topLeft",
      offsetY: 30,
      offsetX: 60,
    },
  },
  legend: {
    horizontalAlign: "left",
    offsetX: 40,
  },
  fill: {
    colors: ["#664dc9", "#44c4fa"],
  },
  stroke: {
    show: true,
    curve: "smooth",
    lineCap: "butt",
    width: 2,
    dashArray: 0,
  },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

// table sort
$(document).ready(function () {
  var headers = $("#data-table thead th");

  $(headers[5]).attr("data-tablesort-type", "date");

  $("table").not(".tablesort").addClass("tablesort");
  // $('')
});

// progress
var myCountdown = $("#example").progressBarTimer({
  autoStart: true,
  animated: true,
  show: true,
  type: 'percent',
  timeLimit:20,
  height:10,
});
// progress
var myCountdown = $("#example_1").progressBarTimer({
  autoStart: true,
  animated: true,
  show: true,
  type: 'percent',
  timeLimit:20,
  height:10,
});
// progress
var myCountdown = $("#example_2").progressBarTimer({
  autoStart: true,
  animated: true,
  show: true,
  type: 'percent',
  timeLimit:20,
  height:10,
});
// progress
var myCountdown = $("#example_3").progressBarTimer({
  autoStart: true,
  animated: true,
  show: true,
  type: 'percent',
  timeLimit:20,
  height:10,
});

// table data
var data = [
  {
      formCode: 531718,
      formName: 'Ricky Alex',
      fullName: 'rickyalex@example.com',
      appointmentDate: '03 March, 2022',
      appointmentTime: '$2.346',
      phone: 'Pending'
  },
  {
      formCode: 531790,
      formName: 'Ricky Alex',
      fullName: 'rickyalex@example.com',
      appointmentDate: '03 March, 2022',
      appointmentTime: '$2.346',
      phone: 'Paid'
  },
  {
      formCode: 531334,
      formName: 'Ricky Alex',
      fullName: 'rickyalex@example.com',
      appointmentDate: '03 March, 2022',
      appointmentTime: '$2.346',
      phone: 'Paid'
  },
  {
      formCode: 5317,
      formName: 'Ricky Alex',
      fullName: 'rickyalex@example.com',
      appointmentDate: '03 March, 2022',
      appointmentTime: '$2.346',
      phone: 'Paid'
  },
  {
      formCode: 5318,
      formName: 'Ricky Alex',
      fullName: 'rickyalex@example.com',
      appointmentDate: '03 March, 2022',
      appointmentTime: '$2.346',
      phone: 'Paid'
  },
  {
      formCode: 5319,
      formName: 'Ricky Alex',
      fullName: 'rickyalex@example.com',
      appointmentDate: '03 March, 2022',
      appointmentTime: '$2.346',
      phone: 'Failed'
  },
  {
      formCode: 5320,
      formName: 'Ricky Alex',
      fullName: 'rickyalex@example.com',
      appointmentDate: '17 March, 2017',
      appointmentTime: '$2.346',
      phone: 'Paid'
  },
  {
      formCode: 5321,
      formName: 'Ricky Alex',
      fullName: 'rickyalex@example.com',
      appointmentDate: '03 March, 2022',
      appointmentTime: '$2.346',
      phone: 'Paid'
  },
  {
      formCode: 5322,
      formName: 'Ricky Alex',
      fullName: 'rickyalex@example.com',
      appointmentDate: '03 March, 2022',
      appointmentTime: '$2.346',
      phone: 'Paid'
  },
  {
      formCode: 5323,
      formName: 'Ricky Alex',
      fullName: 'rickyalex@example.com',
      appointmentDate: '03 March, 2022',
      appointmentTime: '$2.346',
      phone: 'Paid'
  },
  {
      formCode: 5324,
      formName: 'Ricky Alex',
      fullName: 'rickyalex@example.com',
      appointmentDate: '03 March, 2022',
      appointmentTime: '$2.346',
      phone: 'Failed'
  },
  {
      formCode: 5325,
      formName: 'Ricky Alex',
      fullName: 'rickyalex@example.com',
      appointmentDate: '03 March, 2022',
      appointmentTime: '$2.346',
      phone: 'Paid'
  },
  {
      formCode: 5326,
      formName: 'Ricky Alex',
      fullName: 'rickyalex@example.com',
      appointmentDate: '03 March, 2022',
      appointmentTime: '$2.346',
      phone: 'Pending'
  },
  {
      formCode: 5327,
      formName: 'Ricky Alex',
      fullName: 'rickyalex@example.com',
      appointmentDate: '03 March, 2022',
      appointmentTime: '$2.346',
      phone: 'Paid'
  },
  {
      formCode: 5328,
      formName: 'Ricky Alex',
      fullName: 'rickyalex@example.com',
      appointmentDate: '03 March, 2022',
      appointmentTime: '$2.346',
      phone: 'Paid'
  },
  {
      formCode: 5329,
      formName: 'Ricky Alex',
      fullName: 'rickyalex@example.com',
      appointmentDate: '03 March, 2022',
      appointmentTime: '$2.346',
      phone: 'Paid'
  },
]

var columns = {
  'formCode': 'Invoice Id',
  'formName': 'Customer Name',
  'fullName': 'Customer ID',
  'appointmentDate': 'Date',
  'appointmentTime': 'Order Value',
  'phone': 'Status'
}

// table sort
var table = $('#table-sortable').tableSortable({
  data: data,
  columns: columns,
  rowsPerPage: 10,
  pagination: true
});

// toogle menu
const menuBtn = document.querySelector('.menu_bars');
const sidebar = document.querySelector('.sidebar');

menuBtn.addEventListener('click', () =>{
  sidebar.classList.toggle('active')
})


// change active menu
const menuLi = document.querySelectorAll(".side");

function setMenuActive() {
  menuLi.forEach((n) => n.classList.remove("show"));
  this.classList.add("show");
}

menuLi.forEach((n) => n.addEventListener("click", setMenuActive));


// back to top
var $button = $.backToTop({
  // background color
  backgroundColor: "#151931",

  // text color
  color: "#FFFFFF",

  // container element
  container: this._body,

  // 'nonn', 'spin', 'fade', 'zoom', or 'spin-inverse'
  effect: "spin",

  // enable the back to top button
  enabled: true,

  // width/height of the back to top button
  height: 70,
  width: 70,

  // icon
  icon: "fas fa-chevron-up",

  // margins
  marginX: 20,
  marginY: 20,

  // bottom/top left/right
  position: "bottom right",

  // trigger position
  pxToTrigger: 600,

  // scroll animation,

  // or 'fawesome'
  theme: "default",

  // z-index
  zIndex: 100000000000,
});


// Preloader
$(function ($) {
  $(".js-preloader").preloadinator({
    minTime: 2000,
  });
});