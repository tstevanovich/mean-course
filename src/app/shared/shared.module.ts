import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const COMPONENTS = [];
const PROVIDERS = [];
const MODULES = [
  CommonModule,
  BrowserAnimationsModule,
  // Material Form Controls
  MatAutocompleteModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  // Material Navigation
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  // Material Layout
  MatCardModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatListModule,
  MatStepperModule,
  MatTabsModule,
  MatTreeModule,
  // Material Buttons & Indicators
  MatButtonModule,
  MatButtonToggleModule,
  MatBadgeModule,
  MatChipsModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatRippleModule,
  // Material Popups & Modals
  MatBottomSheetModule,
  MatDialogModule,
  MatSnackBarModule,
  MatTooltipModule,
  // Material Data Table
  MatPaginatorModule,
  MatSortModule,
  MatTableModule
];

@NgModule({
  imports: [MODULES],
  declarations: [COMPONENTS],
  providers: [PROVIDERS],
  exports: [MODULES, COMPONENTS]
})
export class SharedModule {}
