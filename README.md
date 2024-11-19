### Description

<img width="1620" alt="Screenshot 2024-11-19 at 14 58 30" src="https://github.com/user-attachments/assets/6153e727-adc3-47fa-a05a-e19c2a87ea79">

Behavior: react-native-svg Text components render undesired ligatures in iOS, but does not in Android or Web.
Expected behavior: Text renders the text passed to it and is the same across iOS, Android, and Web.

### Steps to reproduce

1. Use a font that has good ligatures support, such as Roboto.
2. Render svg Text `キロ, メートル coston` in iOS, web, and Android
3. 🎯 Notice that in iOS, the japanese text is collapsed into a combined character, and in Coston, the s and t are combined. These are not the correct values.
