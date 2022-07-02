import { Injectable } from '@nestjs/common'

@Injectable()
export class UserService {
  async add(user: any): Promise<any> {
    return Promise.resolve().then(() => {
      return user
    })
  }
}
