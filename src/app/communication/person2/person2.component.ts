import { Component, OnInit } from "@angular/core";
import { ChatService } from "src/app/chat.service";

@Component({
  selector: "app-person2",
  templateUrl: "./person2.component.html",
  styleUrls: ["./person2.component.css"],
})
export class Person2Component implements OnInit {
  messages: { sender: string; content: string; timestamp: string }[] = [];
  newMessage: string = "";

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    // Subscribe to incoming messages
    this.chatService.message$.subscribe((messages) => {
      this.messages = messages;
    });
  }

  sendMessage(): void {
    if (this.newMessage.trim() !== "") {
      const currentTime = new Date().toISOString();
      this.chatService.sendMessage("Person 2", this.newMessage, currentTime);
      this.newMessage = "";
    }
  }
}
