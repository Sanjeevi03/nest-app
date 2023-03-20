import {Injectable} from '@nestjs/common'

@Injectable()
export class AppService{
  getHello(){
    return '<h1>Sanjeevi</h1>';
  }
}