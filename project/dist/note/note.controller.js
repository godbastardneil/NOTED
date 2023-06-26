"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteController = void 0;
const common_1 = require("@nestjs/common");
const create_note_dto_1 = require("./note.dto/create-note.dto");
const update_note_dto_1 = require("./note.dto/update-note.dto");
const note_service_1 = require("./note.service");
let NoteController = class NoteController {
    constructor(noteService) {
        this.noteService = noteService;
    }
    async getAll() {
        return this.noteService.getAll();
    }
    async getId(id) {
        console.log(id);
        return this.noteService.getId(id);
    }
    async create(dto) {
        console.log(dto);
        return this.noteService.create(dto);
    }
    async update(id, dto) {
        console.log(id, dto);
        return this.noteService.update(id, dto);
    }
    async delete(id) {
        console.log(id);
        return this.noteService.delete(id);
    }
};
__decorate([
    (0, common_1.Get)('getAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NoteController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('getId/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NoteController.prototype, "getId", null);
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_note_dto_1.CreateNoteDto]),
    __metadata("design:returntype", Promise)
], NoteController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_note_dto_1.UpdateNoteDto]),
    __metadata("design:returntype", Promise)
], NoteController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NoteController.prototype, "delete", null);
NoteController = __decorate([
    (0, common_1.Controller)('note'),
    __metadata("design:paramtypes", [note_service_1.NoteService])
], NoteController);
exports.NoteController = NoteController;
//# sourceMappingURL=note.controller.js.map