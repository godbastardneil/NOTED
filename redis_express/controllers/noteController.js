import Note from '../models.js';
import ApiError from '../error/ApiError.js';

class NoteController {
    async create(req, res, next) {
        const {title, text} = req.body;
        const userId = req.user.id;

        const newNote = await Note.create({title: title, text: text, userId: userId})
        
        return res.json(newNote);
    }

    async findAll(req, res, next) {
        const {id} = req.user.id;

        const newNote = await Note.findAll({where: {userId: id}})
        
        return res.json(newNote);
    }

    async findOne(req, res, next) {
        const {id} = req.params;
        const note = await Note.findOne({ where: { id: id } })
        
        if (!note) { throw next(ApiError.internal('This note not found')); }
        
        return note;
    }

    async update(req, res, next) {
        const {id} = req.params;
        const userId = req.user.id;
        
        const note = await Note.findOne({ where: { id: id } })
        
        if (!note) { throw next(ApiError.internal('This note not found')); }
        
        return await note.update({...req.body});
    }

    async remove(req, res, next) {
        const {id} = req.params;
        const note = await Note.findOne({ where: { id: id } })

        if (!note) { throw next(ApiError.internal('This note not found')); }
        
        return await note.destroy();
    }
}

export default new NoteController()