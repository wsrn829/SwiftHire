# SwiftHire (My first React Native App, enabling users to explore and search job listings from prominent platforms.)

1. The existence of React Native has made React one of the most valuable skills to have.
2. 75% of the knowledge required to create web apps can be applied to making mobile apps.
3. What's the difference between mobile apps and the mobile version of web apps then?
- Mobile apps are standalone applications designed specifically for mobile devices, while the mobile version of web apps is a responsive version of a web app optimized for mobile viewing.
- Mobile apps are usually faster, more responsive, and offer better performance, while the mobile version of web apps relies on internet connectivity and may not offer the same level of performance or features as a native mobile app.
4. React Native has become one of the most popular choices for developing both iOS and Android apps.
5. If expo could not connect to repo on your phone, run below commands:
```
npm install -g expo-cli

expo-cli start --tunnel

```
6. React Native components:
- View:
  - Like div
  - Used to group and style other components
  - Use flexbox layout by default
- Text:
  - Like span
  - Used to display text
- Image:
  - Like img
  - Used to display images
- ScrollView:
  - Like div with {overflow: scroll}
  - Used to create a scrollable container
- TextInput:
  - Like input
  - Used to create an input field for users to enter text
- Button:
  - Like button
  - Used to create a button that users can click on
- TouchableOpacity:
  - Like button with built-in support for touch events
  - Used to create a button that users can click on
- FlatList:
  - Like ul
  - Used to create a scrollable list of items
  - FlatList for long list, map for short list
- SectionList:
  - Like ul with nested lists
  - Used to create a scrollable list of items with sections
- Modal:
  - Like div with {position: fixed}
  - Used to create a modal window that appears on top of the current screen
- ActivityIndicator:
  - Show a spinner or loading indicator 
- SafeAreaView:
  - Provides a safe zone to render your app's content without being covered by your device's hardware (notch/home indicator/status bar)
 


<br />

----------------------------------


# Expo Router Example

Use [`expo-router`](https://docs.expo.dev/router/introduction/) to build native navigation using files in the `app/` directory.

## 🚀 How to use

```sh
npx create-expo-app -e with-router
```

## 📝 Notes

- [Expo Router: Docs](https://docs.expo.dev/router/introduction/)
