import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import "./ContsctSection.scss";

export default function ContsctSection() {
  return (
    <section className='contact'>
      <div className='container'>
        <div className='contact__body'>
          <div className='contact__map'>
            <YMaps>
              <Map
                width={500}
                defaultState={{
                  center: [55.191593, 30.189143],
                  zoom: 14,
                  controls: ["zoomControl"],
                }}
                modules={["control.ZoomControl"]}
              >
                <Placemark
                  defaultGeometry={[55.191593, 30.189143]}
                  iconContent='test'
                />
              </Map>
            </YMaps>
          </div>
        </div>
      </div>
    </section>
  );
}
