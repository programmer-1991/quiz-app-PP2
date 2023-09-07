# Quiz To Learn

Quiz-to-learn is a website that aims to show how pure JavaScript works in a real-world setting and creates an effective way to promote learning and educational content. The site targets people with different age groups who enjoy playing quiz games and eager to enhance their knowledge and retain information better. Quiz-to-learn offers to users a fun and effective way to learn, challenge themselves, and engage with others, making it a valuable tool for education, entertainment, and personal development.

![Responsice Mockup]()

## Features

### Existing Features

- __The Header__
  
  - Featured at the top of the page, the header shows the game name: Quiz To Learn and it is easy to see for the user.
  - It clearly tells the user what game they are playing.
  - It is clickable in case the user wants to restart the game.

![Logo](assets/images/)

- __The Rules section__
  
  - This will tell the user the game rules before starting the game.

- __The quiz section__

  - This section will allow the user to play the quiz game. The user will be able to see the questions to answer as a part of the game.  
  - The user can answer the questions by choosing an answer. The answer alternatives are interactive buttons.
  - After choosing an answer, if the button turns green then that makes it known that the answer is correct, otherwise the button will turn red to make it clear that the answer is wrong and the right answer will be highlighted with green.
  - After answering the question the next button will be shown and the user can click on it to view the next question.
  
- __The score section__ 
 
  - This section will allow the user to see exactly how many correct answers they have provided.
  - The user have the opportunity to play again by clicking "Play again" button.

![score]()


### Additional Features to Implement
  - add game rules.
  - add a timer for questions.
  - add 404.html file.
  - add mediaquery to make it more responsive to mobile devices.
  - add more questions with different categories or make them random.

## Testing

- I tested playing this game on different browsers: Chrome, Opera and Firefox.
- I confirmed that the header link works.
- I confirmed that the next button and the answer buttons work and interacts with the user the way intended.
- I confirmed that the score results are always correct
- I confirmed that the header, instructions, buttons and score results text are all readable and easy to understand.
- I confirmed that the colors and fonts chosen are easy to read and accessible by running it through lighthouse in devtools.

![lighthouse](assets/images/lighthouse_testing.png)

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your project’s features and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

### bugs
- dfgf
- fgfgf

### Validator Testing

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fprogrammer-1991.github.io%2Fquiz-app-PP2%2F)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fprogrammer-1991.github.io%2Fquiz-app-PP2%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=sv)
- JavaScript
  - No errors were found when passing through the official [Jshint validator](https://jshint.com/)
    - The following metrics were returned:
    - There are 8 functions in this file.
    - Function with the largest signature take 2 arguments, while the median is 0.
    - Largest function has 8 statements in it, while the median is 4.
    - The most complex function has a cyclomatic complexity value of 2 while the median is 1.5.

### Unfixed Bugs

You will need to mention unfixed bugs and why they were not fixed. This section should include shortcomings of the frameworks or technologies used. Although time can be a big variable to consider, paucity of time and difficulty understanding implementation is not a valid reason to leave bugs unfixed.
- next button is clickable without choosing an answer.

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows:
  - In the GitHub repository, navigate to the Settings tab
  -Check to the left "code and automation" and then click on Pages.
  - From the source section drop-down menu, select "deploy from a branch".
  - From the branch section click on "main" and choose main in the menu.
  - Then the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found here - <https://programmer-1991.github.io/quiz-app-PP2/>

## Credits

In this section you need to reference where you got your content, media and extra help from. It is common practice to use code from other repositories and tutorials, however, it is important to be very specific about these sources to avoid plagiarism.

You can break the credits section up into Content and Media, depending on what you have included in your project.

### Content

- The text for the Home page was taken from Wikipedia Article A
- Instructions on how to implement form validation on the Sign Up page was taken from [Specific YouTube Tutorial](https://www.youtube.com/)
- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/)

### Media

- The photos used on the home and sign up page are from This Open Source site
- The images used for the gallery page were taken from this other open source site

Congratulations on completing your Readme, you have made another big stride in the direction of being a developer!
