import { View, Text, Image, TouchableOpacity } from 'react-native';
import  {NativeWindStyleSheet}  from 'nativewind';

NativeWindStyleSheet.setOutput({
  default: 'native',
});

export default function WelcomeScreen({ navigation }) {
  return (
    <View className="flex-1 bg-white items-center justify-center p-6">
      <Image
        source={require('./assets/logo.png')}
        className="w-40 h-40 mb-8"
        resizeMode="contain"
      />
      <Text className="text-3xl font-bold text-brown-700 text-center mb-4">
        Welcome to Coffee Shop
      </Text>
      <Text className="text-lg text-gray-500 text-center mb-10">
        The best coffee experience at your fingertips
      </Text>
      <TouchableOpacity
        className="bg-brown-700 py-4 px-8 rounded-full"
        onPress={() => navigation.navigate('Home')}
      >
        <Text className="text-white text-lg font-semibold">Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}
