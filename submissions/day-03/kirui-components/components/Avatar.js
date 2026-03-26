import { Image } from 'react-native'

export default function Avatar({imgSource, size = 80}) {
    return (
        <Image
            source={{ uri: imgSource }}
            style={{
                width: size,
                height: size,
                borderRadius: size / 2,
            }}
        />
    );
}

