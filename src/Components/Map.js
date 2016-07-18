import React, { Component } from 'react';
import { render } from 'react-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

const position = [32.06257,118.7781];

export default class MapComponent extends Component {

  render() {
    return (
      <Map center={position} zoom={13}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            <span><strong></strong><span>鼓楼区中央路1号(地铁1号线鼓楼站4A口出北行170米)</span>
          </Popup>
        </Marker>
      </Map>
    )
  }
}
