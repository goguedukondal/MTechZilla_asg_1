This is Pomodro timer App .
The app starts with a login page where users are prompted to provide their email address and password.
If the user has previously signed up, they can log in using their credentials.
If not, new users are required to sign up first.
To maitain collected data from user i have used firebase.If the login details are matched with the data in the firebase while logging into account then timer page will open otherwise it wont open timer page.
In this application i have used react-routing inorder to switch from one page to other page dynamically.
In Timer page i implemented Pomodro timer logic so that user can start timer,pause timer and reset timer.The intial value of timer is 25 minutes after clicking on start button the count down will start.By clicking on Pause button timer will stop. In the same way by clicking on reset button timer will reset to 25 menutes again.
After 25 menutes 5 minutes breaker timer will start.After Breaker timer is ended then working timer will restart with 25 minutes.
To build this logic i have used The setInterval and clearInterval functions are used to manage the timer functionality.
I have used useState hook to maintain timer states, such as the current time remaining.
I have used useEffect for performing side Effects.
Users can log out from the timer page by clicking the "Log Out" button.

