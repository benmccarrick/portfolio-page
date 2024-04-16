import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{

  projects = {} as Project[];

  isCollapsed: boolean = true;
  typescript: boolean = false;
  angular: boolean = false;
  javascript: boolean = false;
  react: boolean = false;
  nodejs: boolean = false;
  reactnative: boolean = false;
  firebase: boolean = false;
  postgres: boolean = false;
  filtering: boolean = false;


  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Ben McCarrick - Portfolio')
  }
  ngOnInit(): void {
   this.projects = this.projectService.GetProjects();
  }

  Filter() {
    let filterTags: Tag[] = [];

    if (this.typescript) {
      filterTags.push(Tag.TYPESCRIPT);
    }
    if (this.angular) {
      filterTags.push(Tag.ANGULAR);
    }
    if (this.javascript) {
      filterTags.push(Tag.JAVASCRIPT);
    }
    if (this.react) {
      filterTags.push(Tag.REACT);
    }
    if (this.reactnative) {
      filterTags.push(Tag.REACTNATIVE);
    }
    if (this.nodejs) {
      filterTags.push(Tag.NODEJS);
    }
    if (this.firebase) {
      filterTags.push(Tag.FIREBASE);
    }
    if (this.postgres) {
      filterTags.push(Tag.POSTGRES);
    }

    if(this.typescript || this.javascript || this.angular || this.react || this.reactnative || this.nodejs || this.firebase || this.postgres){
      this.filtering = true;
    }
    else {
      this.filtering = false;
    }

    this.projects = this.projectService.GetProjectByFilter(filterTags);
  }

  ResetFilters() {
    this.typescript = false;
    this.javascript = false;
    this.react = false;
    this.reactnative = false;
    this.nodejs = false;
    this.angular = false;
    this.firebase = false;
    this.postgres = false;
    this.filtering = false;

    this.projects = this.projectService.GetProjects();
  }
}
