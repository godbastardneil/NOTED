import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { IUser } from "src/types/types";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy)
{
    constructor(private readonly configServies: ConfigService)
    {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoteExpiration: false,
            secretOrKey: configServies.get('JWT_SERCET_KEY')
        })
    }

    async validate(user: IUser)
    {
        return { id: user.id, email: user.email }
    }
}