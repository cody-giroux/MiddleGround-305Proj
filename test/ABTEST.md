A/B Testing. Firebase provides built-in support for A/B testing, but using it requires that you develop your Android App in using the SDK in Android Studio, which is not possible when using Thunkable.
As a team, create an ABTEST.md file in the test folder of our team’s repo.  Discuss the A/B tests as a team. Pick at least one A/B tests per team member that would have the most impact. 
Describe the tests in ABTEST.md using this format for each test:

- A/B Test Name:
- User Story Number:
- Metric (from the HEART grid):
- Hypothesis: The key part of a A/B test is formulating your hypothesis as this guides the whole A/B test plan. What problem are we trying to solve? Its impact? (e.g. how big this problem is to our customers?) In formulating the hypothesis, first you need to define the problem you want to solve. For example, you are an SaaS that offers free trial and you want to improve Adoption. But that problem might be too broad to form an A/B test as you can simply test one variable in an A/B test to be effective (otherwise you won’t know which variable is causing the change). So to narrow down the problem you want to solve, you need to find out the bottle-neck in the conversion funnel – where do people drop off the most? Are there any key information or call-to-action buttons that you expect people to read/click but they didn’t? 
After narrowing down the problem you want to solve, you then need to make a hypothesis as to what causes those bottlenecks and what you can do to improve. For example, you noticed most of the visitors will visit your “Features” page but very few of them will actually scroll past even half of the page so many features that you think are important are not actually viewed by the visitors. To improve this, one hypothesis might be using tab or toggle list design to make your page shorter and visitors can select to dig deeper into content that they are interested in by expanding the content. Remember when formulating your hypothesis, change only one variable so that you will know it’s really that variable that is causing the change in conversion.
Now you have your hypothesis, the next is to plan how you are going to measure your results. Defining your success metrics carefully beforehand is important. Otherwise, if there is not enough tracking done during the experiment, it might be hard to draw conclusions and next steps at the end of the experiment.
- Experiment - Detail out the experiment setup that you will use to test your hypothesis using Firebase capabilities. Describe the audiences – will all users be able to view the experiment? Or you will only allocate x% of your user base to the experiment? Lay out the details with the rationale behind this decision. Describe the tracking using Firebase Analytics. With your success metrics, what tracking needs to be set up? 
- Variations - In this section, describe what variations you would like to test. Layout the design work related and add diagrams, mockups and designs related to the confirmed variation that you’d like to test.

# Javon

A/B Test Name: Location Selection
User Story Number: 3
Metric (from the HEART grid): Happiness
Hypothesis: Allowing users to set location based off where they currently are will allow people to have a better user experience than having to type in their locations.

Experiments: 

Control Group: Control group will have to type in their location when they want to set it.
Experimental Group: Experimental group can just push a button and use their current location.

Variations:
Control Group: Control group will use the app as normal.
Experimental Group: This group will use the updated app with the new button to set current location to hopefully have a smother and better experience when setting their location.

Both groups will use their version for some time, and we will be able to collect metrics to see which group is more fond of their set up. This will allow us to choose the one that best fits in with happiness in the HEART framework.


# Kevin

A/B Test Name: Location-Based Event Planning Feature, User Story Number: #4 Adoption (from the HEART grid): Adoption, Adoption Hypothesis: Implementing a location-based event planning feature in the app will increase user adoption by simplifying the process of discovering and creating events based on users' geographic preferences.

Experiments:
Control Group: Users without access to the preference-based event planning feature.
Experimental Group: Users with access to the preference-based event planning feature.

Variations:
Control Group: Users will continue using the app's existing event discovery and creation features.
Experimental Group: Users will have access to the new preference-based event planning feature, allowing them to discover and create events based on their current location or specified activity preferences.

Both groups will be observed over a set period to measure adoption metrics such as the number of users utilizing the event planning feature, the frequency of event creation, and the retention rate of users who engage with the feature. Surveys or feedback forms may be utilized to gather qualitative data on user satisfaction and perceived usefulness of the feature.


# Cody

A/B Test Name: Location-Based Event Planning Feature
User Story Number: #4
Metric (from the HEART grid): Engagement
Hypothesis: Implementing a location-based event planning feature in the app will increase user engagement by providing more personalized and convenient event planning options.

Experiments:

Control Group: Users without access to the location-based event planning feature.
Experimental Group: Users with access to the location-based event planning feature.
Variations:
 - Control Group: Users will continue using the app's existing event planning features.
 - Experimental Group: Users will have access to the new location-based event planning feature, allowing them to plan events based on locations equidistant among the group or around the user's general vicinity.

Both groups will be observed over a set period to measure engagement metrics such as the frequency of event creation, active participation, and time spent within the app.
Surveys or feedback forms may be utilized to gather qualitative data on user satisfaction and perceived usefulness of the feature.

# Kenny

A/B Test Name: Dark Mode Theme
User Story Number: 4
Metric (from the HEART grid): Engagement
Hypothesis: Implementing a dark mode theme in the app will increase user engagement by providing a more comfortable viewing experience, especially during nighttime usage or in low-light environments.

Experiment:

- Control Group: Users without access to the dark mode theme.
- Experimental Group: Users with access to the dark mode theme.
Both groups will have equal exposure to other app features except for the presence of the new theme for the experimental group.
Firebase Remote Config will allocate users randomly to the control and experimental groups.

Tracking:
Firebase Analytics will monitor metrics such as session duration, screen views, and user interactions.
Success metrics will include user engagement metrics such as session duration, screen views, and interactions within the app.

Variations:
Control Group: Users will continue using the app with its default light mode theme.
Experimental Group: Users will have access to the new dark mode theme, allowing them to switch between light and dark themes based on their preference or ambient lighting conditions.
The variation will include a toggle switch in the app settings for users to easily switch between light and dark modes.


# Connor
- A/B Test Name: Main User Interface Testing
- User Story Number: 4
- Metric (from the HEART grid): Engaguement
- Hypothesis:
  User interaction and interface can play a significant role in how someone percieves an app. By creating variations of where the home page navigation bar sits, we can test how users interact accordingly. The theory is that often times users enjoy apps with navigation bars at the bottom due to phone navigation in relation to their thumbs. One or two hands are often at the bottom of the phone for optimal dexterity, but this could not be the case. By creating a fresh look with a unique navigation bar we could pull in users based on the design choices we make with user interractions on the home page. My personal hypothesis is that bottom bar navigation is tried and true with numerous examples in place. But I'd love to hear what chat thinks. 
  
- Experiment - The goal is to release two versions of a home page. A version consisting of a bottom navigation bar, and B with a file system navigation bar that slides out from the left. This way the search bar may remain at the top, and the keyboard is still usable when searching, just the navigation is then hidden. 

  
- Variations - A: Navigation at the bottom, search at the top
  B: a file system that slides out from the left side, with the search bar at the top. 

