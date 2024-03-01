// app.module.ts

onSubmit() {
  console.log('Submit triggered');
}

import { StoreModule } from '@ngrx/store';
import { authReducer } from './path-to-auth.reducer';

@NgModule({
  imports: [
    // ... Otros módulos
    StoreModule.forRoot({ auth: authReducer }),
  ],
  // ...
})
export class AppModule { }
