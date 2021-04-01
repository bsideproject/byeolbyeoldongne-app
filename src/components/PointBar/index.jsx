import React, { useRef, useEffect, useState } from 'react';

import { Text, StyleSheet, View } from 'react-native';
import theme from '../../context/theme';

const PointBar = ({ label, average, averageString, ...props }) => {
    const ref = useRef(null);
    const [pointWidth, setPointWidth] = useState(0);

    useEffect(() => {
        ref.current.measure((fx, fy, width) => {
            setPointWidth((average * width) / 5);
        });
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.label}>
                <Text style={styles.labelText}>{label}</Text>
            </View>
            <View ref={ref} style={styles.bar}>
                <View style={styles.grayBar} />
                <View style={{ ...styles.yellowBar, width: pointWidth }} />
            </View>
            <View style={styles.point}>
                <Text style={styles.pointText}>{averageString}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
    },
    label: {
        flexBasis: 70,
    },
    bar: {
        flex: 1,
        width: '100%',
        marginLeft: 22,
        marginRight: 25,

        position: 'relative',
    },
    point: {
        flexBasis: 25,
        width: '100%',
    },
    grayBar: {
        width: '100%',
        height: 7,
        backgroundColor: '#EFEFEF',
        borderRadius: 3.5,
    },
    yellowBar: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 7,
        backgroundColor: '#FFC740',
        borderRadius: 3.5,
    },
    labelText: {
        color: '#747474',
        fontSize: theme.font.size.middle,
    },
    pointText: {
        fontWeight: '600',
        fontSize: theme.font.size.middle,
        textAlign: 'right',
    },
});

export default PointBar;
