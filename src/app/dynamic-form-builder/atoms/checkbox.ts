import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'checkbox',
    template: `
      <div [formGroup]="form">
        <label [attr.for]="field.label">
          {{field.text}}：
          <strong *ngIf="field.required">*</strong>
        </label>
        <ng-container [formGroupName]="field.id" >
          <div *ngFor="let opt of field.options">
            <label>
              <input [formControlName]="opt.value" type="checkbox"  [value]="opt.value" />
              {{opt.text}}
            </label>
          </div>
        </ng-container>
      </div>
    `
})
export class CheckBoxComponent {
    @Input() field:any = {};
    @Input() form:FormGroup;
    get isValid() { return this.form.controls[this.field.id].valid; }
    get isDirty() { return this.form.controls[this.field.id].dirty; }
}
