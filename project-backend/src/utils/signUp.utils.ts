import * as bcrypt from 'bcrypt';

export class HashUserPassword {
  salt: number;

  constructor(salt = 10) {
    this.salt = salt;
  }

  async hashUserPassword(password: string): Promise<string> {
    const hash = await bcrypt.hash(password, this.salt);
    return hash;
  }
}
