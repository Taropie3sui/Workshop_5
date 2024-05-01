let table;

function preload(){
  table = loadTable('sks.csv', 'csv', 'header');
}


  function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  let rows = table.getRowCount();
  text("Total no. of rows in the table = " + rows, 20, 100);

  let row = table.getRow (0);
  let week = row.get("week");
  text(week, 30,150);

  let Ivy = row.get("Ivy");
  text (Ivy, 30, 170);
}
