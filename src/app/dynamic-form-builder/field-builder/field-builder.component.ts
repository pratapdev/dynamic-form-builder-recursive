import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'field-builder',
  template: `
  <ng-container [formGroup]="form">
    <ng-container [ngSwitch]="field.type">
      <div class="child">
        <textbox *ngSwitchCase="'text'" [field]="field" [form]="form"></textbox>
        <checkbox *ngSwitchCase="'checkbox'" [field]="field" [form]="form"></checkbox>
        <radio *ngSwitchCase="'radio'" [field]="field" [form]="form"></radio>
        <div *ngIf="!isValid && isDirty">{{field.text}} is required</div>
      </div>
    </ng-container>
    <!-- 子を持つ場合 -->
    <ng-container  *ngIf="field.item">
    <div *ngFor="let childField of field.item" class="parent">
        <field-builder [field]="childField" [form]="form.controls[field.id + '_child']"></field-builder>
    </div>
    </ng-container>
  </ng-container>
  `
})
export class FieldBuilderComponent implements OnInit {
  @Input() field:any;
  @Input() form:any;

  constructor() { }

  ngOnInit() {
  }

}
