import { prop, getModelForClass } from '@typegoose/typegoose'
import { Document } from 'mongoose'
import { ICharacter, ICharacter as WaifuResponse } from '@shineiichijo/marika'

class Inventory {
    @prop({ type: String, required: true })
    public item!: string

    @prop({ type: Number, required: true })
    public usageLeft!: number
}

class Icon {
    @prop({ type: Boolean, required: true, default: false })
    public custom!: boolean

    @prop({ type: String })
    public hash?: string

    @prop({ type: String })
    public url?: string
}

class Username {
    @prop({ type: Boolean, required: true, default: false })
    public custom!: boolean

    @prop({ type: String })
    public name?: string
}

class About {
    @prop({ type: Boolean, required: true, default: false })
    public custom!: boolean

    @prop({ type: String })
    public bio?: string
}

class Haigusha {
    @prop({ type: Boolean, required: true, default: false })
    public married!: boolean

    @prop({ type: Object, required: true, default: () => ({}) })
    public data!: WaifuResponse
}

export class UserSchema {
    @prop({ type: String, required: true, unique: true })
    public jid!: string

    @prop({ type: Number, required: true, default: 0 })
    public experience!: number

    @prop({ type: Boolean, required: true, default: false })
    public banned!: boolean

    @prop({ type: Number, required: true, default: 1 })
    public level!: number

    @prop({ type: String, required: true })
    public tag!: string

    @prop({ type: Number, required: true, default: 0 })
    public quizWins!: number

    @prop({ type: () => Haigusha, required: true, default: () => ({ married: false, data: {} }) })
    public haigusha!: Haigusha

    @prop({ type: () => Icon, required: true, default: () => ({ custom: false }) })
    public icon!: Icon

    @prop({ type: () => About, required: true, default: () => ({ custom: false }) })
    public about!: About

    @prop({ type: () => Username, required: true, default: () => ({ custom: false }) })
    public username!: Username

    @prop({ type: () => Inventory, required: true, default: [] })
    public inventory!: Inventory[]

    @prop({ type: String, required: true, default: 'None' })
    public companion!: string

}

export type TUserModel = UserSchema & Document

export const userSchema = getModelForClass(UserSchema)
