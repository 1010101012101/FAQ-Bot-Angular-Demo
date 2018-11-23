import { Component, OnInit } from '@angular/core';
import { ChatBotService } from './chat-bot-modal.service';
@Component({
  selector: 'app-chat-bot-modal',
  templateUrl: './chat-bot-modal.component.html',
  styleUrls: ['./chat-bot-modal.component.css'],
  providers: [ChatBotService]
})
export class ChatBotModalComponent implements OnInit {
  showChatForm = false;
  question = '';
  answer = '';
  messageList = [];
  constructor(private chatBotService: ChatBotService) { }

  ngOnInit() {
  }

  startChat() {
    this.showChatForm = true;
  }

  closeChat() {
    this.showChatForm = false;
  }

  sendMessage() {
    this.messageList.push(
      {
        question: this.question,
        answer: 'Loading'
      }
    );
    const requestData = {
      question: this.question
    };
    this.chatBotService.post(requestData).subscribe(data => {
      if (data) {
        this.messageList[this.messageList.length - 1].answer = data.answers[0].answer;
      }
    });
    this.question = '';
  }
}
