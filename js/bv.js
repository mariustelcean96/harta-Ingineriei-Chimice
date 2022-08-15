var markerPurolite = L.marker([45.714486960452255, 24.701888769428635]).addTo(map);
markerPurolite.bindPopup(`
Purolite (joburile sunt postate 
<a href="https://www.bestjobs.eu/ro/firme/purolite">pe site-ul BestJobs.ro</a><br> 
<a href="/imaginijob/purolite.jpeg">Anunţ</a>
`);

var markerTest = L.marker([45.76, 24.76]).addTo(map);
markerTest.bindPopup(`

<div class="comp-container">
  <div class="comp-intro">
    Descriere scurtă a companiei
  </div>
  <a href="#" target="_blank">Legătura 1</a>
  <a href="#" target="_blank">Legătura 2</a>
  <a href="#" target="_blank">Legătura 3</a>
</div>

`);

/*
var markerTest = L.marker([45.76, 24.76]).addTo(map);
markerTest.bindPopup(`

<div class="comp-container">
  <div class="comp-intro">
    Descriere scurtă a companiei
  </div>
  <a href="#" target="_blank">Legătura 1</a>
  <a href="#" target="_blank">Legătura 2</a>
  <a href="#" target="_blank">Legătura 3</a>
</div>

`);*/