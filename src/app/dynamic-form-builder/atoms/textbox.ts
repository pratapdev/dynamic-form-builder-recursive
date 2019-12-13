import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

// text,email,tel,textarea,password,
@Component({
    selector: 'textbox',
    template: `
      <ng-container [formGroup]="form">
        <div>
          <label>{{field.text}}：</label>
          <input *ngIf="!field.multiline" [attr.type]="field.inputType" [id]="field.id" [name]="field.id" [formControlName]="field.id">
          <textarea *ngIf="field.multiline" [class.is-invalid]="isDirty && !isValid" [formControlName]="field.id" [id]="field.id"
          rows="9" [placeholder]="field.placeholder"></textarea>
          </div>
      </ng-container>
    `
})
export class TextBoxComponent {
    @Input() field:any = {};
    @Input() form:FormGroup;
    get isValid() { return this.form.controls[this.field.id].valid; }
    get isDirty() { return this.form.controls[this.field.id].dirty; }
}
