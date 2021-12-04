import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { FormsModule} from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { detailsReducer } from './details/state/details.reducer';
import { DetailsEffects } from './details/state/details.effects';
import { EvoComponent } from './evo/evo.component';
import { Error404Component } from './error404/error404.component';
import { FindComponent } from './find/find.component';
import { findReducer } from './find/state/find.reducer';
import { FindEffects } from './find/state/find.effects';

@NgModule({
  declarations: [
    DetailsComponent,
    HomeComponent,
    CardComponent,
    EvoComponent,
    Error404Component,
    FindComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InfiniteScrollModule,
    StoreModule.forFeature('detailsContext', detailsReducer),
    EffectsModule.forFeature([DetailsEffects],),
    
    StoreModule.forFeature('findContext', findReducer),
    EffectsModule.forFeature([FindEffects],),
  ],
  exports: [
    DetailsComponent,
    HomeComponent,
  ]
})
export class ComponentsModule { }
