# LookMatcher

In this repository, we have created an Android\IOS app. This is the client side. You can find the server side [here](https://github.com/ShaharMosh/server)

## General Information

### Creating a new user
On the registration screen, the user must fill in the following details: first name, last name, email, password and password verification. After filling in all the details correctly and clicking on the register button, the user will be transferred to the home screen of the application. If one of the details is filled in incorrectly (empty field / incorrect email or password, etc.), an error message will appear.

### Login
the user must fill in the email and password with which they registered for the application. If the details are indeed correct, you will be transferred to the home screen in the application. If not, an error message will appear.

### Password reset by sending an email
If an existing user wants to reset his password on the login screen, he will enter the email he used to register with the system. After that, a password reset email will be sent to his email containing a token. The user will enter this token in the application and will also enter his new password.

### The home screen and tool bar
The home screen shows the user's first name and 4 buttons: search, edit details, wish list and recommendations. By pressing a certain button, the user will be transferred to the relevant screen. In addition, you can also go to any screen by clicking on the button that appears in the tool bar.

![image](https://github.com/user-attachments/assets/44bd0a8f-cdf4-44b4-899c-1ae65fe8f33e)

### Editing personal details
On this screen, the user can edit the following details with which he registered for the application: first name, last name, email and password.

### Search for a garment
The customer chooses one or more of the available options in the following fields: gender, category, color, size and store. After clicking the search button, he will be shown items that match the search he made. Each item will display a name, photo, price and company. In addition, the items displayed on the screen can be sorted by price - from low to high or from high to low and by distance - depending on the user's location, the items can be sorted according to the locations of the branches.

![image](https://github.com/user-attachments/assets/19431f91-7ace-4685-8afc-2e6545e694c4)
![image](https://github.com/user-attachments/assets/783b6f53-f2b6-43b9-9946-e1a00d5cccff)

### Item screen
When the user clicks on one of the items displayed on the search results screen, he will be taken to the item screen. On this screen, several pictures of the item, the name of the item, color, price, size and company will be displayed. In addition, you can go to the item screen on the company's own page. You can also open a map and it will show the location of the user, the location of the branch of the company to which the item belongs, closest to the user and the locations of all the branches of the company.

![image](https://github.com/user-attachments/assets/1ba7a6bb-1c68-4881-8318-079834031f72)

### Wishlist
On the search results screen, a heart button appears next to each item. By clicking this button, the item is added to the wishlist belonging to each user. This means that each user can save items he likes and access them directly through the wish list screen. In addition, by pressing the heart button again, the item is deleted from the wish list.

### Search stores
This screen shows a list of all the stores that appear in the application. By clicking on any store, a map opens showing all the branches of that company in Israel. The user's current location is marked in pink and the branch of the company that is closest to the user's location is marked in red. The other branches are marked in blue. By clicking on the location of a certain branch, a waze application will open that navigates to the location of the store itself.

![image](https://github.com/user-attachments/assets/b4c4324e-bbc7-4447-8630-d301c64fef08)

### Recommendations
On this screen, shown recommendations of clothes according to the clothes the user saved in his wishlist. That is, we assume that the clothes that the user saved in the wish list are clothes that the user liked. So based on these clothes, we offer him similar clothes.

![image](https://github.com/user-attachments/assets/2109e001-c801-4f75-b430-b83177bae175)

## Installation

Before installing this project, you need to install on your computer:

- Git

Then open a terminal and clone the project:
```
git clone https://github.com/adi-ben-yehuda/LookMatcher.git
```

To run the application, write: 
```
npm start
```

