import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class SocketGateway {
  @WebSocketServer()
  server: Server;

  sendData(data: any) {
    const event = 'client';

    this.server.emit(event, data);
  }

  sendIndicators(data: any) {
    const newData = {
      time: new Date(),
      indicators: data,
    };

    this.sendData(newData);
  }
}
