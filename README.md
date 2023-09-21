# Angular CAPTCHA Project

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Author](#author)

## Description

This is a multiple-stage CAPTCHA web application developed using Angular. There are totally 3 different types of challenges: MATH, TEXT, and IMAGE.

- MATH: The user is given a simple arithmetic expression and they need to provide a correct result in order to move on.
- TEXT: The user is given an alphabetical string with some distracted figures and again, they need to find and provide the correct text in order to move on.
- IMAGE: The user is given a cat image in 36 small pieces organized as a 6x6 matrix. They need to choose ALL the pieces that have some parts of a cat in it.

Completing all of the above 3 challenges will prove that the use is indeed a human, not a bot.

The user is able to start new challenges again after completion.

The user is able to move back to the previous challenge which they already completed. There, they can opt to try the challenge again if they want. Nevertheless, they do NOT have to complete a challenge in order to move on to the next challenge if they already completed that challenge before.

The user progression is always kept track so in case the user opts to refresh the browser, they will always end up wherever they were before the refresh.

## Installation

Make sure you have NODE JS and Angular CLI installed and configured properly on your machine.

You can download NODE JS [here](https://nodejs.org/en).

After downloading and installing NODE JS successfully, run the following command to install Angular CLI:

```bash
npm install -g @angular/cli@latest
```

To install the project, clone the following repository to your local machine:

```bash
git clone https://github.com/danglam88/Angul-It.git
```

## Usage

Navigate to the root directory of the project, then run the following command:

```bash
npm install
```

This will install all the necessary packages and dependencies for the project. After that, run:

```bash
ng serve
```

This will start the server at `http://localhost:4200/` and the CAPTCHA application is ready to be used.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Contributing

Contributions are welcome. Please open an issue or submit a pull request if you would like to help improving the project.

## Author

- [Danglam](https://github.com/danglam88)
