import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WsResponse,
} from '@nestjs/websockets';

@WebSocketGateway()
export class SocketGateway {
  @SubscribeMessage('client')
  handleClient(@MessageBody() body: string): WsResponse<unknown> {
    const event = 'client';

    return { event, data: body };
  }

  @SubscribeMessage('device')
  handleDevice(@MessageBody() body: string): WsResponse<unknown> {
    const event = 'device';

    return { event, data: body };
  }
}
