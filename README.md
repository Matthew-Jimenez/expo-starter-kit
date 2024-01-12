# expo-starter-kit

This repository aims to offer a robust foundation for launching various mobile applications. It streamlines essential features like routing, authentication, testing infrastructure, and code linting, allowing you to concentrate on your primary concern - developing your unique business logic.

With "expo-starter-kit," you can kickstart your app development journey with confidence, knowing that the fundamental groundwork is already in place.

## Firebase

If you have not already, please create a new firebase project with iOS and Android apps registered.

You do not need to follow the instructions when prompted to add the Firebase SDK or initialize code, this starter kit takes care of that.

While creating both projects, be sure to save the google-services.json (android) and the GoogleService-Info.plist (iOS) files.

#### ⚠️⚠️⚠️ Important - Add `google-services.json` & `GoogleService-Info.plist` to root of project ⚠️⚠️⚠️

#### Troubleshooting
 Error: [ios.infoPlist]: withIosInfoPlistBaseMod: [@react-native-firebase/auth] Failed to parse your GoogleService-Info.plist. Are you sure it is a valid Info.Plist file with a REVERSE_CLIENT_ID field?

Solution: Go to the Authentication tab in projects firebase console and enable google authentication. Redownload the GoogleService-Info.plist and replace in root directory.

## Navigation
This project uses [react-navigation/native](https://reactnavigation.org/docs/getting-started/) & [@react-navigation/native-stack](https://reactnavigation.org/docs/native-stack-navigator/) to handle navigation


{
  "expo": {
    "name": "expo-starter-kit",
    "slug": "expo-starter-kit",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.mattzj.expostarterkit",
      "googleServicesFile": "./GoogleService-Info.plist"
    },
    "android": {
      "googleServicesFile": "./google-services.json",
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "package": "com.mattzj.expostarterkit"
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "plugins": [
      "@react-native-firebase/app",
      "@react-native-firebase/auth",
      [
        "expo-build-properties",
        {
          "ios": {
            "useFrameworks": "static"
          }
        }
      ]
    ]
  }
}
