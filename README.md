# hatch-template-project - LADDERS

This project aims to empower women in urban slums in India. It aims to help improve the lives of Indian domestic workers (of which the majority are women from impoverished backgrounds) by helping them get access to safe, fairly paid work while simultaneously enabling them to gain skills to propel them to a better life in future.

This project was developed during [hatchlondon 2017](http://hatchlondon.io).

## Todo

Tick items off as you go along.

- [X] 1. [Sign up](https://help.github.com/articles/signing-up-for-a-new-github-account/) for a free GitHub account
- [X] 2. [Fork](https://help.github.com/articles/fork-a-repo/) this project
- [ ] 3. Add your forked repo from `step 2` to this [project](https://github.com/SheCanCodeHQ/hatchlondon-2017-projects) as a [Pull Request](https://help.github.com/articles/about-pull-requests/)

### Project setup

From now on it is in your **Forked** repo

- [ ] 4. At the top of your **repo** add a brief project description & link to where it is hosted.

![Repo description and link](https://user-images.githubusercontent.com/624760/33160443-57e86a96-d014-11e7-8488-52592fc69a81.png)

*TIP: [GitHub Pages](https://pages.github.com) gives free static website hosting*

### README changes (this file)

- [X] 5. Change the name at the top of this file on `line 1`
- [X] 6. Under the name of this project put a brief description of the project `line 3` (this can be more detailed than `step 4`)
- [X] 7. Fill in your team members in the **TEAM** section below
- [X] 8. Fill in the **PROBLEM AND SOLUTION** section below
- [X] 9. Fill in the **INSTALL AND RUN THIS PROJECT** section below
- [ ] 10. Any *digital / paper* notes you make during the hackathon you MUST add to the **Issue** section in your repo

*TIP: drag and drop [images / photos](https://help.github.com/articles/file-attachments-on-issues-and-pull-requests/)*

## Team 6

Include all members of your team for the hack here:

* Abby Mitchell [https://github.com/javabster] 
* Arshia Tajlili Moghanjoghi [https://github.com/ATMCASH24] 
* Augusta Senenssie
* Zeina Gohar
* Rahul Jayaprabha
* Parham Rakhshanfar
* Morvarid Ahmadijah

## Problem and Solution

Our target group (i.e. the people we are trying to help): female domestic workers living in urban slums in India
(This group can be expanded if the project were taken forward and scaled up)

### The Problem:
This group of people we are trying to help face major concerns in their daily work life
- they are doing undervalued/underpaid work, due the fact that most domestic work is carried out by women and therefore is not considered valuable
- potentially unsafe situations, where women are going to employers homes to fo housework/collect laundry without knowing much about who is hiring them
- little to no chance of social mobility, due to lack of access to skills training and/or education

All these concerns are inherently linked to The Problem of gender inequality in areas of poverty in India

### The Solution:
Th LADDERS App

This app is simultaneously a marketplace to source domestic work as well as a resource for finding and funding education/skills upgrading of domestic workers. Domestic workers can use the platform as a way to source work (short term employment, such as 1 batch of laundry) from nearby employers, those employers can then tip or give a bonus to a domestic worker they have employed, which will be put into a fund that the worker put towards paying for an online course or skills exam.

The app will partner with charities, universities and other educational organisations to provide skills advancement resources at a discounted rate. The app will also provide the employee users with personalised recommendations for courses they can take, based on their current work and future work preferences.

Both employees and employers will be able to provide anonymous feedback about each other, based on a number of factors (such as 'did you feel safe working for this employer' and 'did this employee arrive on time?'). This will add a level of safety and quality assurance for both employees and eployers.

This was our initial solution, however on pitch day we decided that the scale of our problem was too broad, so we decided to pivot. For our mvp, instaed of creating a standalone app which included aspects of a marketplace, skill development and a saftey ratings feature, we decided it would be better to instead create an add-on feature for existing marketplace apps. the add-on feature being primarily focused on getting existing marketplace users to give tips/bonuses to their employees which would be invested in a fund for them to spend on skills advancement courses. The content of this repo and the features outlined below are for the originial concept of a full standalone app, however our final product will likely be pitched with less functionality.

### App Features (Employee View)
- Skills centre, where users can view how much tip/bonus money they've saved so far, see recommended courses they can take, and see how much % they have saved towards the total price. Some free courses will also be shown.
- User profile, where users can add information about the domestic services they wish to offer, pay rate, working times, as well as select preferences for skills areas they would like to develop
- Offers page, where users can view short term employment offers they've received from employers. They can view pending offers (offers made by the employer but not yet accepted by the employee), open offers (offers that have been accepted by the employee but work has not yet been completed) and closed offers (offers the employee has rejected, or work that has been completed and paid for)
- Conversation page, where users can view message requests from potential employers who wish to discuss details of employment before an offer is formally made

### App Features (Employer View)
- Search, where users can look for nearby domestic workers offering certain services (lanudry, dry-cleaning, cooking, housekeeping)
- Conversations, where users can contact potential employees to discuss details of potential work (i.e. how much laundry, delicates or not, time of pickup etc.)
- Offers page, where users can view short term employment offers they've received from employers. They can view pending offers (offers made by the employer but not yet accepted by the employee), open offers (offers that have been accepted by the employee but work has not yet been completed) and closed offers (offers the employee has rejected, or work that has been completed and paid for). On the open offers page is where the employer can 'Pay Employee'. By clicking this button the prearranged payment amount will be transferred directly to the employee's bank account. The employer user will then be prompted to 'Add a tip for <worker name>'s skills fund?'. If the user chooses to add a tip, this will be but directly into a the employee's skills fund pot, held within the app until it is used to pay for a course.
- Favourites, where users can view employees that they have 'favourited' so can quickly find them again. This is also where users can view their favourite employees profiles and add a bonus payment that will be put directly into the employees skills fund pot, held within the app.
- Personal profile page, where users can add their details to be shown to employees, and can view their feedback scores
  
NOTE TO JUDGES:
We are really sorry, the pages in this repo are not our best coding work, but is the best we could do given the lack of coding ability in our team and an unprecedented amount of technical issues (I wanted to go home and continue working overnight, however when I got home my I found out the flat wifi was down and I spent the whole evening trying to fix it. And theres only so much coding I can do on my 4G hotspot :'( ). Please see our trello board for more detailed prototype visuals, which unfortunately we were not able to fully implement.
  

## Install and run this project
1. Clone this repository onto your machine
2. In the command line run `expo start`
3. Follow the instructions to view the app on your phone or in an emulator
