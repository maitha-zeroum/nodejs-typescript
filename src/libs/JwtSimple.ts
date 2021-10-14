import { decode, encode } from 'jwt-simple'
const _ALGORITHM = 'aes-256-cbc'
const _HASH = 'mYCE2YFy034ncm1Qf8JqN60c61a7poOP'
const _SECRET = '190ui9dk1w2ksl10=owe1kw9d1u8dey18gwe12jw9diw0-uer1g2uh8ydg1d127h'
const _IV = Buffer.from('PbnzHwwF0Zo77vqQ')

export class JwtSimple {

  public static createJWT(sub: object): string {
    const now = new Date()
    const payLoad = {
      sub,
      iat: now.getTime(),
      exp: new Date().setHours(now.getHours() + 24)
    }

    return encode(payLoad, _SECRET)
  }

  public static jwtValidate(req: any, res: any, next: any) {
    try {
      // beare hadhaioshdioashidoheh
      const auth = req.header('Authorization')
      if (!auth) {
        res.status(401).json({
          message: 'Access not authorized'
        })
        return
      }
      const token = auth.split(' ')[1] // limpando beare + espaço em branco pegando apenas o token

      if (!token) {
        res.status(401).json({
          message: 'Access not authorized'
        })
        return
      }
      const payload = decode(token, _SECRET)
      const now = new Date()
      if (payload.exp < now) {
        res.status(401).json({
          message: 'Access token expired!'
        })
        return
      }
      req.authToken = payload.sub
      next()
    } catch (error) {
      console.error('Erro on middleware authentication', error)
      res.status(500).json({
        message: 'Internal server error'
      })
      return
    }
  }
}
