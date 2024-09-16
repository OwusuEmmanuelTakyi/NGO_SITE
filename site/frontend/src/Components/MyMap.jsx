import React, { useRef, useEffect } from 'react';
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import { Feature } from 'ol';
import { Point } from 'ol/geom';
import { Icon, Style } from 'ol/style';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';

const MyMap = () => {
  const mapRef = useRef();

  useEffect(() => {
    const iconFeature = new Feature({
      geometry: new Point(fromLonLat([-0.23650215581875977, 5.637657069695066])),
    });

    const iconStyle = new Style({
      image: new Icon({
        anchor: [0.5, 1],
        src: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/RedDot.svg', // URL to your custom icon
      }),
    });

    iconFeature.setStyle(iconStyle);

    const vectorSource = new VectorSource({
      features: [iconFeature],
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        vectorLayer,
      ],
      view: new View({
        center: fromLonLat([-0.23650215581875977, 5.637657069695066]),
        zoom: 13,
      }),
    });
  }, []);

  return <div ref={mapRef} style={{ width: '100%', height: '400px' }} />;
};

export default MyMap;
