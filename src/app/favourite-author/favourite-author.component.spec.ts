import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteAuthorComponent } from './favourite-author.component';

describe('FavouriteAuthorComponent', () => {
  let component: FavouriteAuthorComponent;
  let fixture: ComponentFixture<FavouriteAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouriteAuthorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
