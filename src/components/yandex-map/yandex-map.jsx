import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const YandexMap = (props) => {
  const {
    id,
    className,
    center,
    zoom,
    title,
    content,
  } = props;

  return (
    <YMaps>
      <Map
        className={cn('map', className)}
        id={id}
        defaultState={{
          center,
          zoom,
          controls: ['zoomControl', 'fullscreenControl'],
          behaviors: ['drag', 'dblClickZoom', 'multiTouch'],
        }}
        modules={['control.ZoomControl', 'control.FullscreenControl']}
      >
        <Placemark
          defaultGeometry={center}
          modules={['geoObject.addon.balloon']}
          properties={{
            iconCaption: title,
            balloonContentBody: content,
          }}
        />
      </Map>
    </YMaps>
  );
};

YandexMap.defaultProps = {
  id: 'map',
  className: '',
  center: [0, 0],
  zoom: 14,
  title: '',
  content: '',
};

YandexMap.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  center: PropTypes.arrayOf(PropTypes.number),
  zoom: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string,
};

export default YandexMap;
