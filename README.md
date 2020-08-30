# What
Angular component to manage list of from/to date. See demo recording below.

![Demo](https://github.com/quad-coders/angular-date-list-management/blob/master/demo.gif)

# Environment
- Angular 9
- Bootstrap 4
- ng-bootstrap 7
- Font Awesome 5

# Setup Instructions
This repository include the `date-list-management` component and all the necessary setup.
If you are starting a new Angular project, please follow the following setup:

1. Install Bootstrap and ng-bootstrap.
```
npm install bootstrap
npm install @ng-bootstrap/ng-bootstrap
```

2. Install Font Awesome.
```
npm install @fortawesome/angular-fontawesome
npm install @fortawesome/fontawesome-svg-core
npm install @fortawesome/free-solid-svg-icons
```

3. Install Angular localize.
```
ng add @angular/localize
```

4. Update `app.module`, add FormsModule.
```
import { FormsModule } from '@angular/forms';

@NgModule({
  ...
  imports: [
    ...,
    FormsModule
  ]
})
```

5. Update `app.module`, add ng-bootstrap.
```
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  ...
  imports: [
    ...,
    NgbModule
  ]
})
```

6. Update `app.module`, add Font Awesome.
```
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

export class AppModule {
  constructor(faLibrary: FaIconLibrary) {
    faLibrary.addIconPacks(fas);
  }
}
```

7. Update `style.scss` to include bootstrap.
```
@import '~bootstrap/scss/bootstrap';
```

8. Copy `date-list-management` component from this repository, `src\app\date-list-management`, to your repository.

9. Update `app.module`, declare the component.
```
import { DateListManagementComponent } from './date-list-management/date-list-management.component';

@NgModule({
  ...
  declarations: [
    ...,
    DateListManagementComponent
  ]
})
```
