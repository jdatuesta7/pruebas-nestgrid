import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  public publications: Array<any> = [
    {
      title: 'Blog 1',
      description: 'Esta es la descripcion de mi blog 1'
    },
    {
      title: 'Blog 2',
      description: 'Esta es la descripcion de mi blog 2'
    },
    {
      title: 'Blog 3',
      description: 'Esta es la descripcion de mi blog 3'
    },
    {
      title: 'Blog 4',
      description: 'Esta es la descripcion de mi blog 4'
    },
    {
      title: 'Blog 5',
      description: 'Esta es la descripcion de mi blog 5'
    },
    {
      title: 'Blog 6',
      description: 'Esta es la descripcion de mi blog 6'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
