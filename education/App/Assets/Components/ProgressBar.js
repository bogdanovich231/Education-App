import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';
import Colors from '../../Shared/Colors';

export default function ProgressBar({ progress }) {
    return (
        <View>
            <Progress.Bar
                progress={progress}
                width={Dimensions.get('screen').width * 0.90}
                style={{
                    marginLeft: 20,
                    marginTop: 20,
                    borderColor: Colors.primary
                }}
                color={Colors.primary} />
        </View>
    )
}