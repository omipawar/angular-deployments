import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APIIntegrationComponent } from './api-integration.component';

describe('APIIntegrationComponent', () => {
  let component: APIIntegrationComponent;
  let fixture: ComponentFixture<APIIntegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [APIIntegrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(APIIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
