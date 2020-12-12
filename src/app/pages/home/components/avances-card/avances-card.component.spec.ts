import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AvancesCardComponent } from './avances-card.component';

describe('AvancesCardComponent', () => {
  let component: AvancesCardComponent;
  let fixture: ComponentFixture<AvancesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvancesCardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AvancesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
