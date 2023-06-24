import { IsString } from 'class-validator'

export class CreateActorDto {
	@IsString()
	name: string

	@IsString()
	slug: string

	@IsString()
	photo: string

	@IsString()
	birthDate: string

	@IsString()
	birthPlace: string

	@IsString()
	careerPeriod: string

	@IsString()
	miniBio: string
}
