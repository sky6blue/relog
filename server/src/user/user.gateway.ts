import {
  ConnectedSocket,
  OnGatewayConnection,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway(8000, {
  cors: { origin: '*' },
  namespace: 'user',
})
export class UserGateway implements OnGatewayConnection {
  @WebSocketServer()
  private server: Server;

  @SubscribeMessage('event')
  async handleEvent(@ConnectedSocket() socket: Socket) {
    console.log('ev handled');
  }

  handleConnection(client: Socket): any {
    console.log('once');
  }
}
