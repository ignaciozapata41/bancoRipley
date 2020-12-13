import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BankPortalPage } from './bank-portal.page';

describe('BankPortalPage', () => {
  let component: BankPortalPage;
  let fixture: ComponentFixture<BankPortalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankPortalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BankPortalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
