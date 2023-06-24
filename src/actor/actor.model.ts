import { prop } from '@typegoose/typegoose'
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses'

export interface ActorModel extends Base {}

export class ActorModel extends TimeStamps {
	@prop()
	name: string

	@prop()
	photo: string

	@prop({ unique: true })
	slug: string

	@prop()
	birthDate: string

	@prop()
	birthPlace: string

	@prop()
	careerPeriod: string

	@prop()
	miniBio: string
}
