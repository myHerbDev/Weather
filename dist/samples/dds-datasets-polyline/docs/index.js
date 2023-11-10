/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// [START maps_dds_datasets_polyline]
let map;

async function initMap() {
  // Request needed libraries.
  const { Map } = await google.maps.importLibrary("maps");
  const position = { lat: 47.59, lng: -122.31 };
  const map = new Map(document.getElementById("map"), {
    zoom: 14,
    center: position,
    mapId: "b98e588c46685dd7",
    mapTypeControl: false,
  });
  // Dataset ID for Seattle Bridges
  const datasetId = "3d0bd5fb-3f42-47fe-b50f-81c0932cd533";
  //@ts-ignore
  const datasetLayer = map.getDatasetFeatureLayer(datasetId);

  // [START maps_dds_datasets_polyline_style_function]
  // Apply style to all features.
  datasetLayer.style = { strokeColor: "green", strokeWeight: 4 };

  // [END maps_dds_datasets_polyline_style_function]
  // Create an attribution DIV and add the attribution to the map.
  const attributionDiv = document.createElement("div");
  const attributionControl = createAttribution(map);

  attributionDiv.appendChild(attributionControl);
  map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(attributionDiv);
}

// Create a custom control to hold attribution text.
function createAttribution(map) {
  const attributionLabel = document.createElement("div");

  // Define CSS styles.
  attributionLabel.style.backgroundColor = "#fff";
  attributionLabel.style.opacity = "0.7";
  attributionLabel.style.fontFamily = "Roboto,Arial,sans-serif";
  attributionLabel.style.fontSize = "10px";
  attributionLabel.style.padding = "2px";
  attributionLabel.style.margin = "2px";
  attributionLabel.textContent = "Data source: Seattle GeoData";
  return attributionLabel;
}

initMap();
// [END maps_dds_datasets_polyline]
