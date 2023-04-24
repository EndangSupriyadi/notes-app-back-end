const { addNoteHandler, getAllNotesHandler, getNoteNyIdHandler, editNoteByIdHandler, deleteNoteByIdHandler } = require("./handler");

const routes =[
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
        // options:{
        //     cors:{
        //         origin:['*'],
        //     },
        //},
    },
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler,

    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNoteNyIdHandler,
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: editNoteByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteByIdHandler,

    },
];

module.exports = routes;