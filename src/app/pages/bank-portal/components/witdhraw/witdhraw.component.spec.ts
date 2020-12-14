import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WitdhrawComponent } from './witdhraw.component';

describe('WitdhrawComponent', () => {
  let component: WitdhrawComponent;
  let fixture: ComponentFixture<WitdhrawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WitdhrawComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WitdhrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
