import { SafePipe } from './SafePipe';
import { MapService } from './map.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from '@ngrx/store';

import { TodoComponent } from './todo.component';
import { TodoItemComponent } from './todo-item.component';
import { TodoItemFormComponent } from './todo-item-form.component';
import { TodoItemDetailsComponent } from './todo-item-details.component';

import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { routing } from './app.routing';
import { EffectsModule } from '@ngrx/effects';
import { TodoItemsEffects } from './effects/todo-items.effects';

@NgModule({
  declarations: [
    TodoComponent,
    TodoItemComponent,
    TodoItemFormComponent,
    TodoItemDetailsComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    routing,
    EffectsModule.forRoot([TodoItemsEffects])
  ],
  providers: [MapService],
  bootstrap: [TodoComponent]
})
export class AppModule { }
