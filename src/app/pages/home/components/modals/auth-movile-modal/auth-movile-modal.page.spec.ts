import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AuthMovileModalPage } from './auth-movile-modal.page';

describe('AuthMovileModalPage', () => {
  let component: AuthMovileModalPage;
  let fixture: ComponentFixture<AuthMovileModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthMovileModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AuthMovileModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
