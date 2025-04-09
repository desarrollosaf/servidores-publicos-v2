"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadServidor = void 0;
const servidor_1 = require("../models/servidor");
const dependencia_1 = require("./../models/dependencia");
const ReadServidor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listServidor = yield servidor_1.Servidor.findAll({
        include: [
            {
                model: dependencia_1.Dependencia,
                as: 'dependencia'
            }
        ]
    });
    res.json(listServidor);
});
exports.ReadServidor = ReadServidor;
