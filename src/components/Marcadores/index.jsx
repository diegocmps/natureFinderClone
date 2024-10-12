import PropTypes from 'prop-types';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet'
import markerIcon from '../../assets/imagens/leaf-green.png';


// Criar o ícone personalizado
const customMarkerIcon = new L.Icon({
    iconUrl: markerIcon,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
});

// eslint-disable-next-line react/prop-types
export function Marcadores({ localidade }) {
    return (
        <>
            {localidade.map(local => (
                <Marker
                    key={local.id}
                    position={[parseFloat(local.latitude), parseFloat(local.longitude)]}
                    icon={customMarkerIcon}
                >
                    <Popup>
                        <strong>{local.nome}</strong>
                        <p>{local.descricao}</p>
                    </Popup>
                </Marker>
            ))}
        </>
    );
}

Marcadores.propTypes = {
    localidade: PropTypes.array.isRequired,
};
