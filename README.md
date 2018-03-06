# ClefNotes

### A new way for private music teachers to keep their notes in line

![Logo Image](https://github.com/sheriffhoodie/clef-notes/blob/master/images/clefnotes-logo-small.png)

ClefNotes is a notes and organization app designed for private music teachers to help manage their students' information and track their weekly lesson times. It is built using the cross-platform React Native library (iPhone- and Android-friendly) and uses Google Firebase for user authentication and user data storage.

### Demo Installation

ClefNotes will soon be added to the App Store and Google Play but in the meantime, [a live demo can be found here](https://snack.expo.io/@sheriffhoodie/clefnotes)! Simply download the free Expo Client app on your mobile device and scan the QR code that appears in the link. You can then demo the app on your own device and in the browser. For those that wish to try the demo, you can use "Test@test.com" and "password" for the demo username and password login.

## Features

1. Student Management

![stud gif](images/CN-update.gif)

Users can easily manage their students with full Create-Read-Update-Delete capabilities. After initial creation, tapping the "Info" button for each student will bring you back to the Student Form with all of that student's current information pre-populated. Tapping the "Save Changes" button at the bottom will immediately update the student's info with your changes.

2. Communication Shortcuts

![comm gif](images/CN-shortcuts.gif)

In the master List View page, tapping on a student's name will expand their section, revealing their instrument, lesson day, and lesson time, along with various shortcut communication buttons. If the student has the "Can Text?" option enabled, a blue Text shortcut button will be available. Otherwise, a green Email button to email the student will appear instead. Each of these shortcut buttons will navigate you to that app in your device, with the student's info (phone number or email address) pre-filled for you.  

3. Dual Students View

![dual gif](images/CN-dual.gif)

You can view your students in two ways: in the general List View where you can see all your students in a master list and access their individual information, or you can view them in chronological order in the Week View, which sorts your students by their lesson days and then again by their lesson times.

4. User Authentication

![auth gif](images/CN-auth.gif)

ClefNotes makes use of Google Firebase for both user authentication and data storage. Users have the option to login with an existing account or create a new account. Any authentication errors are caught and displayed to the user.

### Code Sample

One of the bigger challenges in building ClefNotes was dealing with the student's `lessonTime` attribute - to properly display and function across the different components, it needed to take different forms and lengths and be converted to different types at different times. I solved this by doing all my conversion in the `Student Form` component and saving the results to the student object as 3 different values. In the form, the selected time is first saved as a JS Date object, which is used as the initial display time when the user wants to change it later on. Second, the selected time is converted to and stored as a 4-digit integer so that it can be sorted in the `Week View` component. Finally, the selected time is converted to a user-friendly, more readable 12-hour string format with "AM" and "PM" appended, used for display purposes in multiple areas.

```javascript
createTimeInt(time) {
  let hour = time.slice(0, 2);
  let mins = time.slice(3, 5);
  let intString = hour + mins;
  return parseInt(intString);
}

convertTime(time) {
  let hour = time.slice(0, 2);
  let mins = time.slice(3, 5);
  if (parseInt(hour) < 12) {
    return hour + ":" + mins + " AM";
  } else if (parseInt(hour) === 12) {
    return hour + ":" + mins + " PM";
  } else {
    return (parseInt(hour - 12)).toString() + ":" + mins + " PM";
  }
}

pickTime(time) {
  this.props.studentUpdate({ prop: 'dateObj', value: time.toString() });
  time = time.toString().slice(16, 22);
  let timeInt = this.createTimeInt(time);
  this.props.studentUpdate({ prop: 'timeInt', value: timeInt});
  let newTime = this.convertTime(time);
  this.setState({ chosenTime: newTime });
  this.props.studentUpdate({ prop: 'lessonTime', value: newTime });
  this.hideTimePicker();
}
```

## Future Directions

In future updates, I'd like to implement the following:

- add an option to open student addresses in Maps
- sync student lesson days and times with phone Calendar app
- add reset password by email option to login form
- email verification on new user registration
- add Google and/or Facebook authentication options
- add push notifications and alerts for upcoming lessons

## Credits

- Code by: Max Currier
- Logo Design by: [Logojoy.com](http://logojoy.com)
- Icons from: [FontAwesome](http://fontawesome.com) via [RN Vector Icons](https://github.com/oblador/react-native-vector-icons)
