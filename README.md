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
  

### android
- 빌드 세팅.

    ```java
    #./android/app/build.gradle

    ...
    dependencies {
        ...
        //dependencies 하위요소로 아래 세팅 추가.
        implementation(project(':react-native-maps')){
        exclude group: 'com.google.android.gms', module: 'play-services-base'
        exclude group: 'com.google.android.gms', module: 'play-services-maps'
        }
        
        implementation 'com.google.android.gms:play-services-base:17.2.1'
        implementation 'com.google.android.gms:play-services-maps:17.0.0'

        ...
        ...
    }
    ```

- Add google API Key

    ```XML
    #./android/app/src/main/AndroidManifest.xml
    
    <application>
    <!-- application 태그 및의 자식속성으로 아래 아래의 태그들을 추가.-->
    <meta-data
        android:name="com.google.android.geo.API_KEY"
        android:value= "GOOGLE_API_KEY""/>  
    <uses-library android:name="org.apache.http.legacy" android:required="false"/>

    <activity>
    ...
    </application>
    ```
    구글 API_KEY 부분을 실제 키로 변경

reference
https://github.com/react-native-maps/react-native-maps/blob/master/docs/installation.md