import { Document, model, Schema } from "mongoose";

export type TExemplaire = {
  numero: number,
  nom: string,
  emprunteur: string,
  dateEmprunt: Date,
  point: string,
  test: string[]
}

export type TPoint = {
  lieu: string;
};


export interface IPoint extends TPoint, Document { }
export interface IExemplaire extends TExemplaire, Document { }


const exemplaireSchema: Schema = new Schema({
  numero: {
    type: String,
    required: true,
    unique: true,
  },
  nom: {
    type: String,
    required: true,
  },
  emprunteur: {
    type: String,
    required: false
  },
  dateEmprunt: {
    type: Date,
  },
  point: {
    type: Schema.Types.ObjectId,
    ref: 'Point',
    required: true,
  },
  test: {
    type: []
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const pointSchema: Schema = new Schema({
  lieu: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});


export const Point = model<IPoint>("Point", pointSchema);
export const Exemplaire = model<IExemplaire>("Exemplaire", exemplaireSchema);

