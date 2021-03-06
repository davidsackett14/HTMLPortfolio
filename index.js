$(document).ready(function(){
    
    const projects= [
        {
          "title": "Team Profile Builder",
          "desc": "this is a command line application that the allows the users to create teams of employees. the employees profiles are created through a series of questions and those answers are used to create an html document displaying the portfolios",
          "deployed": "",
          "repo": "https://github.com/davidsackett14/employeeTeamBuilder",
          "image": "https://raw.githubusercontent.com/davidsackett14/employeeTeamBuilder/main/main/Screenshot%20(121).png"
        },
        {
          "title": "Landscaping",
          "desc": "Landscaping webiste that allows visitors to leave reviews and allows the owner to login and delete reviews",
          "deployed": "https://whispering-meadow-99169.herokuapp.com/",
          "repo": "https://github.com/Jewls250/landscaping",
          "image": "https://github.com/Jewls250/landscaping/raw/main/landscaping/client/src/components/assets/Screen%20Shot%202021-05-28%20at%208.56.15%20AM.png"
        },
        {
          "title": "Job-Aid",
          "desc": "Job Aid is a simple user friendly CRM created to help small businesses manage customer information to better help them retain customers and create marketing campaigns based off historical job acquisition.",
          "deployed": "https://whispering-eyrie-33529.herokuapp.com/",
          "repo": "https://github.com/Koffidanh/job-aid",
          "image": "https://raw.githubusercontent.com/davidsackett14/Portfolio/main/src/images/screen3.png"
        },
        {
          "title": "Trail Helper",
          "desc": "A recreation app that allows the user to search by state and activity for state parks using an ajax api call. the app generates cards for each of the results and displays a picture, description, and link to the state parks website.",
          "deployed": "https://davidsackett14.github.io/TrailHelperSite/",
          "repo": "https://github.com/davidsackett14/TrailHelperSite",
          "image": "https://raw.githubusercontent.com/davidsackett14/Portfolio/main/src/images/Web%20capture_24-6-2021_85323_davidsackett14.github.io.jpeg"
        },
        {
          "title": "Weather Gen App",
          "desc": "this app allows users the ability to search for a city and see the 7 day weather forecast for that city including humidity and uv index. It includes the use of gifs to rpresent the weather conditions.the app will store the search history and allow the user to click on the previously searched cities and see the forecast for that location.",
          "deployed": "https://davidsackett14.github.io/WeatherGenApp/",
          "repo": "https://github.com/davidsackett14/WeatherGenApp",
          "image": "https://github.com/davidsackett14/WeatherGenApp/raw/main/Screenshot%20(120).png"
        },
        {
          "title": "Fitness Tracker",
          "desc": "this application is used to track workouts by exercise and stores this information to mongoDB.",
          "deployed": "https://murmuring-reaches-96545.herokuapp.com/exercise?id=60d49f65d73ce10015cf51db",
          "repo": "https://github.com/davidsackett14/fitnessTracker",
          "image": "https://raw.githubusercontent.com/davidsackett14/fitnessTracker/main/Web%20capture_23-6-2021_9308_localhost.jpeg"
        } 
        
      ]
      
     
    $.each(projects, function(i,projectIndex){
        var projectCard =` <div
        className="row "
        style='padding: 3px; background-color: lightgray'
        ><div classe="row p-2 border bg-dark"> 
        <div class="col-sm-6 ">
          <div class="card">
            <div classe="card-body">
              <img
                class="card-img-top"
                src='${projects[i].image} '
                alt="Card cap"
              />
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${projects[i].title}</h5>
              <p class="card-text">${projects[i].desc}</p>
              <a
                href=${projects[i].deployed}
                target="_blank"
                rel="noreferrer"
                class="btn btn-primary"
                
              >
                Go to deployed app
              </a>
              <a
                href=${projects[i].repo}
                target="_blank"
                rel="noreferrer"
                class="btn btn-primary"
                
              >
                Go to repository to view code
              </a>
            </div>
          </div>
        </div>
        </div>
        </div>`;
        var projectDiv = $('#cardContainer');
        projectDiv.append(projectCard)
    }) 

}
   
)
