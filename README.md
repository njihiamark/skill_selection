# Frontend Code Assignmet

This was an Assignmet to meet the following specs:

1. When user opens the pages, the user sees collapsed skill categories.
2. Clicking any of skill category buttons expand it.
3. If less than 5 skills selected, we’ll display an error.
4. Clicking either the checkbox or title should toggle the skill and update the ”X skills selected” text.
5. Final screen should list all chosen skills.

Which were all met. You can see the working demo of the above specs [here](https://skillselection.herokuapp.com/)

## Implementation

I used [React.js](https://reactjs.org/), for easier state management and [Material UI](https://material-ui.com/) because the mock-ups were
in [Google's material design](https://material.io/) to try and speed up the development process. The skills object was stored in the state
of the App component which was the only stateful component in the app.

I feel that the minimum requirements were met, which were:

* A working user flow which is faithful to the original design
* Responsive web page which works both on desktop browsers and modern mobile browsers.

On extra points :

* If user is on mobile, show all skills at once instead of having a scrollable list. This makes the mobile experience nicer.

_I think I somewhat achieved this_

* Add hover and click states for all clickable areas.

_This was achieved_

* Add transitional animation when the list expands/collapses.

_This was achieved_

* Make page compatible with Opera Mini, as many of our Ugandan users still use it. See Dev.Opera — Opera Mini and JavaScript for learning how JavaScripts works on Opera Mini.

_I did not carry out the test for this_

## Extra Considerations

I would use education and work experience roles to filter the data for the skills and return the skills with the most counts limiting the result to 10. On the user interface I also think there should be a search box to help filtering the checkboxes as the user types to help in the skill selection. I could consider a library like this [one](https://react-autosuggest.js.org/)
