import { db } from "../db.js";

export const createEvent = (req, res) => {
    const q = "INSERT INTO events(`title`, `description`, `date`, `organizer_id`) VALUES (?)";
    const values = [
        req.body.title,
        req.body.description,
        req.body.date,
        req.body.organizer_id
    ];
    db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Evento registrado com sucesso!");
    });
};

export const getEvents = (req, res) => {
    const q = "SELECT * FROM events";
    db.query(q, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
    });
};

export const deleteEvent = (req, res) => {
    const q = "DELETE FROM events WHERE id = ?";
    db.query(q, [req.params.id], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Evento deletado com sucesso!");
    });
};

export const updateEvent = (req, res) => {
    const q = "UPDATE events SET `title` = ?, `description` = ?, `date` = ?, `organizer_id` = ? WHERE `id` = ?";
    const values = [
        req.body.title,
        req.body.description,
        req.body.date,
        req.body.organizer_id,
        req.params.id
    ];
    db.query(q, values, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Evento atualizado com sucesso!");
    });
};
