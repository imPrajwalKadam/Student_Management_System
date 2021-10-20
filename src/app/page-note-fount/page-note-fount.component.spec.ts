import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNoteFountComponent } from './page-note-fount.component';

describe('PageNoteFountComponent', () => {
  let component: PageNoteFountComponent;
  let fixture: ComponentFixture<PageNoteFountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNoteFountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNoteFountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
