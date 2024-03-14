// Car constructor
function ToyCar(name, scale, dimensions, material, features, manufacturer, color) {
    this.name = name;
    this.scale = scale;
    this.dimensions = dimensions;
    this.material = material;
    this.features = features;
    this.manufacturer = manufacturer;
    this.color = color;
}

// Instantiate a ToyCar object
let toyCar = new ToyCar(
    "1972 Dodge Demon GSS Supercharged Mr. Norms",
    "1/18",
    { length: "10.75 inches", width: "4 inches", height: "3 inches" },
    { metal: "Diecast Metal", plastic: "Some plastic parts" },
    ["Steerable Front Wheels", "Openable Hood", "Openable Doors", "Openable Trunk"],
    "Auto World",
    "Brown"
);

// Display car details on the HTML page
function displayCarDetails(car) {
    let carInfoDiv = document.getElementById('car-info');
    let carDetailsHTML = `
    <div class="car-details">
      <h2>${car.name}</h2>
      <p><strong>Scale:</strong> ${car.scale}</p>
      <p><strong>Dimensions:</strong> ${car.dimensions.length} x ${car.dimensions.width} x ${car.dimensions.height}</p>
      <p><strong>Material:</strong> ${car.material.metal}, ${car.material.plastic}</p>
      <p><strong>Features:</strong></p>
      <ul>
        ${car.features.map(feature => `<li>${feature}</li>`).join('')}
      </ul>
      <p><strong>Manufacturer:</strong> ${car.manufacturer}</p>
      <p><strong>Color:</strong> ${car.color}</p>
    </div>
  `;
    carInfoDiv.innerHTML = carDetailsHTML;
}

// Display car details on page load
window.onload = function () {
    displayCarDetails(toyCar);
};