# JavaScript Calculator
 Add a calculator to webpage using macOS Shortcuts or Tampermonkey UserScript

An input bar will appear and your input expression will be evaluated

Usage example: exp(sqrt(3e1)/24*R/lg(2^4)/ln(7)) will return "2.247412716187969", "2.247" and "2.247e0". "2.247e0" will be copied to your clipboard

- Click this link to add this UserScript for moodle.ucl.ac.uk to Tampermonkey: https://raw.githubusercontent.com/yihuanlin/JavaScript-Calculator/main/Moodle.user.js

- Shortcuts for iOS 12 or above/macOS Monterey or above: https://www.icloud.com/shortcuts/c11bb4e1f75e4caba333542b6861c36f

- Shortcuts to remove Calculator: https://www.icloud.com/shortcuts/ff3d04382680409cbc15036875e9d582

- Alternatively, you can run the following code in browser console to remove Calculator:
```
document.querySelectorAll(".fromShortcuts").forEach(el => el.remove());
```

Not-JavaScript-based Calculator Shortcuts for iOS 12 or abovef/macOS Monterey or above: https://www.icloud.com/shortcuts/ec1c0d8818594f0580e79bf0bdc5bab4
