import { Component, OnInit, HostListener, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

declare var BotChat: any;
declare var window: any;
@Component({
  selector: 'app-azure-chat-bot',
  templateUrl: './azure-chat-bot.component.html',
  styleUrls: ['./azure-chat-bot.component.css'],
  animations: [
    trigger('openClose', [
      transition('open => closed', [
        style({ transform: 'translateY(100%)' }),
        animate(800)
      ])
    ])
  ]
})

export class AzureChatBotComponent implements OnInit, AfterViewInit {
  hideChatForm = true;
  constructor(private elementRef: ElementRef,
    private renderer2: Renderer2) { }

  ngOnInit() {
    this.loadAzureChatBot();
  }

  startChat() {
    this.hideChatForm = false;
  }

  endChat() {
    this.hideChatForm = true;
  }
  loadAzureChatBot() {
    const params = BotChat.queryParams(location.search);
    const user = {
      id: params['userid'] || 'userid',
      name: params['username'] || 'You'
    };
    const bot = {
      id: params['botid'] || 'botid',
      name: params['botname'] || 'botname'
    };
    window.botchatDebug = params['debug'] && params['debug'] === 'true';
    const speechOptions = {
      speechRecognizer: new BotChat.Speech.BrowserSpeechRecognizer(),
      speechSynthesizer: new BotChat.Speech.BrowserSpeechSynthesizer()
    };

    BotChat.App({
      bot: bot,
      locale: params['locale'],
      resize: 'detect',
      // sendTyping: true,    // defaults to false. set to true to send 'typing' activities to bot (and other users) when user is typing
      speechOptions: speechOptions,
      user: user,
      directLine: {
        secret: 'yKz3-z_ndWI.cwA._eg.YGEC3MjKXt6JB55KeY0cHRL6aHJVdQSWmFA1JpeTR6s',
        webSocket: params['webSocket'] && params['webSocket'] === 'true' // defaults to true
      }
    }, document.getElementById('BotChatGoesHere'));
  }

  ngAfterViewInit() {
    const el = this.elementRef.nativeElement.querySelector('.wc-header');
    const closeIcon = document.createElement('span');
    const text = this.renderer2.createText('X');
    this.renderer2.setStyle(closeIcon, 'float', 'right');
    this.renderer2.appendChild(closeIcon, text);
    this.renderer2.insertBefore(el, closeIcon, el.firstChild);
    if (el) {
      el.addEventListener('click', this.endChat.bind(this));
    }
  }
}
