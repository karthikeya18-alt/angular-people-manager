import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

console.log('Bootstrapping Angular app...');

bootstrapApplication(AppComponent, { providers: [provideRouter(routes)] })
  .then(() => console.log('Bootstrap successful!'))
  .catch(err => console.error('Bootstrap error:', err));