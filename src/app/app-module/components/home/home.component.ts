/**
 * Dependencies
 */
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NestedTreeControl } from '@angular/cdk/tree';

interface Classification {
  name: string;
  children: Classification[];
}

/**
 * Component
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  // data
  public classifications: Classification[] = [
    {
      name: 'test',
      children: [
        {
          name: 'a',
          children: [],
        },
        {
          name: 'b',
          children: [],
        }
      ]
    },
    {
      name: 'test2',
      children: [
        {
          name: 'a',
          children: [],
        },
        {
          name: 'b',
          children: [],
        }
      ]
    }
  ];

  public treeControl = new NestedTreeControl<Classification>(node => of(node.children));

  /**
   * Constructor
   */
  constructor() {}

  public ngOnInit() {

  }

}
