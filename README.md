# ANGULAR 4 - FORMS [REACTIVE APPROACH]
## Reactive approach
To use the reactive approach, we need edit the following files.
**In app.module.ts**
- Delete import `import { FormsModule } from '@angular/forms';`
- Delete `FormsModule` from imports array
- Add import `import { ReactiveFormsModule } from '@angular/forms';`
- Add `ReactiveFormsModule` from imports array

### Initialize Form
**In component ts file**
```typescript
ngOnInit() {
    this.FormGroupVariableName = new FormGroup({
        ...
    });
}
```
### Syncing HTML and Form
**In component HTML file**
```html
<form [formGroup]="signupForm">
<!-- In each input -->
formControlName="FormGroup-key-name"
```
### Submit form
```html
<form [formGroup]="GroupFormVariableName" (ngSubmit)="onSubmit()">
```
> We don't need to add an argument in `onSubmit()` method because the form and `FormGroup` object are binding.
### Add validators
To validate a form with the reactive approach, we need add in `FormGroup` object a `Validator` object.
*Example:*
```typescript
this.signupForm = new FormGroup({
  'username': new FormControl(null, Validators.required),
  'email': new FormControl(null, [Validators.required, Validators.email]),
  'gender': new FormControl('male')
});
```