import { Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { Http, HttpModule, Response, BaseRequestOptions } from '@angular/http';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let fixture : ComponentFixture<AppComponent>;
  let app : AppComponent;
  let backend;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory:
            (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
                return new Http(backend, defaultOptions);
            }
         }
      ],
      imports: [MatToolbarModule, MatCardModule, RouterTestingModule.withRoutes([]), HttpModule],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  });

  it('should create the organizational hierarchy app', async(() => {   
    expect(app).toBeTruthy();
  }));

  it('should send the request to the specified location to get the data', (done) => {
    done();
  });
  
  it('should render orgnization name and location in h2 tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#org_Name_Location').textContent).toContain('expand_less');
  }));

  it('should fire the show whole team click handler', fakeAsync( () => {
      fixture.detectChanges();
      spyOn(app, 'showWholeTeam');
      fixture.debugElement.nativeElement.querySelector('#org_Name_Location').click();
      tick();
      fixture.detectChanges();
      expect(app.showWholeTeam).toHaveBeenCalled();
  }));

});
