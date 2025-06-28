import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ChatService {
  // Initial messages array
  private initialMessages = [
    { sender: "Person 1", content: "Hello", timestamp: "2023-10-01T12:00:00Z" },
    {
      sender: "Person 2",
      content: "Hi, how are you",
      timestamp: "2023-10-01T12:01:00Z",
    },
  ];

  // Use BehaviorSubject to hold the messages array
  private messageSource = new BehaviorSubject<
    { sender: string; content: string; timestamp: string }[]
  >(this.initialMessages);

  // Observable stream of messages
  message$ = this.messageSource.asObservable();

  constructor() {}

  // Method to send a message
  sendMessage(sender: string, content: string, currentTime: string): void {
    // Get current messages
    const currentMessages = this.messageSource.value;
    // Add new message to array
    const updatedMessages = [
      ...currentMessages,
      { sender, content, timestamp: currentTime },
    ];
    // Update observable
    this.messageSource.next(updatedMessages);
  }
}
