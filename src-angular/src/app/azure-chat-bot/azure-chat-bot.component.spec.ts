import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AzureChatBotComponent } from './azure-chat-bot.component';

describe('AzureChatBotComponent', () => {
  let component: AzureChatBotComponent;
  let fixture: ComponentFixture<AzureChatBotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AzureChatBotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AzureChatBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
