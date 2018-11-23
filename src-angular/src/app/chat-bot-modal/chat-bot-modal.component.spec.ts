import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatBotModalComponent } from './chat-bot-modal.component';

describe('ChatBotModalComponent', () => {
  let component: ChatBotModalComponent;
  let fixture: ComponentFixture<ChatBotModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatBotModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatBotModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
