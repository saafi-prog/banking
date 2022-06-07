import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProfileCreateComponent } from './page-profile-create.component';

describe('PageProfileCreateComponent', () => {
  let component: PageProfileCreateComponent;
  let fixture: ComponentFixture<PageProfileCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageProfileCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProfileCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
