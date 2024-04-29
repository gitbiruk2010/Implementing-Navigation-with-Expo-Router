# Implementing-Navigation-with-Expo-Router
This React Native app demonstrates various navigation techniques using Expo Router. It showcases link creation, dynamic routing, as well as push and replace navigation methods.

## Getting Started

To run this project, you'll need to have Node.js and Expo CLI installed on your machine. Clone this repository, install the dependencies, and start the Expo server.

git clone https://github.com/gitbiruk2010/Implementing-Navigation-with-Expo-Router
cd myexporouter
npx expo start

## Features

    Cross-Platform Compatibility: Runs on both Android and iOS thanks to React Native.
    Expo Integration: Simplified project management and development process with Expo.
    Dynamic Routing: Implemented in UserProfilePage.js to demonstrate handling dynamic parameters in URLs.
    Programmatic Navigation: Using useNavigate from react-router-native for navigation without the navigation bar.

## Pages

    HomePage.js: The landing page with navigation options to the About and User Profile pages.
    AboutPage.js: Provides app information and navigation back to the Home page using push and replace methods.
    UserProfilePage.js: Displays a user ID from the URL parameter and includes navigation options to the About and Home pages.

## Navigation Methods

    Link Creation: Initially done with Link components, later switched to touchables for a native feel.
    Push Navigation: Navigates to a new screen and adds it to the stack.
    Replace Navigation: Navigates to a new screen and replaces the current screen in the stack.

## Project Structure Directories:

![image](https://github.com/gitbiruk2010/Implementing-Navigation-with-Expo-Router/assets/103274295/46d43c43-9028-4d6e-b777-8f95f368209e)

## Technologies Used
    React Native
    Expo
    React Router Native
