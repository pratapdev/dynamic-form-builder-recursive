import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fields: any[] = [
      {
          "id": "text1",
          "text": "text1",
          "type": "text"
      },
      {
          "id": "radio1",
          "text": "radio1",
          "type": "radio",
          "options": [
              {
                  "text": "option1",
                  "value": "option1"
              },
              {
                  "text": "option2",
                  "value": "option2"
              },
              {
                  "text": "option3",
                  "value": "option3"
              }
          ]
      },
      {
          "id": "checkbox1",
          "text": "checkbox1",
          "type": "checkbox",
          "options": [
              {
                  "text": "option1",
                  "value": "option1"
              },
              {
                  "text": "option2",
                  "value": "option2"
              },
              {
                  "text": "option3",
                  "value": "option3"
              }
          ]
      },
      {
          "id": "text2",
          "text": "text2",
          "type": "text",
          "item": [
              {
                  "id": "text2-1",
                  "text": "text2-1",
                  "type": "text",
                  "item": [
                      {
                          "id": "text2-1-1",
                          "text": "text2-1-1",
                          "type": "text",
                          "item": [
                              {
                                  "id": "text2-1-1-1",
                                  "text": "text2-1-1-1",
                                  "type": "text","item": [
                                      {
                                          "id": "text2-1-1-1-1",
                                          "text": "text2-1-1-1-1",
                                          "type": "text"
                                      }
                                  ]

                              }
                          ]
                      }
                  ]
              }
          ]
      }
  ];

  ngOnInit() {
  }

  getFields() {
    return this.fields;
  }

  handleOnSubmit(formValues) {
    console.log('--------------------submit--------------------');
    console.log(formValues);
    console.log('--------------------submit--------------------');
  }
}
