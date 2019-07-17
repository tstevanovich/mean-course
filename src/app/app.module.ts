import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { CoreModule } from '@app/core/core.module';
import { SharedModule } from '@app/shared/shared.module';
import { PostsModule } from './features/posts/posts.module';

const COMPONENTS = [AppComponent];
const PROVIDERS = [];
const MODULES = [
  BrowserModule,
  SharedModule,
  CoreModule,
  AppRoutingModule,
  PostsModule
];

@NgModule({
  imports: [MODULES],
  declarations: [COMPONENTS],
  providers: [PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule {}
