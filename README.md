## AngryNorman

Team name : AngryNorman 


Team member: Seong Chan Cho (sc77) Gunju Yoo (gy24) 


Project Description: To Cheat or Not to Cheat is a mini game where player runs away from angry professor Norman while avoiding obstacles. 


Project Deatils: (https://docs.google.com/document/d/1_j8OgXuTX_C_5hVC8X42tUdr5KQR7XEtckNiW6UO4sA/edit) <br>
- URL to our game: https://angrynorman-1bd08.web.app 

## Important Notes:

AngryNorman has built our project above (https://github.com/deeps8/ng-dino) Chrome Dino Game. 

As in CS336, Using Canvas was not taught to fully implement what we wanted to so we had to search an example project that was built and use an existing project to build what we intended to do.

We have added more features and functionalities along with more UI and components. 

## Understanding the source code:

obstacle being created by:

       -> spawning() being called
       
       -> when game starts, every determined gamespeed seconds, obstacle is created and added to array
       
       -> This array contains objects of classes obstacle
       
       -> Each of these Rectangle shaped obstacles are created by this.platformRef.nativeElement.getBoundingClientRect();
       
       -> Which is a manipulation of DOM, it returns a DOMRECT object. (https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)
       
       -> Then at in spawning() function, Using DOM Manipulation, and timer with setInterval, objects are able to be created and moved across the Document
       
       
Player Moving: 

       -> player, also a rectangle object, just blurred out as a white background and overlayed with an image, has two functionalities:
       
       -> Jump: player can jump above the ground, calculated by x and y offset coordination and wrapped by setInterval timing
       
       -> Duck: player can duck down, calculated by x and y offset coordination and wrapped by setInterval timing
       
       
## Future add-on ( as for Future Personal Project) :

       ->  Hoping to make professor Norman to Jump and Duck by self, giving recognition of offsets and remaining distance with the upcoming object.

Other than the main skeleton above, we have used:

- https://www.w3schools.com/howto/howto_css_shake_image.asp
- scoreboard scss: https://freefrontend.com/css-tables/
- addUserToTable function in data.service.ts: https://www.makeuseof.com/store-update-retrieve-data-from-firebase-database-in-angular/


was able to understand the source code after watching and reading:

- https://www.youtube.com/watch?v=CR5cFHmNi6U
- https://medium.com/weekly-webtips/how-to-pass-data-between-components-in-angular-8-c6bfc0358cd2
- https://angular.io/guide/inputs-outputs

## Extra:

Project was built on existing project itself, but was able to understand what code was doing, We have implemented most of the class (angular & firebase) materials in the project as a build-on top of the skeleton. 
