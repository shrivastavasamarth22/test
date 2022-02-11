import React, {useState} from 'react';
import MapView, {Marker, Polygon} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import {Point} from "../Point";
import {convexHull} from "../sortPoints";

const PolygonScreen = () => {
    const initialRegion = {
        latitude: 23.188670,
        longitude: 77.446871,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
    }

    const MARKER1 = {
        latitude: 23.188862,
        longitude: 77.447398,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02
    }

    const MARKER2 = {
        latitude: 23.188912,
        longitude: 77.447607,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02
    }

    const MARKER3 = {
        latitude: 23.189035,
        longitude: 77.447899,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02
    }

    const POINT1 = new Point(MARKER1, 'marker1')
    const POINT2 = new Point(MARKER2, 'marker2')
    const POINT3 = new Point(MARKER3, 'marker3')

    const [state, setState] = useState({points: [POINT1, POINT2, POINT3]});


    const onMapPress = (e) => {
        const coordinates = e.nativeEvent.coordinate;
        const newPoint = new Point(coordinates, `${ Date.now() }.${ Math.random() }`)
        const points = convexHull([...state.points, newPoint]);
        setState({points});
    }

    return (
        <View style={styles.container}>
            <MapView
                initialRegion={initialRegion}
                style={styles.map}
                onPress={onMapPress}
            >
                <Polygon
                    coordinates={ state.points }
                    strokeWidth={3}
                    strokeColor={'#8c24e3'}
                    fillColor={'rgba(129, 10, 140, 0.15)'}
                    onPress={onMapPress}
                />
                { state.points.map((m, i) => (
                    <Marker key={ `${ m.identifier }.${ i }` } coordinate={ m } />
                )) }

            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});

export default PolygonScreen;