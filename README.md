## Installation
```shell script
$ git clone https://github.com/bsideproject/byeolbyeoldongne-app.git
$ cd byeolbyeoldongne-app
$ yarn install
$ yarn ios or yarn android
```

## react-native-maps 설치
### 사전 설치
- cocoapods install (https://guides.cocoapods.org/using/getting-started.html)
- react-native global install
    ```
    $ npm i -g react-native-cli
    ```
- react-native-maps install
    ```
    $ yarn add react-native-maps -E
    ```

### ios
- pod install
    ```shell script
    $ react-native link
    $ cd ios
    $ pod install
    ```
- Add google api key
    ```objc
    # ./ios/AppDelegate.m
  
    + #import <GoogleMaps/GoogleMaps.h>
    
    @implementation AppDelegate
    ...
    
    - (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
    {
    +  [GMSServices provideAPIKey:@"GOOGLE_API_KEY"]; // add this line using the api key obtained from Google Console
    ...
    ``` 
    GOOGLE_API_KEY를 실제 키로 변경합니다.
    
- use native modules
    ```objc
    # ./ios/Podfile
    # React Native Maps dependencies
    ...
  
    rn_maps_path = '../node_modules/react-native-maps'
    pod 'react-native-google-maps', :path => rn_maps_path
    pod 'GoogleMaps'
    pod 'Google-Maps-iOS-Utils'
  
    config = use_native_modules!
    use_react_native!(:path => config["reactNativePath"])
    ...
  
    ```
  

reference
https://github.com/react-native-maps/react-native-maps/blob/master/docs/installation.md
