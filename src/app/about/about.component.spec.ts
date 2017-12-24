import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterTestingModule } from '@angular/router/testing';
import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [MatToolbarModule, MatCardModule, RouterTestingModule.withRoutes([]),],
      declarations: [
        AboutComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('About componenet should be created', () => {
    expect(component).toBeTruthy();
  });
});
