import { Injectable } from '@angular/core';
import { Tag } from '../_models/Tag';
import { Project } from '../_models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {id: 0, name: "NorthCoders Final Group Project", pictures: ["../../assets/PlanPerfect.png"], projectLink: "https://github.com/FredR0101/Plan-Perfect-2", projectLink2: "https://northcoders.com/project-phase/plan-perfect",summary: "A travel itinerary mobile application perfect for users who want to organise their holidays.", description: "A React-Native/Expo front-end based mobile app that utilises Firebase authentication and Firebase Firestore database as a back-end. Plan perfect gives the user the option to create travel itineraries to any country they wish to travel to with ease, whilst remaining local to their own profile. Users are able to add activities to a specific itinerary, view recommended activities that the app offers, and also view a personal calendar on their profile which contains all the upcoming activities they may have. This project was the carried out in the final two weeks of the Northcoders bootcamp and was achieved as a team of six people. To view even more detail, and see in the app in action, there is a five minute video presentation via the below link:", tags: [Tag.JAVASCRIPT, Tag.REACTNATIVE, Tag.FIREBASE]},
    {id: 1, name: "NC News Back-End Project", pictures: ["../../assets/ncnewsbackend.png"], projectLink: "https://github.com/benmccarrick/nc_news_project", projectLink2: '', summary: "A back-end project developed using SQL and PSQL that will provide information to the front-end architecture of a news website.", description: "The intention of this project is to mimic the building of a real world backend service (such as Reddit) which should provide information to the front end architecture. This was built using SQL, PSQL and seeding, and thoroughly tested using Test-Driven-Development(TDD), Jest and Supertest. This was a solo project that was carried out during the Northcoders bootcamp.", tags: [Tag.JAVASCRIPT, Tag.POSTGRES, Tag.SQL, Tag.NODEJS]},
    {id: 2, name: "NC News Front-End Project", pictures: ["../../assets/ncnewsfehomepage.png", "../../assets/ncnewsfearticlespage.png", "../../assets/ncnewsfesinglearticle.png", "../../assets/ncnewsfecomments.png", "../../assets/ncnewsfeaddarticle.png"], projectLink: "https://github.com/benmccarrick/nc-news-project-fe", projectLink2: '',summary: "A front-end web API project using React, that was built using the NC News Back-End Project.", description: "The intention of this project was to build the front-end of NC News - a social news aggregation, web content rating and discussion website. NC News has an auto-login feature when clicking on an established username from the backend data. It also has articles which are divided into topics, and each article has user-curated ratings from upvotes and downvotes using the API. Users can also add comments about an article. Users are also able to delete their own comments/articles.", tags: [Tag.JAVASCRIPT ,Tag.REACT]},
    {id: 3, name: "Ben McCarrick's Portfolio Page", pictures: [], projectLink: "https://github.com/benmccarrick/portfolio-page", projectLink2: '',summary: "This very page. Built using Angular and written in TypeScript.", description: "First mini project since graduating from the Northcoders bootcamp. Built using Angular and TypeScript, both of which I am using for the first time on this page. As I am early in my career as a software developer, I hope to expand my portfolio and include numerous exciting projects I have helped out on.", tags: [Tag.TYPESCRIPT, Tag.ANGULAR]},
  ];

  constructor() { }

  GetProjects() {
    return this.projects;
  }

  GetProjectById(id: number) : Project {
    let project = this.projects.find(project => project.id === id);

    if (project === undefined) {
      throw new TypeError('There is no project that matches the id: ' + id);
    }
    
    return project;
  }

  GetProjectByFilter(filterTags: Tag[]) {
    let filteredProjects: Project[] = [];

    this.projects.forEach(function (project) {
      let foundAll = true;

      filterTags.forEach(function (filterTag) {
        if(project.tags.includes(filterTag) == false) {
          foundAll = false;
        }
      });

      if(foundAll) {
        filteredProjects.push(project);
      }
    });

    return filteredProjects;
  }
}
