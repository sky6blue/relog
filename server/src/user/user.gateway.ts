import {
  ConnectedSocket,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway(80, { cors: { origin: '*' }, namespace: 'user' })
export class UserGateway {
  @WebSocketServer()
  private server: Server;

  @SubscribeMessage('event')
  handleEvent(@ConnectedSocket() socket: Socket) {
    console.log(socket.handshake);
    console.log('ev handled');
  }
}
